export class Index {
    configureRouter(config, router) {
        config.map([
            { route: ['', 'post'], moduleId: './post', name: 'post', nav: false, title: 'Pengisian Nama Chart Of Account' }
        ]);

        this.router = router;
    }
}
