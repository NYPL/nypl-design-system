import * as React from "react";

import BodyText from "./BodyText";

export default {
    title: "BodyText",
    component: BodyText,
};

export const text = () => (
    <BodyText>
        Soufflé jujubes cupcake chocolate bar topping. Lollipop sesame snaps
        tootsie roll liquorice sweet chupa chups. Gummi bears tart sweet roll
        tiramisu biscuit cookie cake. Cookie chocolate jelly-o topping. Halvah
        bear claw wafer cupcake tiramisu ice cream tart gummi bears. Lemon drops
        chocolate cake croissant lemon drops gummies ice cream sugar plum. Sweet
        sesame snaps cookie toffee. Tart muffin bonbon jelly halvah jelly.
        Macaroon cake caramels jujubes macaroon lemon drops. Chocolate cake pie
        halvah. Macaroon lemon drops tiramisu chocolate bar jujubes tootsie roll
        apple pie. Icing sesame snaps pastry caramels muffin donut. Cake
        chocolate tiramisu marshmallow. Jujubes powder dragée caramels wafer
        apple pie bear claw apple pie.
    </BodyText>
);
export const textWithLink = () => (
    <BodyText>
        Soufflé jujubes chocolate bar topping. Lollipop sesame snaps tootsie
        roll liquorice sweet chupa chups. Gummi bears tart sweet roll tiramisu
        biscuit cookie cake. Cookie chocolate jelly-o topping. Halvah bear claw
        wafer cupcake tiramisu ice cream tart gummi bears. Lemon drops chocolate
        cake croissant lemon drops gummies ice cream sugar plum. Sweet sesame
        snaps cookie toffee. Tart muffin bonbon jelly halvah jelly. Macaroon
        cake caramels jujubes macaroon lemon drops. Chocolate cake pie halvah.
        Macaroon lemon drops tiramisu chocolate bar jujubes tootsie roll apple
        pie. Icing sesame snaps pastry caramels muffin donut. Cake chocolate
        tiramisu marshmallow. Jujubes powder dragée caramels wafer{" "}
        <a href="#apple-pie">apple pie</a> bear claw apple pie.
    </BodyText>
);
export const textWithBold = () => (
    <BodyText>
        Soufflé jujubes chocolate bar topping. Lollipop sesame snaps tootsie
        roll liquorice sweet chupa chups. Gummi bears tart sweet roll tiramisu
        biscuit cookie cake. Cookie chocolate jelly-o topping. Halvah bear claw
        wafer cupcake tiramisu ice cream tart gummi bears. Lemon drops chocolate
        cake croissant lemon drops gummies ice cream sugar plum. Sweet sesame
        snaps cookie toffee. Tart muffin bonbon jelly halvah jelly. Macaroon
        cake caramels jujubes macaroon lemon drops. Chocolate cake pie halvah.
        Macaroon lemon drops tiramisu chocolate bar jujubes tootsie roll apple
        pie. Icing sesame snaps pastry caramels muffin donut. Cake chocolate
        tiramisu marshmallow. Jujubes powder dragée caramels wafer{" "}
        <b>apple pie</b> bear claw apple pie.
    </BodyText>
);
export const textWithItalic = () => (
    <BodyText>
        Soufflé jujubes chocolate bar topping. Lollipop sesame snaps tootsie
        roll liquorice sweet chupa chups. Gummi bears tart sweet roll tiramisu
        biscuit cookie cake. Cookie chocolate jelly-o topping. Halvah bear claw
        wafer cupcake tiramisu ice cream tart gummi bears. Lemon drops chocolate
        cake croissant lemon drops gummies ice cream sugar plum. Sweet sesame
        snaps cookie toffee. Tart muffin bonbon jelly halvah jelly. Macaroon
        cake caramels jujubes macaroon lemon drops. Chocolate cake pie halvah.
        Macaroon lemon drops tiramisu chocolate bar jujubes tootsie roll apple
        pie. Icing sesame snaps pastry caramels muffin donut. Cake chocolate
        tiramisu marshmallow. Jujubes powder dragée caramels wafer{" "}
        <i>apple pie</i> bear claw apple pie.
    </BodyText>
);
export const textWithOrderedList = () => (
    <BodyText>
        Soufflé jujubes chocolate bar topping.{" "}
        <ol>
            <li>Lollipop</li>
            <li>sesame snaps</li> <li>tootsie roll</li>
        </ol>{" "}
        liquorice sweet chupa chups. Gummi bears tart sweet roll tiramisu
        biscuit cookie cake. Cookie chocolate jelly-o topping. Halvah bear claw
        wafer cupcake tiramisu ice cream tart gummi bears. Lemon drops chocolate
        cake croissant lemon drops gummies ice cream sugar plum. Sweet sesame
        snaps cookie toffee. Tart muffin bonbon jelly halvah jelly. Macaroon
        cake caramels jujubes macaroon lemon drops. Chocolate cake pie halvah.
        Macaroon lemon drops tiramisu chocolate bar jujubes tootsie roll apple
        pie. Icing sesame snaps pastry caramels muffin donut. Cake chocolate
        tiramisu marshmallow. Jujubes powder dragée caramels wafer apple pie
        bear claw apple pie.
    </BodyText>
);
export const textWithUnorderedList = () => (
    <BodyText>
        Soufflé jujubes chocolate bar topping.{" "}
        <ul>
            <li>Lollipop</li>
            <li>sesame snaps</li> <li>tootsie roll</li>
        </ul>{" "}
        liquorice sweet chupa chups. Gummi bears tart sweet roll tiramisu
        biscuit cookie cake. Cookie chocolate jelly-o topping. Halvah bear claw
        wafer cupcake tiramisu ice cream tart gummi bears. Lemon drops chocolate
        cake croissant lemon drops gummies ice cream sugar plum. Sweet sesame
        snaps cookie toffee. Tart muffin bonbon jelly halvah jelly. Macaroon
        cake caramels jujubes macaroon lemon drops. Chocolate cake pie halvah.
        Macaroon lemon drops tiramisu chocolate bar jujubes tootsie roll apple
        pie. Icing sesame snaps pastry caramels muffin donut. Cake chocolate
        tiramisu marshmallow. Jujubes powder dragée caramels wafer apple pie
        bear claw apple pie.
    </BodyText>
);
export const textWithHeading = () => (
    <BodyText>
        <h2>Soufflé</h2>
        <h3>jujubes</h3>
        <h4>chocolate bar</h4>
        <h5>topping</h5>
        <h6>Lollipop</h6>
    </BodyText>
);
export const truncatedText = () => (
    <BodyText maxchar={2}>
        Soufflé jujubes chocolate bar topping. Lollipop sesame snaps tootsie
        roll liquorice sweet chupa chups. Gummi bears tart sweet roll tiramisu
        biscuit cookie cake. Cookie chocolate jelly-o topping. Halvah bear claw
        wafer cupcake tiramisu ice cream tart gummi bears. Lemon drops chocolate
        cake croissant lemon drops gummies ice cream sugar plum. Sweet sesame
        snaps cookie toffee. Tart muffin bonbon jelly halvah jelly. Macaroon
        cake caramels jujubes macaroon lemon drops. Chocolate cake pie halvah.
        Macaroon lemon drops tiramisu chocolate bar jujubes tootsie roll apple
        pie. Icing sesame snaps pastry caramels muffin donut. Cake chocolate
        tiramisu marshmallow. Jujubes powder dragée caramels wafer apple pie
        bear claw apple pie.
    </BodyText>
);
