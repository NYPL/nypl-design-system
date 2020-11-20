import * as React from "react";

export interface TabsProps {
    items: {
        [key: string]: JSX.Element;
    };
    id: string;
}

export interface TabsState {
    // Which tab is the user currently viewing?
    tab: number;
}

export default class Tabs extends React.Component<TabsProps, TabsState> {
    private buttonRef = React.createRef<HTMLButtonElement>();

    constructor(props: TabsProps) {
        super(props);
        this.select = this.select.bind(this);
        this.makeTabs = this.makeTabs.bind(this);
        this.state = { tab: 0 };
    }

    componentDidUpdate() {
        this.buttonRef.current.focus();
    }

    select(
        e: React.KeyboardEvent<HTMLButtonElement> &
            React.MouseEvent<HTMLButtonElement>
    ) {
        // The element's ID is in the form `button-{idx}-{id}`
        let idx = parseInt(
            (e.currentTarget as HTMLElement).id.split("button-")[1],
            10
        );
        if (e.keyCode) {
            // Keyboard navigation with arrow keys
            // idx is the index of the tab you're already on, that you're trying to navigate away from;
            // newIdx will be the index of the tab you're trying to go to.
            let newIdx: number;
            let tabs = Object.keys(this.props.items);
            if (e.keyCode === 39) {
                // Right arrow key: go to the next tab, or go back to the beginning if you were already on the last tab
                newIdx = idx < tabs.length - 1 ? idx + 1 : 0;
            } else if (e.keyCode === 37) {
                // Left arrow key: go to the previous tab, or go to the end if you were already on the first tab
                newIdx = idx === 0 ? tabs.length - 1 : idx - 1;
            } else {
                // If the user pressed something other than a right/left arrow key, ignore it.
                // Note: this does not interfere with the tab key's intended functionality.
                return;
            }
            this.setState({ tab: newIdx });
            // componentDidUpdate will move the focus to the new tab.
        } else {
            // Click
            // idx is the index of the tab you're trying to go to.
            this.setState({ tab: idx });
        }
    }

    makeTabs(): Array<Array<JSX.Element>> {
        let navs = [] as Array<JSX.Element>;
        let content = [] as Array<JSX.Element>;
        let items = Object.entries(this.props.items);

        items.map((item, idx) => {
            let [name, data] = item;
            let current = idx === this.state.tab;
            let idString = `${idx.toString()}-${this.props.id
                .split(" ")
                .join("-")}`;

            let navItem = (
                <li
                    key={name}
                    role="presentation"
                    className={`tab-nav ${current ? "current" : ""}`}
                >
                    <button
                        aria-controls={`content-${idString}`}
                        aria-selected={current}
                        className=".button"
                        id={`button-${idString}`}
                        onClick={this.select}
                        onKeyDown={this.select}
                        role="tab"
                        tabIndex={current ? 0 : -1}
                        ref={current ? this.buttonRef : null}
                    >
                        {name}
                    </button>
                </li>
            );

            navs.push(navItem);

            let contentItem: JSX.Element = (
                <section
                    aria-labelledby={`button-${idString}`}
                    className={`tab-content ${current ? "" : "hidden"}`}
                    id={`content-${idString}`}
                    key={name}
                    role="tabpanel"
                    tabIndex={0}
                >
                    {data}
                </section>
            );

            content.push(contentItem);
        });
        return [navs, content];
    }

    render(): JSX.Element {
        let [navs, content] = this.makeTabs();
        return (
            <section className="reusable-tabs">
                <ul role="tablist" className="tab-navs">
                    {navs}
                </ul>
                {content}
            </section>
        );
    }
}
