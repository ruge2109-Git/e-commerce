'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">back-ecommerce documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AutenticacionModule.html" data-type="entity-link">AutenticacionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AutenticacionModule-941446051fd74cf969d0be9265e7999b"' : 'data-target="#xs-controllers-links-module-AutenticacionModule-941446051fd74cf969d0be9265e7999b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AutenticacionModule-941446051fd74cf969d0be9265e7999b"' :
                                            'id="xs-controllers-links-module-AutenticacionModule-941446051fd74cf969d0be9265e7999b"' }>
                                            <li class="link">
                                                <a href="controllers/AutenticacionController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AutenticacionController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AutenticacionModule-941446051fd74cf969d0be9265e7999b"' : 'data-target="#xs-injectables-links-module-AutenticacionModule-941446051fd74cf969d0be9265e7999b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AutenticacionModule-941446051fd74cf969d0be9265e7999b"' :
                                        'id="xs-injectables-links-module-AutenticacionModule-941446051fd74cf969d0be9265e7999b"' }>
                                        <li class="link">
                                            <a href="injectables/AutenticacionService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AutenticacionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BlogModule.html" data-type="entity-link">BlogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-BlogModule-7fa3f3743371f2326fbff2a27aa3f3e9"' : 'data-target="#xs-controllers-links-module-BlogModule-7fa3f3743371f2326fbff2a27aa3f3e9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BlogModule-7fa3f3743371f2326fbff2a27aa3f3e9"' :
                                            'id="xs-controllers-links-module-BlogModule-7fa3f3743371f2326fbff2a27aa3f3e9"' }>
                                            <li class="link">
                                                <a href="controllers/BlogController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BlogController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BlogModule-7fa3f3743371f2326fbff2a27aa3f3e9"' : 'data-target="#xs-injectables-links-module-BlogModule-7fa3f3743371f2326fbff2a27aa3f3e9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BlogModule-7fa3f3743371f2326fbff2a27aa3f3e9"' :
                                        'id="xs-injectables-links-module-BlogModule-7fa3f3743371f2326fbff2a27aa3f3e9"' }>
                                        <li class="link">
                                            <a href="injectables/BlogService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>BlogService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoriasModule.html" data-type="entity-link">CategoriasModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CategoriasModule-8bdc16455bab057ddd53c6b305f2baa5"' : 'data-target="#xs-controllers-links-module-CategoriasModule-8bdc16455bab057ddd53c6b305f2baa5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoriasModule-8bdc16455bab057ddd53c6b305f2baa5"' :
                                            'id="xs-controllers-links-module-CategoriasModule-8bdc16455bab057ddd53c6b305f2baa5"' }>
                                            <li class="link">
                                                <a href="controllers/CategoriasController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CategoriasController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CategoriasModule-8bdc16455bab057ddd53c6b305f2baa5"' : 'data-target="#xs-injectables-links-module-CategoriasModule-8bdc16455bab057ddd53c6b305f2baa5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoriasModule-8bdc16455bab057ddd53c6b305f2baa5"' :
                                        'id="xs-injectables-links-module-CategoriasModule-8bdc16455bab057ddd53c6b305f2baa5"' }>
                                        <li class="link">
                                            <a href="injectables/CategoriasService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CategoriasService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CiudadModule.html" data-type="entity-link">CiudadModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CiudadModule-b7546ba3b5e1271632178c77a516fbfe"' : 'data-target="#xs-controllers-links-module-CiudadModule-b7546ba3b5e1271632178c77a516fbfe"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CiudadModule-b7546ba3b5e1271632178c77a516fbfe"' :
                                            'id="xs-controllers-links-module-CiudadModule-b7546ba3b5e1271632178c77a516fbfe"' }>
                                            <li class="link">
                                                <a href="controllers/CiudadController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CiudadController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CiudadModule-b7546ba3b5e1271632178c77a516fbfe"' : 'data-target="#xs-injectables-links-module-CiudadModule-b7546ba3b5e1271632178c77a516fbfe"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CiudadModule-b7546ba3b5e1271632178c77a516fbfe"' :
                                        'id="xs-injectables-links-module-CiudadModule-b7546ba3b5e1271632178c77a516fbfe"' }>
                                        <li class="link">
                                            <a href="injectables/CiudadService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CiudadService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClienteModule.html" data-type="entity-link">ClienteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ClienteModule-4470e775ba151e436e2ae556046d6489"' : 'data-target="#xs-controllers-links-module-ClienteModule-4470e775ba151e436e2ae556046d6489"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ClienteModule-4470e775ba151e436e2ae556046d6489"' :
                                            'id="xs-controllers-links-module-ClienteModule-4470e775ba151e436e2ae556046d6489"' }>
                                            <li class="link">
                                                <a href="controllers/ClienteController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClienteController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ClienteModule-4470e775ba151e436e2ae556046d6489"' : 'data-target="#xs-injectables-links-module-ClienteModule-4470e775ba151e436e2ae556046d6489"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ClienteModule-4470e775ba151e436e2ae556046d6489"' :
                                        'id="xs-injectables-links-module-ClienteModule-4470e775ba151e436e2ae556046d6489"' }>
                                        <li class="link">
                                            <a href="injectables/ClienteService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ClienteService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactoModule.html" data-type="entity-link">ContactoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ContactoModule-f3e7e7fcf6d3c2157b010366f046d242"' : 'data-target="#xs-controllers-links-module-ContactoModule-f3e7e7fcf6d3c2157b010366f046d242"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ContactoModule-f3e7e7fcf6d3c2157b010366f046d242"' :
                                            'id="xs-controllers-links-module-ContactoModule-f3e7e7fcf6d3c2157b010366f046d242"' }>
                                            <li class="link">
                                                <a href="controllers/ContactoController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactoController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ContactoModule-f3e7e7fcf6d3c2157b010366f046d242"' : 'data-target="#xs-injectables-links-module-ContactoModule-f3e7e7fcf6d3c2157b010366f046d242"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ContactoModule-f3e7e7fcf6d3c2157b010366f046d242"' :
                                        'id="xs-injectables-links-module-ContactoModule-f3e7e7fcf6d3c2157b010366f046d242"' }>
                                        <li class="link">
                                            <a href="injectables/ContactoService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ContactoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DepartamentoModule.html" data-type="entity-link">DepartamentoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-DepartamentoModule-e12430b591d2bd82259c710f44b68bd4"' : 'data-target="#xs-controllers-links-module-DepartamentoModule-e12430b591d2bd82259c710f44b68bd4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DepartamentoModule-e12430b591d2bd82259c710f44b68bd4"' :
                                            'id="xs-controllers-links-module-DepartamentoModule-e12430b591d2bd82259c710f44b68bd4"' }>
                                            <li class="link">
                                                <a href="controllers/DepartamentoController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DepartamentoController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DepartamentoModule-e12430b591d2bd82259c710f44b68bd4"' : 'data-target="#xs-injectables-links-module-DepartamentoModule-e12430b591d2bd82259c710f44b68bd4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DepartamentoModule-e12430b591d2bd82259c710f44b68bd4"' :
                                        'id="xs-injectables-links-module-DepartamentoModule-e12430b591d2bd82259c710f44b68bd4"' }>
                                        <li class="link">
                                            <a href="injectables/DepartamentoService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DepartamentoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DetalleCompraModule.html" data-type="entity-link">DetalleCompraModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-DetalleCompraModule-40c78b4ce6830e30db7c9f018124e309"' : 'data-target="#xs-controllers-links-module-DetalleCompraModule-40c78b4ce6830e30db7c9f018124e309"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DetalleCompraModule-40c78b4ce6830e30db7c9f018124e309"' :
                                            'id="xs-controllers-links-module-DetalleCompraModule-40c78b4ce6830e30db7c9f018124e309"' }>
                                            <li class="link">
                                                <a href="controllers/DetalleCompraController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetalleCompraController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DetalleCompraModule-40c78b4ce6830e30db7c9f018124e309"' : 'data-target="#xs-injectables-links-module-DetalleCompraModule-40c78b4ce6830e30db7c9f018124e309"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DetalleCompraModule-40c78b4ce6830e30db7c9f018124e309"' :
                                        'id="xs-injectables-links-module-DetalleCompraModule-40c78b4ce6830e30db7c9f018124e309"' }>
                                        <li class="link">
                                            <a href="injectables/DetalleCompraService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DetalleCompraService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DetalleFacturaModule.html" data-type="entity-link">DetalleFacturaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-DetalleFacturaModule-2739a3d9d195fc37acd58cd9f9e66aeb"' : 'data-target="#xs-controllers-links-module-DetalleFacturaModule-2739a3d9d195fc37acd58cd9f9e66aeb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DetalleFacturaModule-2739a3d9d195fc37acd58cd9f9e66aeb"' :
                                            'id="xs-controllers-links-module-DetalleFacturaModule-2739a3d9d195fc37acd58cd9f9e66aeb"' }>
                                            <li class="link">
                                                <a href="controllers/DetalleFacturaController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetalleFacturaController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DetalleFacturaModule-2739a3d9d195fc37acd58cd9f9e66aeb"' : 'data-target="#xs-injectables-links-module-DetalleFacturaModule-2739a3d9d195fc37acd58cd9f9e66aeb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DetalleFacturaModule-2739a3d9d195fc37acd58cd9f9e66aeb"' :
                                        'id="xs-injectables-links-module-DetalleFacturaModule-2739a3d9d195fc37acd58cd9f9e66aeb"' }>
                                        <li class="link">
                                            <a href="injectables/DetalleFacturaService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DetalleFacturaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FacturaModule.html" data-type="entity-link">FacturaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-FacturaModule-69f06a327446bc55b5d0589bf30bebcc"' : 'data-target="#xs-controllers-links-module-FacturaModule-69f06a327446bc55b5d0589bf30bebcc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FacturaModule-69f06a327446bc55b5d0589bf30bebcc"' :
                                            'id="xs-controllers-links-module-FacturaModule-69f06a327446bc55b5d0589bf30bebcc"' }>
                                            <li class="link">
                                                <a href="controllers/FacturaController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FacturaController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-FacturaModule-69f06a327446bc55b5d0589bf30bebcc"' : 'data-target="#xs-injectables-links-module-FacturaModule-69f06a327446bc55b5d0589bf30bebcc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FacturaModule-69f06a327446bc55b5d0589bf30bebcc"' :
                                        'id="xs-injectables-links-module-FacturaModule-69f06a327446bc55b5d0589bf30bebcc"' }>
                                        <li class="link">
                                            <a href="injectables/FacturaService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>FacturaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ParametroModule.html" data-type="entity-link">ParametroModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ParametroModule-4819373fbd444c866370f4bd8511c4e4"' : 'data-target="#xs-controllers-links-module-ParametroModule-4819373fbd444c866370f4bd8511c4e4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ParametroModule-4819373fbd444c866370f4bd8511c4e4"' :
                                            'id="xs-controllers-links-module-ParametroModule-4819373fbd444c866370f4bd8511c4e4"' }>
                                            <li class="link">
                                                <a href="controllers/ParametroController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ParametroController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ParametroModule-4819373fbd444c866370f4bd8511c4e4"' : 'data-target="#xs-injectables-links-module-ParametroModule-4819373fbd444c866370f4bd8511c4e4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ParametroModule-4819373fbd444c866370f4bd8511c4e4"' :
                                        'id="xs-injectables-links-module-ParametroModule-4819373fbd444c866370f4bd8511c4e4"' }>
                                        <li class="link">
                                            <a href="injectables/ParametroService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ParametroService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductoModule.html" data-type="entity-link">ProductoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductoModule-93e81db201b4fccd4d8d954e6c3fa325"' : 'data-target="#xs-controllers-links-module-ProductoModule-93e81db201b4fccd4d8d954e6c3fa325"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductoModule-93e81db201b4fccd4d8d954e6c3fa325"' :
                                            'id="xs-controllers-links-module-ProductoModule-93e81db201b4fccd4d8d954e6c3fa325"' }>
                                            <li class="link">
                                                <a href="controllers/ProductoController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductoController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductoModule-93e81db201b4fccd4d8d954e6c3fa325"' : 'data-target="#xs-injectables-links-module-ProductoModule-93e81db201b4fccd4d8d954e6c3fa325"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductoModule-93e81db201b4fccd4d8d954e6c3fa325"' :
                                        'id="xs-injectables-links-module-ProductoModule-93e81db201b4fccd4d8d954e6c3fa325"' }>
                                        <li class="link">
                                            <a href="injectables/ProductoService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ProductoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestimonioModule.html" data-type="entity-link">TestimonioModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TestimonioModule-28e51bfac9457dd48217dc7af9cf8f28"' : 'data-target="#xs-controllers-links-module-TestimonioModule-28e51bfac9457dd48217dc7af9cf8f28"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TestimonioModule-28e51bfac9457dd48217dc7af9cf8f28"' :
                                            'id="xs-controllers-links-module-TestimonioModule-28e51bfac9457dd48217dc7af9cf8f28"' }>
                                            <li class="link">
                                                <a href="controllers/TestimonioController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestimonioController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TestimonioModule-28e51bfac9457dd48217dc7af9cf8f28"' : 'data-target="#xs-injectables-links-module-TestimonioModule-28e51bfac9457dd48217dc7af9cf8f28"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TestimonioModule-28e51bfac9457dd48217dc7af9cf8f28"' :
                                        'id="xs-injectables-links-module-TestimonioModule-28e51bfac9457dd48217dc7af9cf8f28"' }>
                                        <li class="link">
                                            <a href="injectables/TestimonioService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TestimonioService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AutenticacionController.html" data-type="entity-link">AutenticacionController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BlogController.html" data-type="entity-link">BlogController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CategoriasController.html" data-type="entity-link">CategoriasController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CiudadController.html" data-type="entity-link">CiudadController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ClienteController.html" data-type="entity-link">ClienteController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ContactoController.html" data-type="entity-link">ContactoController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DepartamentoController.html" data-type="entity-link">DepartamentoController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DetalleCompraController.html" data-type="entity-link">DetalleCompraController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DetalleFacturaController.html" data-type="entity-link">DetalleFacturaController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FacturaController.html" data-type="entity-link">FacturaController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ParametroController.html" data-type="entity-link">ParametroController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductoController.html" data-type="entity-link">ProductoController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TestimonioController.html" data-type="entity-link">TestimonioController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Autenticacion.html" data-type="entity-link">Autenticacion</a>
                            </li>
                            <li class="link">
                                <a href="classes/Blog.html" data-type="entity-link">Blog</a>
                            </li>
                            <li class="link">
                                <a href="classes/Categoria.html" data-type="entity-link">Categoria</a>
                            </li>
                            <li class="link">
                                <a href="classes/Ciudad.html" data-type="entity-link">Ciudad</a>
                            </li>
                            <li class="link">
                                <a href="classes/Cliente.html" data-type="entity-link">Cliente</a>
                            </li>
                            <li class="link">
                                <a href="classes/Contacto.html" data-type="entity-link">Contacto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAutenticacionDto.html" data-type="entity-link">CreateAutenticacionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBlogDto.html" data-type="entity-link">CreateBlogDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCategoriaDto.html" data-type="entity-link">CreateCategoriaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCiudadDto.html" data-type="entity-link">CreateCiudadDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateClienteDto.html" data-type="entity-link">CreateClienteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateContactoDto.html" data-type="entity-link">CreateContactoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDepartamentoDto.html" data-type="entity-link">CreateDepartamentoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDetalleCompraDto.html" data-type="entity-link">CreateDetalleCompraDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDetalleFacturaDto.html" data-type="entity-link">CreateDetalleFacturaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFacturaDto.html" data-type="entity-link">CreateFacturaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateParametroDto.html" data-type="entity-link">CreateParametroDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductoDto.html" data-type="entity-link">CreateProductoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTestimonioDto.html" data-type="entity-link">CreateTestimonioDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Departamento.html" data-type="entity-link">Departamento</a>
                            </li>
                            <li class="link">
                                <a href="classes/DetalleCompra.html" data-type="entity-link">DetalleCompra</a>
                            </li>
                            <li class="link">
                                <a href="classes/DetalleFactura.html" data-type="entity-link">DetalleFactura</a>
                            </li>
                            <li class="link">
                                <a href="classes/Factura.html" data-type="entity-link">Factura</a>
                            </li>
                            <li class="link">
                                <a href="classes/Parametros.html" data-type="entity-link">Parametros</a>
                            </li>
                            <li class="link">
                                <a href="classes/Producto.html" data-type="entity-link">Producto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Testimonio.html" data-type="entity-link">Testimonio</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAutenticacionDto.html" data-type="entity-link">UpdateAutenticacionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateBlogDto.html" data-type="entity-link">UpdateBlogDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCategoriaDto.html" data-type="entity-link">UpdateCategoriaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCiudadDto.html" data-type="entity-link">UpdateCiudadDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateClienteDto.html" data-type="entity-link">UpdateClienteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateContactoDto.html" data-type="entity-link">UpdateContactoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDepartamentoDto.html" data-type="entity-link">UpdateDepartamentoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDetalleCompraDto.html" data-type="entity-link">UpdateDetalleCompraDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDetalleFacturaDto.html" data-type="entity-link">UpdateDetalleFacturaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFacturaDto.html" data-type="entity-link">UpdateFacturaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateParametroDto.html" data-type="entity-link">UpdateParametroDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProductoDto.html" data-type="entity-link">UpdateProductoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTestimonioDto.html" data-type="entity-link">UpdateTestimonioDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AutenticacionService.html" data-type="entity-link">AutenticacionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BlogService.html" data-type="entity-link">BlogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoriasService.html" data-type="entity-link">CategoriasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CiudadService.html" data-type="entity-link">CiudadService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClienteService.html" data-type="entity-link">ClienteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContactoService.html" data-type="entity-link">ContactoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DepartamentoService.html" data-type="entity-link">DepartamentoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DetalleCompraService.html" data-type="entity-link">DetalleCompraService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DetalleFacturaService.html" data-type="entity-link">DetalleFacturaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FacturaService.html" data-type="entity-link">FacturaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ParametroService.html" data-type="entity-link">ParametroService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductoService.html" data-type="entity-link">ProductoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TestimonioService.html" data-type="entity-link">TestimonioService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});