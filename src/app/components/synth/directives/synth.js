'use strict';

class SynthDirective {
  constructor() {
    this.templateUrl = 'app/components/synth/views/synth-view.html';
    this.restrict = 'E';
  }

  static directiveFactory() {
    SynthDirective.instance = new SynthDirective();
    return SynthDirective.instance;
  }
}

export default SynthDirective.directiveFactory;
