# Docs
Project-specific documentation lives in [themetronome.co](http://themetronome.co). 

How those project needs affect our technical implementation are documented here.

What is included in this documentation lives here.

## File Structure
`.github/`: A series of Github-specific files.

  `CONTRIBUTING.md`: Contributing guidelines to the project.

  `ISSUE_TEMPLATE`: The template that is populated into the text field when a user creates a new issue.
 
   `PULL_REQUEST_TEMPLATE`: The template that is populated into the text field when a user creates a new pull request.

`.storybook`: 

`components/`: `src/` directory for the Patternlab files. Symlinked by [BLOCKED].

  `_annotations`: [BLOCKED] Unclear what these are.
  
  `_data`: Mocked, global data for Patternlab components.
  
  `_layouts`: [BLOCKED] Unclear what these are.
  
  `_macros`: [BLOCKED] Unclear what these are.
  
  `_meta`: Patternlab's "meta" files (like the Patternlab header and footer) that aren't relevant to what is actually shipped to projects.
  
  `_patterns`: The componentized files for the components we shipped based on their hierarchy in the system.
    
    `00-base`: Styles that all components must inherit.
    
    `01_atoms`: Components that have no subcomponents.
    
    `02_molecules`: 

`package.json`: system dependencies
