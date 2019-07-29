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
                                            'data-target="#components-links-module-AppModule-5a24e23daf85f6bc7e2e217a08b1eaf4"' : 'data-target="#xs-components-links-module-AppModule-5a24e23daf85f6bc7e2e217a08b1eaf4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-5a24e23daf85f6bc7e2e217a08b1eaf4"' :
                                            'id="xs-components-links-module-AppModule-5a24e23daf85f6bc7e2e217a08b1eaf4"' }>
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
                                            'data-target="#components-links-module-CartModule-e630b84f0227ea48917305d27dd12688"' : 'data-target="#xs-components-links-module-CartModule-e630b84f0227ea48917305d27dd12688"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CartModule-e630b84f0227ea48917305d27dd12688"' :
                                            'id="xs-components-links-module-CartModule-e630b84f0227ea48917305d27dd12688"' }>
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
                                            'data-target="#components-links-module-ChangePasswordModule-fcdf1836a1e0989f80b22822beec3d14"' : 'data-target="#xs-components-links-module-ChangePasswordModule-fcdf1836a1e0989f80b22822beec3d14"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChangePasswordModule-fcdf1836a1e0989f80b22822beec3d14"' :
                                            'id="xs-components-links-module-ChangePasswordModule-fcdf1836a1e0989f80b22822beec3d14"' }>
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
                                            'data-target="#components-links-module-CompareModule-508e60e11b39aac4fb2ee225dc96d2c2"' : 'data-target="#xs-components-links-module-CompareModule-508e60e11b39aac4fb2ee225dc96d2c2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CompareModule-508e60e11b39aac4fb2ee225dc96d2c2"' :
                                            'id="xs-components-links-module-CompareModule-508e60e11b39aac4fb2ee225dc96d2c2"' }>
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
                                            'data-target="#components-links-module-ComponentModule-9b4550f05ccca257f438bb3ae75535c6"' : 'data-target="#xs-components-links-module-ComponentModule-9b4550f05ccca257f438bb3ae75535c6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentModule-9b4550f05ccca257f438bb3ae75535c6"' :
                                            'id="xs-components-links-module-ComponentModule-9b4550f05ccca257f438bb3ae75535c6"' }>
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
                                        'data-target="#directives-links-module-ComponentModule-9b4550f05ccca257f438bb3ae75535c6"' : 'data-target="#xs-directives-links-module-ComponentModule-9b4550f05ccca257f438bb3ae75535c6"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-ComponentModule-9b4550f05ccca257f438bb3ae75535c6"' :
                                        'id="xs-directives-links-module-ComponentModule-9b4550f05ccca257f438bb3ae75535c6"' }>
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
                                            'data-target="#components-links-module-HomeModule-bbc84e541ddd2684d1213831eabb2cce"' : 'data-target="#xs-components-links-module-HomeModule-bbc84e541ddd2684d1213831eabb2cce"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-bbc84e541ddd2684d1213831eabb2cce"' :
                                            'id="xs-components-links-module-HomeModule-bbc84e541ddd2684d1213831eabb2cce"' }>
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
                                            'data-target="#components-links-module-InstalledProductsModule-d28535b09e43eba379653e4211984672"' : 'data-target="#xs-components-links-module-InstalledProductsModule-d28535b09e43eba379653e4211984672"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InstalledProductsModule-d28535b09e43eba379653e4211984672"' :
                                            'id="xs-components-links-module-InstalledProductsModule-d28535b09e43eba379653e4211984672"' }>
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
                                <a href="modules/LineItemTableRowModule.html" data-type="entity-link">LineItemTableRowModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LineItemTableRowModule-57225d38e5c6153e2f873c592d2b55e1"' : 'data-target="#xs-components-links-module-LineItemTableRowModule-57225d38e5c6153e2f873c592d2b55e1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LineItemTableRowModule-57225d38e5c6153e2f873c592d2b55e1"' :
                                            'id="xs-components-links-module-LineItemTableRowModule-57225d38e5c6153e2f873c592d2b55e1"' }>
                                            <li class="link">
                                                <a href="components/LineItemTableRowComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LineItemTableRowComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableRowSubItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableRowSubItemComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-df4a8b7b0d897911a7131dd3438e309b"' : 'data-target="#xs-components-links-module-LoginModule-df4a8b7b0d897911a7131dd3438e309b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-df4a8b7b0d897911a7131dd3438e309b"' :
                                            'id="xs-components-links-module-LoginModule-df4a8b7b0d897911a7131dd3438e309b"' }>
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
                                            'data-target="#components-links-module-ManageCartModule-da87d49944bb146e281a24eb3ded4d2a"' : 'data-target="#xs-components-links-module-ManageCartModule-da87d49944bb146e281a24eb3ded4d2a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ManageCartModule-da87d49944bb146e281a24eb3ded4d2a"' :
                                            'id="xs-components-links-module-ManageCartModule-da87d49944bb146e281a24eb3ded4d2a"' }>
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
                                            'data-target="#components-links-module-MyAccountModule-a03255e4ea39fbbb71c4e184e38269f0"' : 'data-target="#xs-components-links-module-MyAccountModule-a03255e4ea39fbbb71c4e184e38269f0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MyAccountModule-a03255e4ea39fbbb71c4e184e38269f0"' :
                                            'id="xs-components-links-module-MyAccountModule-a03255e4ea39fbbb71c4e184e38269f0"' }>
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
                                            'data-target="#components-links-module-OrderHistoryModule-868bee3aa6adeeca574e9fcf615badc9"' : 'data-target="#xs-components-links-module-OrderHistoryModule-868bee3aa6adeeca574e9fcf615badc9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrderHistoryModule-868bee3aa6adeeca574e9fcf615badc9"' :
                                            'id="xs-components-links-module-OrderHistoryModule-868bee3aa6adeeca574e9fcf615badc9"' }>
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
                                            'data-target="#components-links-module-OrderModule-560df86d9ca09cadbf5483089f1b2d81"' : 'data-target="#xs-components-links-module-OrderModule-560df86d9ca09cadbf5483089f1b2d81"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrderModule-560df86d9ca09cadbf5483089f1b2d81"' :
                                            'id="xs-components-links-module-OrderModule-560df86d9ca09cadbf5483089f1b2d81"' }>
                                            <li class="link">
                                                <a href="components/OrderDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrderDetailsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductDetailsModule.html" data-type="entity-link">ProductDetailsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductDetailsModule-95b1da6fc18cc3277675cb755f5c0677"' : 'data-target="#xs-components-links-module-ProductDetailsModule-95b1da6fc18cc3277675cb755f5c0677"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductDetailsModule-95b1da6fc18cc3277675cb755f5c0677"' :
                                            'id="xs-components-links-module-ProductDetailsModule-95b1da6fc18cc3277675cb755f5c0677"' }>
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
                                            'data-target="#components-links-module-ProductListModule-f1ea83beee5cc1e974ae52b2f641840b"' : 'data-target="#xs-components-links-module-ProductListModule-f1ea83beee5cc1e974ae52b2f641840b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductListModule-f1ea83beee5cc1e974ae52b2f641840b"' :
                                            'id="xs-components-links-module-ProductListModule-f1ea83beee5cc1e974ae52b2f641840b"' }>
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
                                            'data-target="#components-links-module-QuoteModule-7d992b382a6b3d682d96c1a8154cbd1e"' : 'data-target="#xs-components-links-module-QuoteModule-7d992b382a6b3d682d96c1a8154cbd1e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-QuoteModule-7d992b382a6b3d682d96c1a8154cbd1e"' :
                                            'id="xs-components-links-module-QuoteModule-7d992b382a6b3d682d96c1a8154cbd1e"' }>
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
                                <a href="classes/BrowserWindowRef.html" data-type="entity-link">BrowserWindowRef</a>
                            </li>
                            <li class="link">
                                <a href="classes/QuoteActions.html" data-type="entity-link">QuoteActions</a>
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
                                    <a href="injectables/AssetBatchActionService.html" data-type="entity-link">AssetBatchActionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AssetModalService.html" data-type="entity-link">AssetModalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AssetSelectionService.html" data-type="entity-link">AssetSelectionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BatchActionService.html" data-type="entity-link">BatchActionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConstraintAlertService.html" data-type="entity-link">ConstraintAlertService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConstraintSideMenuService.html" data-type="entity-link">ConstraintSideMenuService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExceptionService.html" data-type="entity-link">ExceptionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductDrawerService.html" data-type="entity-link">ProductDrawerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductSelectionService.html" data-type="entity-link">ProductSelectionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServiceWorkerService.html" data-type="entity-link">ServiceWorkerService</a>
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
                                <a href="interfaces/AlertMessage.html" data-type="entity-link">AlertMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AlertMessage-1.html" data-type="entity-link">AlertMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AlertMessage-2.html" data-type="entity-link">AlertMessage</a>
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
                                <a href="interfaces/ChangeConfigurationForm.html" data-type="entity-link">ChangeConfigurationForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfigurationView.html" data-type="entity-link">ConfigurationView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DependentPicklistView.html" data-type="entity-link">DependentPicklistView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HeaderView.html" data-type="entity-link">HeaderView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HomeState.html" data-type="entity-link">HomeState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InputView.html" data-type="entity-link">InputView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LocaleType.html" data-type="entity-link">LocaleType</a>
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
                                <a href="interfaces/PriceSummaryView.html" data-type="entity-link">PriceSummaryView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductDetailsState.html" data-type="entity-link">ProductDetailsState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductQuantityMap.html" data-type="entity-link">ProductQuantityMap</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PromotionModalInterface.html" data-type="entity-link">PromotionModalInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RenewForm.html" data-type="entity-link">RenewForm</a>
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