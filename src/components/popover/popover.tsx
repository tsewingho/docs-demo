import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'component-popover',
  styleUrl: 'popover.css'
})
export class popover {
  @Element() el;

  showPopover = async (event: MouseEvent) => {
    const controller = this.el.querySelector('ion-popover-controller');
    const popover = await controller.create({
      component: 'popover-example-page',
      event: event,
      translucent: true
    });
    return popover.present();
  }

  render() {
    const description = `The <b>Popover</b> is a dialog that appears on top of the current
      page. It can be used for anything, but generally it is used for overflow actions that don't
      fit in the navigation bar.`;
    const url = 'popover';

    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Popover</ion-title>
          <ion-buttons slot="end">
            <ion-popover-controller></ion-popover-controller>
            <ion-button slot="end" onClick={this.showPopover}>
              <ion-icon slot="icon-only" name="information-circle"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen class="component-content">
        <component-details description={description} url={url}></component-details>

        <div class="ion-padding-start ion-padding-end">
          <ion-button expand="block" onClick={this.showPopover}>Open Popover</ion-button>
        </div>
      </ion-content>
    ];
  }
}
