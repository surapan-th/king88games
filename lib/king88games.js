'use babel';

import King88gamesView from './king88games-view';
import { CompositeDisposable } from 'atom';

export default {

  king88gamesView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.king88gamesView = new King88gamesView(state.king88gamesViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.king88gamesView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'king88games:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.king88gamesView.destroy();
  },

  serialize() {
    return {
      king88gamesViewState: this.king88gamesView.serialize()
    };
  },

  toggle() {
    console.log('King88games was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
