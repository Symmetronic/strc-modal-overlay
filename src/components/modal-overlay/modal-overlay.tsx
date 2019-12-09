import { Component, Element, Event, EventEmitter, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'strc-modal-overlay',
  styleUrl: 'modal-overlay.scss',
  shadow: true
})
export class ModalOverlay {

  /**
   * The duration in miliseconds for animating the fading out of the overlay.
   */
  animateOutDuration: number = 300;

  /**
   * Name of the CSS animation that fades out the overlay.
   */
  fadeOutAnimationName: string = 'fadeOut';

  /**
   * The element itself.
   */
  @Element() el: HTMLElement;

  /**
   * True if the overlay is currently fading out.
   */
  @State() fadingOut: boolean = false;

  /**
   * The height to start animating from.
   */
  @Prop() height: number = 0;
  
  /**
   * The left position to start animating from
   */
  @Prop() left: number = 0;
  
  /**
   * The top position to start animating from.
   */
  @Prop() top: number = 0;

  /**
   * The width to start animating from.
   */
  @Prop() width: number = 0;

  /**
   * Emits an event, when the overlay is closed.
   */
  @Event() close: EventEmitter<void>;

  /**
   * Triggers fading out the overlay.
   */
  fadeOut(): void {
    this.fadingOut = true;

    window.setTimeout(() => {
      this.close.emit();
      this.remove();
    }, this.animateOutDuration);
  }

  /**
   * Removes the overlay.
   */
  remove(): void {
    this.el.parentElement.removeChild(this.el);
  }

  /**
   * Renders the overlay.
   */
  render() {
    return (
      <div
        class={{
          'fadeOut': this.fadingOut
        }}
        style={{
          animationDuration: this.animateOutDuration + 'ms'
        }}
      >
        <div
          class='background'
          onClick={() => { this.fadeOut(); }}
        />
        <div
          class='content'
          style={{
            height: this.height + 'px',
            left: this.left + 'px',
            top: this.top + 'px',
            width: this.width + 'px'
          }}
        >
          <div>
            <slot/>
          </div>
        </div>
      </div>
    );
  }
}
