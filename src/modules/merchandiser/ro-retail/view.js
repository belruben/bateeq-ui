import { inject, Lazy } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { Service } from './service';

@inject(Router, Service)
export class View {
    readOnly = true;

    constructor(router, service) {
        this.router = router;
        this.service = service;
    }

    async activate(params) {
        var id = params.id;
        this.data = await this.service.getById(id);
    }

    list() {
        this.router.navigateToRoute('list');
    }

    cancelCallback(event) {
        this.list();
    }

    editCallback(event) {
        this.router.navigateToRoute('edit', { id: this.data.Id });
    }

    deleteCallback(event) {
        this.service.delete(this.data)
            .then(result => {
                this.list();
            });
    }

    printPdf() {
        this.service.getPdfById(this.data.Id);
    }

    printspecol() {
        this.service.getSpecolById(this.data.Id);
    }
      
    printvvip() {
        this.service.getVvipById(this.data.Id);
    }

}
