import React from "react";


class Sidebar extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
<div className="iq-sidebar">
                <div className="iq-sidebar-logo d-flex justify-content-between">
                  <a href="https://iqonic.design/themes/metorik/html/index.html">
                    <img src="./static/img/logo.gif" className="img-fluid" alt="" />
                    <span>Metorik</span>
                  </a>
                  <div className="iq-menu-bt align-self-center">
                    <div className="wrapper-menu">
                      <div className="line-menu half start" />
                      <div className="line-menu" />
                      <div className="line-menu half end" />
                    </div>
                  </div>
                </div>
                <div id="sidebar-scrollbar" data-scrollbar="true" tabIndex={-1} style={{overflow: 'hidden', outline: 'none'}}><div className="scroll-content" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                    <nav className="iq-sidebar-menu">
                      <ul id="iq-sidebar-toggle" className="iq-menu">
                        <li className="iq-menu-title"><i className="ri-separator" /><span>Main</span></li>
                        <li className="active">
                          <a href="https://iqonic.design/themes/metorik/html/index.html#dashboard" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="true"><i className="las la-home" /><span>Dashboard</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                          <ul id="dashboard" className="iq-submenu collapse show" data-parent="#iq-sidebar-toggle">
                            <li className="active"><a href="https://iqonic.design/themes/metorik/html/index.html">Dashboard 1</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/dashboard1.html">Dashboard 2</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="https://iqonic.design/themes/metorik/html/index.html#mailbox" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="las la-envelope-open" /><span>Email</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                          <ul id="mailbox" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                            <li><a href="https://iqonic.design/themes/metorik/html/app/index.html">Inbox</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/app/email-compose.html">Email Compose</a></li>
                          </ul>
                        </li>
                        <li><a href="https://iqonic.design/themes/metorik/html/todo.html" className="iq-waves-effect"><i className="las la-check-square" /><span>Todo</span></a></li>
                        <li>
                          <a href="https://iqonic.design/themes/metorik/html/index.html#user-info" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="las la-user-tie" /><span>User</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                          <ul id="user-info" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                            <li><a href="https://iqonic.design/themes/metorik/html/profile.html">User Profile</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/profile-edit.html">User Edit</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/add-user.html">User Add</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/user-list.html">User List</a></li>
                          </ul>
                        </li>
                        <li><a href="https://iqonic.design/themes/metorik/html/calendar.html" className="iq-waves-effect"><i className="las la-calendar" /><span>Calendar</span></a></li>
                        <li><a href="https://iqonic.design/themes/metorik/html/chat.html" className="iq-waves-effect"><i className="las la-sms" /><span>Chat</span></a></li>
                        <li>
                          <a href="https://iqonic.design/themes/metorik/html/index.html#ecommerce" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="ri-shopping-cart-line" /><span>E-commerce</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                          <ul id="ecommerce" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                            <li><a href="https://iqonic.design/themes/metorik/html/e-commerce-product-list.html">Product Listing</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/e-commerce-product-detail.html">Product Details</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/e-commerce-checkout.html">Checkout</a></li>
                          </ul>
                        </li>
                        <li className="iq-menu-title"><i className="ri-separator" /><span>Components</span></li>
                        <li>
                          <a href="https://iqonic.design/themes/metorik/html/index.html#ui-elements" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="lab la-elementor" /><span>UI Elements</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                          <ul id="ui-elements" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                            <li><a href="https://iqonic.design/themes/metorik/html/ui-colors.html">colors</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/ui-typography.html">Typography</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/ui-alerts.html">Alerts</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/ui-badges.html">Badges</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/ui-breadcrumb.html">Breadcrumb</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/ui-buttons.html">Buttons</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/ui-cards.html">Cards</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/ui-carousel.html">Carousel</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/ui-embed-video.html">Video</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/ui-grid.html">Grid</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/ui-images.html">Images</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/ui-list-group.html">list Group</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/ui-media-object.html">Media</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/ui-modal.html">Modal</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/ui-notifications.html">Notifications</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/ui-pagination.html">Pagination</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/ui-popovers.html">Popovers</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/ui-progressbars.html">Progressbars</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/ui-tabs.html">Tabs</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/ui-tooltips.html">Tooltips</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="https://iqonic.design/themes/metorik/html/index.html#forms" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="las la-file-alt" /><span>Forms</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                          <ul id="forms" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                            <li><a href="https://iqonic.design/themes/metorik/html/form-layout.html">Form Elements</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/form-validation.html">Form Validation</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/form-switch.html">Form Switch</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/form-chechbox.html">Form Checkbox</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/form-radio.html">Form Radio</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="https://iqonic.design/themes/metorik/html/index.html#forms-wizard" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="las la-database" /><span>Forms Wizard</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                          <ul id="forms-wizard" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                            <li><a href="https://iqonic.design/themes/metorik/html/form-wizard.html">Simple Wizard</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/form-wizard-validate.html">Validate Wizard</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/form-wizard-vertical.html">Vertical Wizard</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="https://iqonic.design/themes/metorik/html/index.html#tables" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="las la-table" /><span>Table</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                          <ul id="tables" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                            <li><a href="https://iqonic.design/themes/metorik/html/tables-basic.html">Basic Tables</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/data-table.html">Data Table</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/table-editable.html">Editable Table</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="https://iqonic.design/themes/metorik/html/index.html#charts" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="las la-chart-bar" /><span>Charts</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                          <ul id="charts" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                            <li><a href="https://iqonic.design/themes/metorik/html/chart-morris.html">Morris Chart</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/chart-high.html">High Charts</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/chart-am.html">Am Charts</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/chart-apex.html">Apex Chart</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="https://iqonic.design/themes/metorik/html/index.html#icons" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="las la-icons" /><span>Icons</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                          <ul id="icons" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                            <li><a href="https://iqonic.design/themes/metorik/html/icon-dripicons.html">Dripicons</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/icon-fontawesome-5.html">Font Awesome 5</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/icon-lineawesome.html">line Awesome</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/icon-remixicon.html">Remixicon</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/icon-unicons.html">unicons</a></li>
                          </ul>
                        </li>
                        <li className="iq-menu-title"><i className="ri-separator" /><span>Pages</span></li>
                        <li>
                          <a href="https://iqonic.design/themes/metorik/html/index.html#authentication" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="las la-file-contract" /><span>Authentication</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                          <ul id="authentication" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                            <li><a href="https://iqonic.design/themes/metorik/html/sign-in.html">Login</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/sign-up.html">Register</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/pages-recoverpw.html">Recover Password</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/pages-confirm-mail.html">Confirm Mail</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/pages-lock-screen.html">Lock Screen</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="https://iqonic.design/themes/metorik/html/index.html#map" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="las la-map-marker" /><span>Maps</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                          <ul id="map" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                            <li><a href="https://iqonic.design/themes/metorik/html/pages-map.html">Google Map</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/index.html#">Vector Map</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="https://iqonic.design/themes/metorik/html/index.html#extra-pages" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="lab la-codepen" /><span>Extra Pages</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                          <ul id="extra-pages" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                            <li><a href="https://iqonic.design/themes/metorik/html/pages-timeline.html">Timeline</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/pages-invoice.html">Invoice</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/blank-page.html">Blank Page</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/pages-error.html">Error 404</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/pages-error-500.html">Error 500</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/pages-pricing.html">Pricing</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/pages-pricing-one.html">Pricing 1</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/pages-maintenance.html">Maintenance</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/pages-comingsoon.html">Coming Soon</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/pages-faq.html">Faq</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="https://iqonic.design/themes/metorik/html/index.html#menu-level" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="ri-record-circle-line" /><span>Menu Level</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                          <ul id="menu-level" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                            <li><a href="https://iqonic.design/themes/metorik/html/index.html#"><i className="ri-record-circle-line" />Menu 1</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/index.html#"><i className="ri-record-circle-line" />Menu 2</a>
                            </li><li>
                              <a href="https://iqonic.design/themes/metorik/html/index.html#sub-menu" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="ri-play-circle-line" /><span>Sub-menu</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                              <ul id="sub-menu" className="iq-submenu iq-submenu-data collapse">
                                <li><a href="https://iqonic.design/themes/metorik/html/index.html#"><i className="ri-record-circle-line" />Sub-menu 1</a></li>
                                <li><a href="https://iqonic.design/themes/metorik/html/index.html#"><i className="ri-record-circle-line" />Sub-menu 2</a></li>
                                <li><a href="https://iqonic.design/themes/metorik/html/index.html#"><i className="ri-record-circle-line" />Sub-menu 3</a></li>
                              </ul>
                            </li>
                            <li><a href="https://iqonic.design/themes/metorik/html/index.html#"><i className="ri-record-circle-line" />Menu 3</a></li>
                            <li><a href="https://iqonic.design/themes/metorik/html/index.html#"><i className="ri-record-circle-line" />Menu 4</a></li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                    <div className="p-3" />
                  </div><div className="scrollbar-track scrollbar-track-x" style={{display: 'none'}}><div className="scrollbar-thumb scrollbar-thumb-x" style={{width: '260px', transform: 'translate3d(0px, 0px, 0px)'}} /></div><div className="scrollbar-track scrollbar-track-y" style={{display: 'block'}}><div className="scrollbar-thumb scrollbar-thumb-y" style={{height: '330.604px', transform: 'translate3d(0px, 0px, 0px)'}} /></div></div>
              </div>
              
        )
    }
}

export default Sidebar;