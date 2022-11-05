'use babel';

import King88games from '../lib/king88games';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('King88games', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('king88games');
  });

  describe('when the king88games:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.king88games')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'king88games:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.king88games')).toExist();

        let king88gamesElement = workspaceElement.querySelector('.king88games');
        expect(king88gamesElement).toExist();

        let king88gamesPanel = atom.workspace.panelForItem(king88gamesElement);
        expect(king88gamesPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'king88games:toggle');
        expect(king88gamesPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.king88games')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'king88games:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let king88gamesElement = workspaceElement.querySelector('.king88games');
        expect(king88gamesElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'king88games:toggle');
        expect(king88gamesElement).not.toBeVisible();
      });
    });
  });
});
