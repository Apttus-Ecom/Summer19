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
                    <a href="index.html" data-type="index-link">Apttus Ecommerce Summer &#x27;19</a>
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
                    <li class="chapter additional">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#additional-pages"'
                            : 'data-target="#xs-additional-pages"' }>
                            <span class="icon ion-ios-book"></span>
                            <span>Additional documentation</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                                    <li class="link ">
                                        <a href="additional-documentation/apttus-copyright-disclaimer.html" data-type="entity-link" data-context-id="additional">Apttus Copyright Disclaimer</a>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/spring-migration.html" data-type="entity-link" data-context-id="additional">Spring Migration</a>
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
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-487e599fd0c0457fb214e62d05802430"' : 'data-target="#xs-components-links-module-AppModule-487e599fd0c0457fb214e62d05802430"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-487e599fd0c0457fb214e62d05802430"' :
                                            'id="xs-components-links-module-AppModule-487e599fd0c0457fb214e62d05802430"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CartModule.html" data-type="entity-link">CartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CartModule-cdc5d7d9c21b4cd85c106a918ca05f72"' : 'data-target="#xs-components-links-module-CartModule-cdc5d7d9c21b4cd85c106a918ca05f72"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CartModule-cdc5d7d9c21b4cd85c106a918ca05f72"' :
                                            'id="xs-components-links-module-CartModule-cdc5d7d9c21b4cd85c106a918ca05f72"' }>
                                            <li class="link">
                                                <a href="components/CardFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SummaryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SummaryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChangePasswordModule.html" data-type="entity-link">ChangePasswordModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ChangePasswordModule-6caa82dfa75f16d37d1880846bfe7ec5"' : 'data-target="#xs-components-links-module-ChangePasswordModule-6caa82dfa75f16d37d1880846bfe7ec5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChangePasswordModule-6caa82dfa75f16d37d1880846bfe7ec5"' :
                                            'id="xs-components-links-module-ChangePasswordModule-6caa82dfa75f16d37d1880846bfe7ec5"' }>
                                            <li class="link">
                                                <a href="components/ChangePasswordLayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChangePasswordLayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CompareModule.html" data-type="entity-link">CompareModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CompareModule-d1ddef74cb3290103a68c51a0f5b4891"' : 'data-target="#xs-components-links-module-CompareModule-d1ddef74cb3290103a68c51a0f5b4891"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CompareModule-d1ddef74cb3290103a68c51a0f5b4891"' :
                                            'id="xs-components-links-module-CompareModule-d1ddef74cb3290103a68c51a0f5b4891"' }>
                                            <li class="link">
                                                <a href="components/CompareLayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CompareLayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentModule.html" data-type="entity-link">ComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComponentModule-a9eca92a1691072ed0b059c5a0069baa"' : 'data-target="#xs-components-links-module-ComponentModule-a9eca92a1691072ed0b059c5a0069baa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentModule-a9eca92a1691072ed0b059c5a0069baa"' :
                                            'id="xs-components-links-module-ComponentModule-a9eca92a1691072ed0b059c5a0069baa"' }>
                                            <li class="link">
                                                <a href="components/AttachmentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AttachmentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavAccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavAccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-ComponentModule-a9eca92a1691072ed0b059c5a0069baa"' : 'data-target="#xs-directives-links-module-ComponentModule-a9eca92a1691072ed0b059c5a0069baa"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-ComponentModule-a9eca92a1691072ed0b059c5a0069baa"' :
                                        'id="xs-directives-links-module-ComponentModule-a9eca92a1691072ed0b059c5a0069baa"' }>
                                        <li class="link">
                                            <a href="directives/AutoFocusDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AutoFocusDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-7ae1f278e0220097b44ac4afc96c9dfc"' : 'data-target="#xs-components-links-module-HomeModule-7ae1f278e0220097b44ac4afc96c9dfc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-7ae1f278e0220097b44ac4afc96c9dfc"' :
                                            'id="xs-components-links-module-HomeModule-7ae1f278e0220097b44ac4afc96c9dfc"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InstalledProductsModule.html" data-type="entity-link">InstalledProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InstalledProductsModule-b6043f94d7b3d925f22e7449e4705dec"' : 'data-target="#xs-components-links-module-InstalledProductsModule-b6043f94d7b3d925f22e7449e4705dec"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InstalledProductsModule-b6043f94d7b3d925f22e7449e4705dec"' :
                                            'id="xs-components-links-module-InstalledProductsModule-b6043f94d7b3d925f22e7449e4705dec"' }>
                                            <li class="link">
                                                <a href="components/InstalledProductsLayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InstalledProductsLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PriceTypeFilterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PriceTypeFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RenewalFilterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RenewalFilterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-86a78a26f34681047d7b889b17083576"' : 'data-target="#xs-components-links-module-LoginModule-86a78a26f34681047d7b889b17083576"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-86a78a26f34681047d7b889b17083576"' :
                                            'id="xs-components-links-module-LoginModule-86a78a26f34681047d7b889b17083576"' }>
                                            <li class="link">
                                                <a href="components/LoginLayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginLayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ManageCartModule.html" data-type="entity-link">ManageCartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ManageCartModule-966933c9ab24d83b37a74ccac2b9825f"' : 'data-target="#xs-components-links-module-ManageCartModule-966933c9ab24d83b37a74ccac2b9825f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ManageCartModule-966933c9ab24d83b37a74ccac2b9825f"' :
                                            'id="xs-components-links-module-ManageCartModule-966933c9ab24d83b37a74ccac2b9825f"' }>
                                            <li class="link">
                                                <a href="components/CartSummaryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CartSummaryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CartTableComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CartTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageCartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ManageCartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MyAccountModule.html" data-type="entity-link">MyAccountModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MyAccountModule-93b1755c5c0ff9116e10b2b49b7c98f3"' : 'data-target="#xs-components-links-module-MyAccountModule-93b1755c5c0ff9116e10b2b49b7c98f3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MyAccountModule-93b1755c5c0ff9116e10b2b49b7c98f3"' :
                                            'id="xs-components-links-module-MyAccountModule-93b1755c5c0ff9116e10b2b49b7c98f3"' }>
                                            <li class="link">
                                                <a href="components/AddressBookComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddressBookComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CartListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CartListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyAccountLayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MyAccountLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrderDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrderListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SettingsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SettingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WishlistsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WishlistsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderHistoryModule.html" data-type="entity-link">OrderHistoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrderHistoryModule-282bcbf469b7d9d698ed09cfa6861796"' : 'data-target="#xs-components-links-module-OrderHistoryModule-282bcbf469b7d9d698ed09cfa6861796"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrderHistoryModule-282bcbf469b7d9d698ed09cfa6861796"' :
                                            'id="xs-components-links-module-OrderHistoryModule-282bcbf469b7d9d698ed09cfa6861796"' }>
                                            <li class="link">
                                                <a href="components/OrderHistoryLayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrderHistoryLayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderModule.html" data-type="entity-link">OrderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrderModule-f5f03b92448eb6ecf6d055e8358ddef2"' : 'data-target="#xs-components-links-module-OrderModule-f5f03b92448eb6ecf6d055e8358ddef2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrderModule-f5f03b92448eb6ecf6d055e8358ddef2"' :
                                            'id="xs-components-links-module-OrderModule-f5f03b92448eb6ecf6d055e8358ddef2"' }>
                                            <li class="link">
                                                <a href="components/OrderDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrderDetailsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaymentMessageModule.html" data-type="entity-link">PaymentMessageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PaymentMessageModule-89948d0eb9cb4194d10e8f5f5a2855f5"' : 'data-target="#xs-components-links-module-PaymentMessageModule-89948d0eb9cb4194d10e8f5f5a2855f5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PaymentMessageModule-89948d0eb9cb4194d10e8f5f5a2855f5"' :
                                            'id="xs-components-links-module-PaymentMessageModule-89948d0eb9cb4194d10e8f5f5a2855f5"' }>
                                            <li class="link">
                                                <a href="components/PaymentMesageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaymentMesageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PricingModule.html" data-type="entity-link">PricingModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PricingModule-92dbea849db4ebb9b59c30eeb1b5c475"' : 'data-target="#xs-injectables-links-module-PricingModule-92dbea849db4ebb9b59c30eeb1b5c475"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PricingModule-92dbea849db4ebb9b59c30eeb1b5c475"' :
                                        'id="xs-injectables-links-module-PricingModule-92dbea849db4ebb9b59c30eeb1b5c475"' }>
                                        <li class="link">
                                            <a href="injectables/PriceService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PriceService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-PricingModule-92dbea849db4ebb9b59c30eeb1b5c475"' : 'data-target="#xs-pipes-links-module-PricingModule-92dbea849db4ebb9b59c30eeb1b5c475"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PricingModule-92dbea849db4ebb9b59c30eeb1b5c475"' :
                                            'id="xs-pipes-links-module-PricingModule-92dbea849db4ebb9b59c30eeb1b5c475"' }>
                                            <li class="link">
                                                <a href="pipes/AttributeValuePricePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AttributeValuePricePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/CartItemPricePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CartItemPricePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/CartPricePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CartPricePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/LineItemPricePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LineItemPricePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/LocalCurrencyPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LocalCurrencyPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/OptionPricePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OptionPricePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/OrderLineItemPricePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrderLineItemPricePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/OrderPricePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrderPricePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/PriceMatrixFilter.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PriceMatrixFilter</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ProductPricePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductPricePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/QuotePricePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">QuotePricePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductDetailsModule.html" data-type="entity-link">ProductDetailsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductDetailsModule-29a8c0a1becb5bc5194ea4360406f6fe"' : 'data-target="#xs-components-links-module-ProductDetailsModule-29a8c0a1becb5bc5194ea4360406f6fe"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductDetailsModule-29a8c0a1becb5bc5194ea4360406f6fe"' :
                                            'id="xs-components-links-module-ProductDetailsModule-29a8c0a1becb5bc5194ea4360406f6fe"' }>
                                            <li class="link">
                                                <a href="components/ProductDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TabAttachmentsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TabAttachmentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TabFeaturesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TabFeaturesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductListModule.html" data-type="entity-link">ProductListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductListModule-7d0530b51cbe8215f6213075ceae5f7d"' : 'data-target="#xs-components-links-module-ProductListModule-7d0530b51cbe8215f6213075ceae5f7d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductListModule-7d0530b51cbe8215f6213075ceae5f7d"' :
                                            'id="xs-components-links-module-ProductListModule-7d0530b51cbe8215f6213075ceae5f7d"' }>
                                            <li class="link">
                                                <a href="components/ProductListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResultsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResultsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/QuoteModule.html" data-type="entity-link">QuoteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-QuoteModule-f66ed494472c96950b5bc8c3bdada76a"' : 'data-target="#xs-components-links-module-QuoteModule-f66ed494472c96950b5bc8c3bdada76a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-QuoteModule-f66ed494472c96950b5bc8c3bdada76a"' :
                                            'id="xs-components-links-module-QuoteModule-f66ed494472c96950b5bc8c3bdada76a"' }>
                                            <li class="link">
                                                <a href="components/CreateQuoteComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreateQuoteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuoteDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">QuoteDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequestQuoteFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RequestQuoteFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AddressComponent.html" data-type="entity-link">AddressComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AddToCartComponent.html" data-type="entity-link">AddToCartComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AssetDropdownButtonComponent.html" data-type="entity-link">AssetDropdownButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AssetListComponent.html" data-type="entity-link">AssetListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BatchActionComponent.html" data-type="entity-link">BatchActionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BreadcrumbComponent.html" data-type="entity-link">BreadcrumbComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BuyMoreModalComponent.html" data-type="entity-link">BuyMoreModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CategoryFilterComponent.html" data-type="entity-link">CategoryFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChangeConfigurationModalComponent.html" data-type="entity-link">ChangeConfigurationModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChartComponent.html" data-type="entity-link">ChartComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CommentsComponent.html" data-type="entity-link">CommentsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CompareProductCardComponent.html" data-type="entity-link">CompareProductCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CRConstraintAlertComponent.html" data-type="entity-link">CRConstraintAlertComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CRIconComponent.html" data-type="entity-link">CRIconComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CRModalComponent.html" data-type="entity-link">CRModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CRPopoverComponent.html" data-type="entity-link">CRPopoverComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CRRecommendedProductsComponent.html" data-type="entity-link">CRRecommendedProductsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CRSideMenuComponent.html" data-type="entity-link">CRSideMenuComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DependentPicklistComponent.html" data-type="entity-link">DependentPicklistComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DetailSectionComponent.html" data-type="entity-link">DetailSectionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DetailsLayoutComponent.html" data-type="entity-link">DetailsLayoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InputDateComponent.html" data-type="entity-link">InputDateComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InputFieldComponent.html" data-type="entity-link">InputFieldComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InputQuantityComponent.html" data-type="entity-link">InputQuantityComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InputSelectComponent.html" data-type="entity-link">InputSelectComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InstalledProductsComponent.html" data-type="entity-link">InstalledProductsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/JumbotronComponent.html" data-type="entity-link">JumbotronComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LineItemTableRowComponent.html" data-type="entity-link">LineItemTableRowComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MdDotsComponent.html" data-type="entity-link">MdDotsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MdSpinnerComponent.html" data-type="entity-link">MdSpinnerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MiniCartComponent.html" data-type="entity-link">MiniCartComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MiniProfileComponent.html" data-type="entity-link">MiniProfileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OutputFieldComponent.html" data-type="entity-link">OutputFieldComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PaymentComponent.html" data-type="entity-link">PaymentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PaymentIFrameComponent.html" data-type="entity-link">PaymentIFrameComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PaymentMethodComponent.html" data-type="entity-link">PaymentMethodComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PriceComponent.html" data-type="entity-link">PriceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PriceSummaryComponent.html" data-type="entity-link">PriceSummaryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductAttributeComponent.html" data-type="entity-link">ProductAttributeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductCardComponent.html" data-type="entity-link">ProductCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductCarouselComponent.html" data-type="entity-link">ProductCarouselComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductCompareComponent.html" data-type="entity-link">ProductCompareComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductConfigurationComponent.html" data-type="entity-link">ProductConfigurationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductConfigurationSummaryComponent.html" data-type="entity-link">ProductConfigurationSummaryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductDrawerComponent.html" data-type="entity-link">ProductDrawerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductImagesComponent.html" data-type="entity-link">ProductImagesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductTypeFilterComponent.html" data-type="entity-link">ProductTypeFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PromotionComponent.html" data-type="entity-link">PromotionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PromotionModalComponent.html" data-type="entity-link">PromotionModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RenewModalComponent.html" data-type="entity-link">RenewModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SelectedProductCardComponent.html" data-type="entity-link">SelectedProductCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TaxPopHoverComponent.html" data-type="entity-link">TaxPopHoverComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TerminateModalComponent.html" data-type="entity-link">TerminateModalComponent</a>
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
                                <a href="classes/Account.html" data-type="entity-link">Account</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountBase.html" data-type="entity-link">AccountBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountLocation.html" data-type="entity-link">AccountLocation</a>
                            </li>
                            <li class="link">
                                <a href="classes/AdjustmentItem.html" data-type="entity-link">AdjustmentItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppliedRuleActionInfo.html" data-type="entity-link">AppliedRuleActionInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppliedRuleInfo.html" data-type="entity-link">AppliedRuleInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/ApprovalRequest.html" data-type="entity-link">ApprovalRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/AptValueMatrixNode.html" data-type="entity-link">AptValueMatrixNode</a>
                            </li>
                            <li class="link">
                                <a href="classes/AssetAttributeValue.html" data-type="entity-link">AssetAttributeValue</a>
                            </li>
                            <li class="link">
                                <a href="classes/AssetLineItem.html" data-type="entity-link">AssetLineItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/AssetLineItemExtended.html" data-type="entity-link">AssetLineItemExtended</a>
                            </li>
                            <li class="link">
                                <a href="classes/Attachment.html" data-type="entity-link">Attachment</a>
                            </li>
                            <li class="link">
                                <a href="classes/AttributeGroupTranslation.html" data-type="entity-link">AttributeGroupTranslation</a>
                            </li>
                            <li class="link">
                                <a href="classes/AttributeValueMatrix.html" data-type="entity-link">AttributeValueMatrix</a>
                            </li>
                            <li class="link">
                                <a href="classes/AttributeValueMatrixEntry.html" data-type="entity-link">AttributeValueMatrixEntry</a>
                            </li>
                            <li class="link">
                                <a href="classes/BatchAction.html" data-type="entity-link">BatchAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/BitString.html" data-type="entity-link">BitString</a>
                            </li>
                            <li class="link">
                                <a href="classes/BrowserWindowRef.html" data-type="entity-link">BrowserWindowRef</a>
                            </li>
                            <li class="link">
                                <a href="classes/BundleProduct.html" data-type="entity-link">BundleProduct</a>
                            </li>
                            <li class="link">
                                <a href="classes/Cart.html" data-type="entity-link">Cart</a>
                            </li>
                            <li class="link">
                                <a href="classes/CartItem.html" data-type="entity-link">CartItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/Category.html" data-type="entity-link">Category</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryData.html" data-type="entity-link">CategoryData</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryTranslation.html" data-type="entity-link">CategoryTranslation</a>
                            </li>
                            <li class="link">
                                <a href="classes/Classification.html" data-type="entity-link">Classification</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConstraintRule.html" data-type="entity-link">ConstraintRule</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConstraintRuleAction.html" data-type="entity-link">ConstraintRuleAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConstraintRuleCondition.html" data-type="entity-link">ConstraintRuleCondition</a>
                            </li>
                            <li class="link">
                                <a href="classes/Contact.html" data-type="entity-link">Contact</a>
                            </li>
                            <li class="link">
                                <a href="classes/CurrencyType.html" data-type="entity-link">CurrencyType</a>
                            </li>
                            <li class="link">
                                <a href="classes/DataManager.html" data-type="entity-link">DataManager</a>
                            </li>
                            <li class="link">
                                <a href="classes/Feature.html" data-type="entity-link">Feature</a>
                            </li>
                            <li class="link">
                                <a href="classes/FeatureSet.html" data-type="entity-link">FeatureSet</a>
                            </li>
                            <li class="link">
                                <a href="classes/GatewayCommunication.html" data-type="entity-link">GatewayCommunication</a>
                            </li>
                            <li class="link">
                                <a href="classes/GatewayTransaction.html" data-type="entity-link">GatewayTransaction</a>
                            </li>
                            <li class="link">
                                <a href="classes/Incentive.html" data-type="entity-link">Incentive</a>
                            </li>
                            <li class="link">
                                <a href="classes/Note.html" data-type="entity-link">Note</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link">Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderAdjustmentItem.html" data-type="entity-link">OrderAdjustmentItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderAttributeValue.html" data-type="entity-link">OrderAttributeValue</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderLineItem.html" data-type="entity-link">OrderLineItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderTaxBreakup.html" data-type="entity-link">OrderTaxBreakup</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderTaxBreakupService.html" data-type="entity-link">OrderTaxBreakupService</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaymentMethod.html" data-type="entity-link">PaymentMethod</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaymentTransaction.html" data-type="entity-link">PaymentTransaction</a>
                            </li>
                            <li class="link">
                                <a href="classes/Price.html" data-type="entity-link">Price</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceDimension.html" data-type="entity-link">PriceDimension</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceDimensionBase.html" data-type="entity-link">PriceDimensionBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceList.html" data-type="entity-link">PriceList</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceListBase.html" data-type="entity-link">PriceListBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceListCategory.html" data-type="entity-link">PriceListCategory</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceListData.html" data-type="entity-link">PriceListData</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceListItem.html" data-type="entity-link">PriceListItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceMatrix.html" data-type="entity-link">PriceMatrix</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceMatrixEntry.html" data-type="entity-link">PriceMatrixEntry</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceRule.html" data-type="entity-link">PriceRule</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceRuleEntry.html" data-type="entity-link">PriceRuleEntry</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceRuleSet.html" data-type="entity-link">PriceRuleSet</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link">Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttribute.html" data-type="entity-link">ProductAttribute</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeGroup.html" data-type="entity-link">ProductAttributeGroup</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeGroupMember.html" data-type="entity-link">ProductAttributeGroupMember</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeMatrixView.html" data-type="entity-link">ProductAttributeMatrixView</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeRule.html" data-type="entity-link">ProductAttributeRule</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeRule-1.html" data-type="entity-link">ProductAttributeRule</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeRuleAction.html" data-type="entity-link">ProductAttributeRuleAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeRuleAction-1.html" data-type="entity-link">ProductAttributeRuleAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeRuleView.html" data-type="entity-link">ProductAttributeRuleView</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeRuleView-1.html" data-type="entity-link">ProductAttributeRuleView</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeServiceAIC.html" data-type="entity-link">ProductAttributeServiceAIC</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeValue.html" data-type="entity-link">ProductAttributeValue</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductCategory.html" data-type="entity-link">ProductCategory</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductData.html" data-type="entity-link">ProductData</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductFeatureValue.html" data-type="entity-link">ProductFeatureValue</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductGroup.html" data-type="entity-link">ProductGroup</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductGroupMember.html" data-type="entity-link">ProductGroupMember</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductInformation.html" data-type="entity-link">ProductInformation</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductOptionComponent.html" data-type="entity-link">ProductOptionComponent</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductOptionGroup.html" data-type="entity-link">ProductOptionGroup</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductOptionPrice.html" data-type="entity-link">ProductOptionPrice</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductTranslation.html" data-type="entity-link">ProductTranslation</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProposalTaxBreakup.html" data-type="entity-link">ProposalTaxBreakup</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProposalTaxBreakupService.html" data-type="entity-link">ProposalTaxBreakupService</a>
                            </li>
                            <li class="link">
                                <a href="classes/Quote.html" data-type="entity-link">Quote</a>
                            </li>
                            <li class="link">
                                <a href="classes/QuoteActions.html" data-type="entity-link">QuoteActions</a>
                            </li>
                            <li class="link">
                                <a href="classes/QuoteAdjustmentItem.html" data-type="entity-link">QuoteAdjustmentItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/QuoteAttachment.html" data-type="entity-link">QuoteAttachment</a>
                            </li>
                            <li class="link">
                                <a href="classes/QuoteAttributeValue.html" data-type="entity-link">QuoteAttributeValue</a>
                            </li>
                            <li class="link">
                                <a href="classes/QuoteLineItem.html" data-type="entity-link">QuoteLineItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/StoreBanner.html" data-type="entity-link">StoreBanner</a>
                            </li>
                            <li class="link">
                                <a href="classes/Storefront.html" data-type="entity-link">Storefront</a>
                            </li>
                            <li class="link">
                                <a href="classes/StorefrontData.html" data-type="entity-link">StorefrontData</a>
                            </li>
                            <li class="link">
                                <a href="classes/SummaryGroup.html" data-type="entity-link">SummaryGroup</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaxBreakup.html" data-type="entity-link">TaxBreakup</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaxCertificate.html" data-type="entity-link">TaxCertificate</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaxCode.html" data-type="entity-link">TaxCode</a>
                            </li>
                            <li class="link">
                                <a href="classes/Template.html" data-type="entity-link">Template</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserBase.html" data-type="entity-link">UserBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/WindowRef.html" data-type="entity-link">WindowRef</a>
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
                                    <a href="injectables/AccountLocationService.html" data-type="entity-link">AccountLocationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AccountService.html" data-type="entity-link">AccountService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppliedRuleActionInfoService.html" data-type="entity-link">AppliedRuleActionInfoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppliedRuleInfoService.html" data-type="entity-link">AppliedRuleInfoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AssetBatchActionService.html" data-type="entity-link">AssetBatchActionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AssetModalService.html" data-type="entity-link">AssetModalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AssetSelectionService.html" data-type="entity-link">AssetSelectionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AssetService.html" data-type="entity-link">AssetService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AttachmentsService.html" data-type="entity-link">AttachmentsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AttributeRuleService.html" data-type="entity-link">AttributeRuleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AttributeTranslationService.html" data-type="entity-link">AttributeTranslationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AttributeValueMatrixService.html" data-type="entity-link">AttributeValueMatrixService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BatchActionService.html" data-type="entity-link">BatchActionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartItemService.html" data-type="entity-link">CartItemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartService.html" data-type="entity-link">CartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoryService.html" data-type="entity-link">CategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConstraintAlertService.html" data-type="entity-link">ConstraintAlertService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConstraintRuleActionService.html" data-type="entity-link">ConstraintRuleActionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConstraintRuleConditionService.html" data-type="entity-link">ConstraintRuleConditionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConstraintRuleService.html" data-type="entity-link">ConstraintRuleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConstraintSideMenuService.html" data-type="entity-link">ConstraintSideMenuService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContactService.html" data-type="entity-link">ContactService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConversionService.html" data-type="entity-link">ConversionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmailService.html" data-type="entity-link">EmailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExceptionService.html" data-type="entity-link">ExceptionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GatewayCommunicationService.html" data-type="entity-link">GatewayCommunicationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GatewayTransactionService.html" data-type="entity-link">GatewayTransactionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LineItemService.html" data-type="entity-link">LineItemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LookupService.html" data-type="entity-link">LookupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NoteService.html" data-type="entity-link">NoteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderLineItemService.html" data-type="entity-link">OrderLineItemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderService.html" data-type="entity-link">OrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderTaxService.html" data-type="entity-link">OrderTaxService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaymentService.html" data-type="entity-link">PaymentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PriceListItemService.html" data-type="entity-link">PriceListItemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PriceListService.html" data-type="entity-link">PriceListService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PriceMatrixService.html" data-type="entity-link">PriceMatrixService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PriceRuleService.html" data-type="entity-link">PriceRuleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PriceService.html" data-type="entity-link">PriceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductAttributeGroupService.html" data-type="entity-link">ProductAttributeGroupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductAttributeRuleService.html" data-type="entity-link">ProductAttributeRuleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductAttributeService.html" data-type="entity-link">ProductAttributeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductDrawerService.html" data-type="entity-link">ProductDrawerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductInformationService.html" data-type="entity-link">ProductInformationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductOptionComponentService.html" data-type="entity-link">ProductOptionComponentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductOptionGroupService.html" data-type="entity-link">ProductOptionGroupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductOptionService.html" data-type="entity-link">ProductOptionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductSelectionService.html" data-type="entity-link">ProductSelectionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link">ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductTranslationService.html" data-type="entity-link">ProductTranslationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PromotionService.html" data-type="entity-link">PromotionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProposalTaxService.html" data-type="entity-link">ProposalTaxService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QuoteLineItemService.html" data-type="entity-link">QuoteLineItemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SearchService.html" data-type="entity-link">SearchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServiceWorkerService.html" data-type="entity-link">ServiceWorkerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StorefrontService.html" data-type="entity-link">StorefrontService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TaxService.html" data-type="entity-link">TaxService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TemplateService.html" data-type="entity-link">TemplateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TranslatorLoaderService.html" data-type="entity-link">TranslatorLoaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AboGuard.html" data-type="entity-link">AboGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/ConfigureGuard.html" data-type="entity-link">ConfigureGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/ConstraintRuleGuard.html" data-type="entity-link">ConstraintRuleGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/HomeResolver.html" data-type="entity-link">HomeResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/OrderDetailsGuard.html" data-type="entity-link">OrderDetailsGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/ProductDetailsResolver.html" data-type="entity-link">ProductDetailsResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/RouteGuard.html" data-type="entity-link">RouteGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AccordionRows.html" data-type="entity-link">AccordionRows</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ActionButton.html" data-type="entity-link">ActionButton</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Address.html" data-type="entity-link">Address</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Aggregate.html" data-type="entity-link">Aggregate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AlertMessage.html" data-type="entity-link">AlertMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AlertMessage-1.html" data-type="entity-link">AlertMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AlertMessage-2.html" data-type="entity-link">AlertMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AllowedValues.html" data-type="entity-link">AllowedValues</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Attachment.html" data-type="entity-link">Attachment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AttributeRuleResult.html" data-type="entity-link">AttributeRuleResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BreadcrumbLink.html" data-type="entity-link">BreadcrumbLink</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BuyMoreForm.html" data-type="entity-link">BuyMoreForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Card.html" data-type="entity-link">Card</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CartProductForm.html" data-type="entity-link">CartProductForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChangeConfigurationForm.html" data-type="entity-link">ChangeConfigurationForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfigurationView.html" data-type="entity-link">ConfigurationView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DependentPicklistView.html" data-type="entity-link">DependentPicklistView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FeatureTableData.html" data-type="entity-link">FeatureTableData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HeaderView.html" data-type="entity-link">HeaderView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HomeState.html" data-type="entity-link">HomeState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IncrementAssetDO.html" data-type="entity-link">IncrementAssetDO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InputView.html" data-type="entity-link">InputView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ItemGroup.html" data-type="entity-link">ItemGroup</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserService.html" data-type="entity-link">IUserService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LocaleType.html" data-type="entity-link">LocaleType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LookupRequest.html" data-type="entity-link">LookupRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LookupValue.html" data-type="entity-link">LookupValue</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MailContent.html" data-type="entity-link">MailContent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MatrixMetadata.html" data-type="entity-link">MatrixMetadata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MatrixResult.html" data-type="entity-link">MatrixResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OutputFieldView.html" data-type="entity-link">OutputFieldView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Params.html" data-type="entity-link">Params</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PasswordForm.html" data-type="entity-link">PasswordForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PicklistValue.html" data-type="entity-link">PicklistValue</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PriceForm.html" data-type="entity-link">PriceForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PriceSummaryView.html" data-type="entity-link">PriceSummaryView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PriceTier.html" data-type="entity-link">PriceTier</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductDetailsState.html" data-type="entity-link">ProductDetailsState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductFeatureValue.html" data-type="entity-link">ProductFeatureValue</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductQuantityMap.html" data-type="entity-link">ProductQuantityMap</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PromotionModalInterface.html" data-type="entity-link">PromotionModalInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RecordCollection.html" data-type="entity-link">RecordCollection</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RenewForm.html" data-type="entity-link">RenewForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SearchResults.html" data-type="entity-link">SearchResults</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SelectedOption.html" data-type="entity-link">SelectedOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SummaryState.html" data-type="entity-link">SummaryState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SummaryState-1.html" data-type="entity-link">SummaryState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableCartItem.html" data-type="entity-link">TableCartItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TermOption.html" data-type="entity-link">TermOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/View.html" data-type="entity-link">View</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#pipes-links"' :
                                'data-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/CreditCardExtractorPipe.html" data-type="entity-link">CreditCardExtractorPipe</a>
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
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});