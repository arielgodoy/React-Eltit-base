import React, { useState } from 'react'
import './dashboard.css'

function Dashboard() {
	const [style,setStyle]=useState("app-sidebar-toggle btn btn-icon btn-sm h-30px w-30px rotate");

	const changeStyle =()=>{
		if(style=="app-sidebar-toggle btn btn-icon btn-sm h-30px w-30px rotate"){
			setStyle(" app-sidebar-toggle btn btn-icon btn-sm h-30px w-30px rotate active")
			}
			else{
				setStyle(" app-sidebar-toggle btn btn-icon btn-sm h-30px w-30px rotate")
			}
	}

  return (
    <div>
        <body id="kt_app_body" data-kt-app-layout="dark-sidebar" data-kt-app-header-fixed="true" data-kt-app-sidebar-enabled="true" data-kt-app-sidebar-fixed="true" data-kt-app-sidebar-hoverable="true" data-kt-app-sidebar-push-header="true" data-kt-app-sidebar-push-toolbar="true" data-kt-app-sidebar-push-footer="true" data-kt-app-toolbar-enabled="true" className="app-default">
		{/* {/* <!--begin::Theme mode setup on page load--> */} 
		{/*<script>var defaultThemeMode = "light"; var themeMode; if ( document.documentElement ) { if ( document.documentElement.hasAttribute("data-bs-theme-mode")) { themeMode = document.documentElement.getAttribute("data-bs-theme-mode"); } else { if ( localStorage.getItem("data-bs-theme") !== null ) { themeMode = localStorage.getItem("data-bs-theme"); } else { themeMode = defaultThemeMode; } } if (themeMode === "system") { themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; } document.documentElement.setAttribute("data-bs-theme", themeMode); }</script> */ }
		{/* {/* <!--end::Theme mode setup on page load--> */} 
		{/* {/* <!--begin::App--> */} 
		<div className="d-flex flex-column flex-root app-root" id="kt_app_root">
			{/* {/* <!--begin::Page--> */} 
			<div className="app-page flex-column flex-column-fluid" id="kt_app_page">
				{/* {/* <!--begin::Header--> */} 
				<div id="kt_app_header" className="app-header">
					{/* {/* <!--begin::Header container--> */} 
					<div className="app-container container-fluid d-flex align-items-stretch justify-content-between" id="kt_app_header_container">
						{/* {/* <!--begin::sidebar mobile toggle--> */} 
						<div className="d-flex align-items-center d-lg-none ms-n3 me-2" title="Show sidebar menu">
							<div className="btn btn-icon btn-active-color-primary w-35px h-35px" id="kt_app_sidebar_mobile_toggle">
								<i className="ki-duotone ki-abstract-14 fs-1">
									<span className="path1"></span>
									<span className="path2"></span>
								</i>
							</div>
						</div>
						{/* {/* <!--end::sidebar mobile toggle--> */} 
						{/* {/* <!--begin::Mobile logo--> */} 
						<div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
							<a href="../../demo1/dist/index.html" className="d-lg-none">
								<img alt="Logo" src="%PUBLIC_URL%/assets/media/logos/default-small.svg" className="theme-light-show h-30px" />
								<img alt="Logo" src="%PUBLIC_URL%/assets/media/logos/default-small-dark.svg" className="theme-dark-show h-30px" />
							</a>
						</div>
						 {/* {/* <!--end::Mobile logo--> */} 
						{/* {/* <!--begin::Header wrapper--> */} 
						<div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1" id="kt_app_header_wrapper">
							{/* {/* <!--begin::Menu wrapper--> */} 
							<div className="app-header-menu app-header-mobile-drawer align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="app-header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="225px" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_app_header_menu_toggle" data-kt-swapper="true" data-kt-swapper-mode="{default: 'append', lg: 'prepend'}" data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_wrapper'}">
								{/* {/* <!--begin::Menu--> */} 
								<div className="menu menu-rounded menu-column menu-lg-row my-5 my-lg-0 align-items-stretch fw-semibold px-2 px-lg-0" id="kt_app_header_menu" data-kt-menu="true">
									{/* {/* <!--begin:Menu item--> */} 
									<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item here show menu-here-bg menu-lg-down-accordion me-0 me-lg-2">
										{/* {/* <!--begin:Menu link--> */} 
										<span className="menu-link">
											<span className="menu-title">Dashboards</span>
											<span className="menu-arrow d-lg-none"></span>
										</span>
										{/* {/* <!--end:Menu link--> */} 
										{/* {/* <!--begin:Menu sub--> */} 
										<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0 w-100 w-lg-600px">
											{/* <!--begin:Dashboards menu--> */}
											<div className="menu-state-bg menu-extended overflow-hidden overflow-lg-visible py-2 py-lg-6" data-kt-menu-dismiss="true">
												{/* <!--begin:Row--> */}
												<div className="row px-lg-5">
													{/* <!--begin:Col--> */}
													<div className="col-lg-6 py-1">
														{/* <!--begin:Menu item--> */}
														<div className="menu-item p-0 m-0">
															{/* <!--begin:Menu link--> */}
															<a href="../../demo1/dist/index.html" className="menu-link active">
																<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																	<i className="ki-duotone ki-basket text-primary fs-1">
																		<span className="path1"></span>
																		<span className="path2"></span>
																		<span className="path3"></span>
																		<span className="path4"></span>
																	</i>
																</span>
																<span className="d-flex flex-column">
																	<span className="fs-6 fw-semibold text-gray-800">Default</span>
																	<span className="fs-7 fw-semibold text-muted">Reports & statistics</span>
																</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
													</div>
													{/* <!--end:Col--> */}
													{/* <!--begin:Col--> */}
													<div className="col-lg-6 py-1">
														{/* <!--begin:Menu item--> */}
														<div className="menu-item p-0 m-0">
															{/* <!--begin:Menu link--> */}
															<a href="../../demo1/dist/dashboards/projects.html" className="menu-link">
																<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																	<i className="ki-duotone ki-abstract-44 text-info fs-1">
																		<span className="path1"></span>
																		<span className="path2"></span>
																	</i>
																</span>
																<span className="d-flex flex-column">
																	<span className="fs-6 fw-semibold text-gray-800">Projects</span>
																	<span className="fs-7 fw-semibold text-muted">Tasts, graphs & charts</span>
																</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
													</div>
													{/* <!--end:Col--> */}
													{/* <!--begin:Col--> */}
													<div className="col-lg-6 py-1">
														{/* <!--begin:Menu item--> */}
														<div className="menu-item p-0 m-0">
															{/* <!--begin:Menu link--> */}
															<a href="../../demo1/dist/dashboards/ecommerce.html" className="menu-link">
																<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																	<i className="ki-duotone ki-element-11 text-danger fs-1">
																		<span className="path1"></span>
																		<span className="path2"></span>
																		<span className="path3"></span>
																		<span className="path4"></span>
																	</i>
																</span>
																<span className="d-flex flex-column">
																	<span className="fs-6 fw-semibold text-gray-800">eCommerce</span>
																	<span className="fs-7 fw-semibold text-muted">Sales reports</span>
																</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
													</div>
													{/* <!--end:Col--> */}
													{/* <!--begin:Col--> */}
													<div className="col-lg-6 py-1">
														{/* <!--begin:Menu item--> */}
														<div className="menu-item p-0 m-0">
															{/* <!--begin:Menu link--> */}
															<a href="../../demo1/dist/dashboards/marketing.html" className="menu-link">
																<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																	<i className="ki-duotone ki-chart-simple text-dark fs-1">
																		<span className="path1"></span>
																		<span className="path2"></span>
																		<span className="path3"></span>
																		<span className="path4"></span>
																	</i>
																</span>
																<span className="d-flex flex-column">
																	<span className="fs-6 fw-semibold text-gray-800">Marketing</span>
																	<span className="fs-7 fw-semibold text-muted">Campaings & conversions</span>
																</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
													</div>
													{/* <!--end:Col--> */}
													{/* <!--begin:Col--> */}
													<div className="col-lg-6 py-1">
														{/* <!--begin:Menu item--> */}
														<div className="menu-item p-0 m-0">
															{/* <!--begin:Menu link--> */}
															<a href="../../demo1/dist/dashboards/social.html" className="menu-link">
																<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																	<i className="ki-duotone ki-abstract-39 text-success fs-1">
																		<span className="path1"></span>
																		<span className="path2"></span>
																	</i>
																</span>
																<span className="d-flex flex-column">
																	<span className="fs-6 fw-semibold text-gray-800">Social</span>
																	<span className="fs-7 fw-semibold text-muted">Feeds & Activities</span>
																</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
													</div>
													{/* <!--end:Col--> */}
													{/* <!--begin:Col--> */}
													<div className="col-lg-6 py-1">
														{/* <!--begin:Menu item--> */}
														<div className="menu-item p-0 m-0">
															{/* <!--begin:Menu link--> */}
															<a href="../../demo1/dist/dashboards/bidding.html" className="menu-link">
																<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																	<i className="ki-duotone ki-switch text-warning fs-1">
																		<span className="path1"></span>
																		<span className="path2"></span>
																	</i>
																</span>
																<span className="d-flex flex-column">
																	<span className="fs-6 fw-semibold text-gray-800">Bidding</span>
																	<span className="fs-7 fw-semibold text-muted">Deals & stock exchange</span>
																</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
													</div>
													{/* <!--end:Col--> */}
													{/* <!--begin:Col--> */}
													<div className="col-lg-6 py-1">
														{/* <!--begin:Menu item--> */}
														<div className="menu-item p-0 m-0">
															{/* <!--begin:Menu link--> */}
															<a href="../../demo1/dist/dashboards/online-courses.html" className="menu-link">
																<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																	<i className="ki-duotone ki-color-swatch text-success fs-1">
																		<span className="path1"></span>
																		<span className="path2"></span>
																		<span className="path3"></span>
																		<span className="path4"></span>
																		<span className="path5"></span>
																		<span className="path6"></span>
																		<span className="path7"></span>
																		<span className="path8"></span>
																		<span className="path9"></span>
																		<span className="path10"></span>
																		<span className="path11"></span>
																		<span className="path12"></span>
																		<span className="path13"></span>
																		<span className="path14"></span>
																		<span className="path15"></span>
																		<span className="path16"></span>
																		<span className="path17"></span>
																		<span className="path18"></span>
																		<span className="path19"></span>
																		<span className="path20"></span>
																		<span className="path21"></span>
																	</i>
																</span>
																<span className="d-flex flex-column">
																	<span className="fs-6 fw-semibold text-gray-800">Online Courses</span>
																	<span className="fs-7 fw-semibold text-muted">Student progress</span>
																</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
													</div>
													{/* <!--end:Col--> */}
													{/* <!--begin:Col--> */}
													<div className="col-lg-6 py-1">
														{/* <!--begin:Menu item--> */}
														<div className="menu-item p-0 m-0">
															{/* <!--begin:Menu link--> */}
															<a href="../../demo1/dist/dashboards/logistics.html" className="menu-link">
																<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																	<i className="ki-duotone ki-truck text-info fs-1">
																		<span className="path1"></span>
																		<span className="path2"></span>
																		<span className="path3"></span>
																		<span className="path4"></span>
																		<span className="path5"></span>
																	</i>
																</span>
																<span className="d-flex flex-column">
																	<span className="fs-6 fw-semibold text-gray-800">Logistics</span>
																	<span className="fs-7 fw-semibold text-muted">Shipments and delivery</span>
																</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
													</div>
													{/* <!--end:Col--> */}
												</div>
												{/* <!--end:Row--> */}
											</div>
											{/* <!--end:Dashboards menu--> */}
										</div>
										{/* <!--end:Menu sub--> */}
									</div>
									{/* <!--end:Menu item--> */}
									{/* <!--begin:Menu item--> */}
									<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion me-0 me-lg-2">
										{/* <!--begin:Menu link--> */}
										<span className="menu-link">
											<span className="menu-title">Pages</span>
											<span className="menu-arrow d-lg-none"></span>
										</span>
										{/* <!--end:Menu link--> */}
										{/* <!--begin:Menu sub--> */}
										<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0">
											{/* <!--begin:Pages menu--> */}
											<div className="menu-active-bg px-4 px-lg-0">
												{/* <!--begin:Tabs nav--> */}
												<div className="d-flex w-100 overflow-auto">
													<ul className="nav nav-stretch nav-line-tabs fw-semibold fs-6 p-0 p-lg-10 flex-nowrap flex-grow-1">
														{/* <!--begin:Nav item--> */}
														<li className="nav-item mx-lg-1">
															<a className="nav-link py-3 py-lg-6 active text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_pages">General</a>
														</li>
														{/* <!--end:Nav item--> */}
														{/* <!--begin:Nav item--> */}
														<li className="nav-item mx-lg-1">
															<a className="nav-link py-3 py-lg-6 text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_account">Account</a>
														</li>
														{/* <!--end:Nav item--> */}
														{/* <!--begin:Nav item--> */}
														<li className="nav-item mx-lg-1">
															<a className="nav-link py-3 py-lg-6 text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_authentication">Authentication</a>
														</li>
														{/* <!--end:Nav item--> */}
														{/* <!--begin:Nav item--> */}
														<li className="nav-item mx-lg-1">
															<a className="nav-link py-3 py-lg-6 text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_utilities">Utilities</a>
														</li>
														{/* <!--end:Nav item--> */}
													</ul>
												</div>
												{/* <!--end:Tabs nav--> */}
												{/* <!--begin:Tab content--> */}
												<div className="tab-content py-4 py-lg-8 px-lg-7">
													{/* <!--begin:Tab pane--> */}
													<div className="tab-pane active w-lg-1000px" id="kt_app_header_menu_pages_pages">
														{/* <!--begin:Row--> */}
														<div className="row">
															{/* <!--begin:Col--> */}
															<div className="col-lg-8">
																{/* <!--begin:Row--> */}
																<div className="row">
																	{/* <!--begin:Col--> */}
																	<div className="col-lg-3 mb-6 mb-lg-0">
																		{/* <!--begin:Menu heading--> */}
																		<h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">User Profile</h4>
																		{/* <!--end:Menu heading--> */}
																		{/* <!--begin:Menu item--> */}
																		<div className="menu-item p-0 m-0">
																			{/* <!--begin:Menu link--> */}
																			<a href="../../demo1/dist/pages/user-profile/overview.html" className="menu-link">
																				<span className="menu-title">Overview</span>
																			</a>
																			{/* <!--end:Menu link--> */}
																		</div>
																		{/* <!--end:Menu item--> */}
																		{/* <!--begin:Menu item--> */}
																		<div className="menu-item p-0 m-0">
																			{/* <!--begin:Menu link--> */}
																			<a href="../../demo1/dist/pages/user-profile/projects.html" className="menu-link">
																				<span className="menu-title">Projects</span>
																			</a>
																			{/* <!--end:Menu link--> */}
																		</div>
																		{/* <!--end:Menu item--> */}
																		{/* <!--begin:Menu item--> */}
																		<div className="menu-item p-0 m-0">
																			{/* <!--begin:Menu link--> */}
																			<a href="../../demo1/dist/pages/user-profile/campaigns.html" className="menu-link">
																				<span className="menu-title">Campaigns</span>
																			</a>
																			{/* <!--end:Menu link--> */}
																		</div>
																		{/* <!--end:Menu item--> */}
																		{/* <!--begin:Menu item--> */}
																		<div className="menu-item p-0 m-0">
																			{/* <!--begin:Menu link--> */}
																			<a href="../../demo1/dist/pages/user-profile/documents.html" className="menu-link">
																				<span className="menu-title">Documents</span>
																			</a>
																			{/* <!--end:Menu link--> */}
																		</div>
																		{/* <!--end:Menu item--> */}
																		{/* <!--begin:Menu item--> */}
																		<div className="menu-item p-0 m-0">
																			{/* <!--begin:Menu link--> */}
																			<a href="../../demo1/dist/pages/user-profile/followers.html" className="menu-link">
																				<span className="menu-title">Followers</span>
																			</a>
																			{/* <!--end:Menu link--> */}
																		</div>
																		{/* <!--end:Menu item--> */}
																		{/* <!--begin:Menu item--> */}
																		<div className="menu-item p-0 m-0">
																			{/* <!--begin:Menu link--> */}
																			<a href="../../demo1/dist/pages/user-profile/activity.html" className="menu-link">
																				<span className="menu-title">Activity</span>
																			</a>
																			{/* <!--end:Menu link--> */}
																		</div>
																		{/* <!--end:Menu item--> */}
																	</div>
																	{/* <!--end:Col--> */}
																	{/* <!--begin:Col--> */}
																	<div className="col-lg-3 mb-6 mb-lg-0">
																		{/* <!--begin:Menu section--> */}
																		<div className="mb-6">
																			{/* <!--begin:Menu heading--> */}
																			<h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">Corporate</h4>
																			{/* <!--end:Menu heading--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/pages/about.html" className="menu-link">
																					<span className="menu-title">About</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/pages/team.html" className="menu-link">
																					<span className="menu-title">Our Team</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/pages/faq.html" className="menu-link">
																					<span className="menu-title">FAQ</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/pages/contact.html" className="menu-link">
																					<span className="menu-title">Contact Us</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/pages/pricing.html" className="menu-link">
																					<span className="menu-title">Pricing</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/pages/licenses.html" className="menu-link">
																					<span className="menu-title">Licenses</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/pages/sitemap.html" className="menu-link">
																					<span className="menu-title">Sitemap</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																		</div>
																		{/* <!--end:Menu section--> */}
																	</div>
																	{/* <!--end:Col--> */}
																	{/* <!--begin:Col--> */}
																	<div className="col-lg-3 mb-6 mb-lg-0">
																		{/* <!--begin:Menu section--> */}
																		<div className="mb-6">
																			{/* <!--begin:Menu heading--> */}
																			<h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">Blog</h4>
																			{/* <!--end:Menu heading--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/pages/blog/home.html" className="menu-link">
																					<span className="menu-title">Blog Home</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/pages/blog/post.html" className="menu-link">
																					<span className="menu-title">Blog Post</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																		</div>
																		{/* <!--end:Menu section--> */}
																		{/* <!--begin:Menu section--> */}
																		<div className="mb-0">
																			{/* <!--begin:Menu heading--> */}
																			<h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">Careers</h4>
																			{/* <!--end:Menu heading--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/pages/careers/list.html" className="menu-link">
																					<span className="menu-title">Careers List</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/pages/careers/apply.html" className="menu-link">
																					<span className="menu-title">Careers Apply</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																		</div>
																		{/* <!--end:Menu section--> */}
																	</div>
																	{/* <!--end:Col--> */}
																	{/* <!--begin:Col--> */}
																	<div className="col-lg-3 mb-6 mb-lg-0">
																		{/* <!--begin:Menu section--> */}
																		<div className="mb-0">
																			{/* <!--begin:Menu heading--> */}
																			<h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">Social</h4>
																			{/* <!--end:Menu heading--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/pages/social/feeds.html" className="menu-link">
																					<span className="menu-title">Feeds</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/pages/social/activity.html" className="menu-link">
																					<span className="menu-title">Activty</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/pages/social/followers.html" className="menu-link">
																					<span className="menu-title">Followers</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/pages/social/settings.html" className="menu-link">
																					<span className="menu-title">Settings</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																		</div>
																		{/* <!--end:Menu section--> */}
																	</div>
																	{/* <!--end:Col--> */}
																</div>
																{/* <!--end:Row--> */}
															</div>
															{/* <!--end:Col--> */}
															{/* <!--begin:Col--> */}
															<div className="col-lg-4">
																<img src="%PUBLIC_URL%/assets/media/stock/600x600/img-82.jpg" className="rounded mw-100" alt="" />
															</div>
															{/* <!--end:Col--> */}
														</div>
														{/* <!--end:Row--> */}
													</div>
													{/* <!--end:Tab pane--> */}
													{/* <!--begin:Tab pane--> */}
													<div className="tab-pane w-lg-600px" id="kt_app_header_menu_pages_account">
														{/* <!--begin:Row--> */}
														<div className="row">
															{/* <!--begin:Col--> */}
															<div className="col-lg-5 mb-6 mb-lg-0">
																{/* <!--begin:Row--> */}
																<div className="row">
																	{/* <!--begin:Col--> */}
																	<div className="col-lg-6">
																		{/* <!--begin:Menu item--> */}
																		<div className="menu-item p-0 m-0">
																			{/* <!--begin:Menu link--> */}
																			<a href="../../demo1/dist/account/overview.html" className="menu-link">
																				<span className="menu-title">Overview</span>
																			</a>
																			{/* <!--end:Menu link--> */}
																		</div>
																		{/* <!--end:Menu item--> */}
																		{/* <!--begin:Menu item--> */}
																		<div className="menu-item p-0 m-0">
																			{/* <!--begin:Menu link--> */}
																			<a href="../../demo1/dist/account/settings.html" className="menu-link">
																				<span className="menu-title">Settings</span>
																			</a>
																			{/* <!--end:Menu link--> */}
																		</div>
																		{/* <!--end:Menu item--> */}
																		{/* <!--begin:Menu item--> */}
																		<div className="menu-item p-0 m-0">
																			{/* <!--begin:Menu link--> */}
																			<a href="../../demo1/dist/account/security.html" className="menu-link">
																				<span className="menu-title">Security</span>
																			</a>
																			{/* <!--end:Menu link--> */}
																		</div>
																		{/* <!--end:Menu item--> */}
																		{/* <!--begin:Menu item--> */}
																		<div className="menu-item p-0 m-0">
																			{/* <!--begin:Menu link--> */}
																			<a href="../../demo1/dist/account/activity.html" className="menu-link">
																				<span className="menu-title">Activity</span>
																			</a>
																			{/* <!--end:Menu link--> */}
																		</div>
																		{/* <!--end:Menu item--> */}
																		{/* <!--begin:Menu item--> */}
																		<div className="menu-item p-0 m-0">
																			{/* <!--begin:Menu link--> */}
																			<a href="../../demo1/dist/account/billing.html" className="menu-link">
																				<span className="menu-title">Billing</span>
																			</a>
																			{/* <!--end:Menu link--> */}
																		</div>
																		{/* <!--end:Menu item--> */}
																	</div>
																	{/* <!--end:Col--> */}
																	{/* <!--begin:Col--> */}
																	<div className="col-lg-6">
																		{/* <!--begin:Menu item--> */}
																		<div className="menu-item p-0 m-0">
																			{/* <!--begin:Menu link--> */}
																			<a href="../../demo1/dist/account/statements.html" className="menu-link">
																				<span className="menu-title">Statements</span>
																			</a>
																			{/* <!--end:Menu link--> */}
																		</div>
																		{/* <!--end:Menu item--> */}
																		{/* <!--begin:Menu item--> */}
																		<div className="menu-item p-0 m-0">
																			{/* <!--begin:Menu link--> */}
																			<a href="../../demo1/dist/account/referrals.html" className="menu-link">
																				<span className="menu-title">Referrals</span>
																			</a>
																			{/* <!--end:Menu link--> */}
																		</div>
																		{/* <!--end:Menu item--> */}
																		{/* <!--begin:Menu item--> */}
																		<div className="menu-item p-0 m-0">
																			{/* <!--begin:Menu link--> */}
																			<a href="../../demo1/dist/account/api-keys.html" className="menu-link">
																				<span className="menu-title">API Keys</span>
																			</a>
																			{/* <!--end:Menu link--> */}
																		</div>
																		{/* <!--end:Menu item--> */}
																		{/* <!--begin:Menu item--> */}
																		<div className="menu-item p-0 m-0">
																			{/* <!--begin:Menu link--> */}
																			<a href="../../demo1/dist/account/logs.html" className="menu-link">
																				<span className="menu-title">Logs</span>
																			</a>
																			{/* <!--end:Menu link--> */}
																		</div>
																		{/* <!--end:Menu item--> */}
																	</div>
																	{/* <!--end:Col--> */}
																</div>
																{/* <!--end:Row--> */}
															</div>
															{/* <!--end:Col--> */}
															{/* <!--begin:Col--> */}
															<div className="col-lg-7">
																<img src="%PUBLIC_URL%/assets/media/stock/900x600/46.jpg" className="rounded mw-100" alt="" />
															</div>
															{/* <!--end:Col--> */}
														</div>
														{/* <!--end:Row--> */}
													</div>
													{/* <!--end:Tab pane--> */}
													{/* <!--begin:Tab pane--> */}
													<div className="tab-pane w-lg-600px" id="kt_app_header_menu_pages_authentication">
														{/* <!--begin:Row--> */}
														<div className="row">
															{/* <!--begin:Col--> */}
															<div className="col-lg-4 mb-6 mb-lg-0">
																{/* <!--begin:Menu section--> */}
																<div className="mb-6">
																	{/* <!--begin:Menu heading--> */}
																	<h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">Corporate</h4>
																	{/* <!--end:Menu heading--> */}
																	{/* <!--begin:Menu item--> */}
																	<div className="menu-item p-0 m-0">
																		{/* <!--begin:Menu link--> */}
																		<a href="../../demo1/dist/authentication/layouts/corporate/sign-in.html" className="menu-link">
																			<span className="menu-title">Sign-In</span>
																		</a>
																		{/* <!--end:Menu link--> */}
																	</div>
																	{/* <!--end:Menu item--> */}
																	{/* <!--begin:Menu item--> */}
																	<div className="menu-item p-0 m-0">
																		{/* <!--begin:Menu link--> */}
																		<a href="../../demo1/dist/authentication/layouts/corporate/sign-up.html" className="menu-link">
																			<span className="menu-title">Sign-Up</span>
																		</a>
																		{/* <!--end:Menu link--> */}
																	</div>
																	{/* <!--end:Menu item--> */}
																	{/* <!--begin:Menu item--> */}
																	<div className="menu-item p-0 m-0">
																		{/* <!--begin:Menu link--> */}
																		<a href="../../demo1/dist/authentication/layouts/corporate/two-factor.html" className="menu-link">
																			<span className="menu-title">Two-steps</span>
																		</a>
																		{/* <!--end:Menu link--> */}
																	</div>
																	{/* <!--end:Menu item--> */}
																	{/* <!--begin:Menu item--> */}
																	<div className="menu-item p-0 m-0">
																		{/* <!--begin:Menu link--> */}
																		<a href="../../demo1/dist/authentication/layouts/corporate/reset-password.html" className="menu-link">
																			<span className="menu-title">Reset Password</span>
																		</a>
																		{/* <!--end:Menu link--> */}
																	</div>
																	{/* <!--end:Menu item--> */}
																	{/* <!--begin:Menu item--> */}
																	<div className="menu-item p-0 m-0">
																		{/* <!--begin:Menu link--> */}
																		<a href="../../demo1/dist/authentication/layouts/corporate/new-password.html" className="menu-link">
																			<span className="menu-title">New Password</span>
																		</a>
																		{/* <!--end:Menu link--> */}
																	</div>
																	{/* <!--end:Menu item--> */}
																	{/* <!--begin:Menu item--> */}
																	<div className="menu-item p-0 m-0">
																		{/* <!--begin:Menu link--> */}
																		<a href="../../demo1/dist/authentication/extended/multi-steps-sign-up.html" className="menu-link">
																			<span className="menu-title">Multi-steps Sign-Up</span>
																		</a>
																		{/* <!--end:Menu link--> */}
																	</div>
																	{/* <!--end:Menu item--> */}
																	{/* <!--begin:Menu item--> */}
																	<div className="menu-item p-0 m-0">
																		{/* <!--begin:Menu link--> */}
																		<a href="../../demo1/dist/authentication/extended/two-factor-auth.html" className="menu-link">
																			<span className="menu-title">Two Factor Auth</span>
																		</a>
																		{/* <!--end:Menu link--> */}
																	</div>
																	{/* <!--end:Menu item--> */}
																</div>
																{/* <!--end:Menu section--> */}
															</div>
															{/* <!--end:Col--> */}
															{/* <!--begin:Col--> */}
															<div className="col-lg-4 mb-6 mb-lg-0">
																{/* <!--begin:Menu section--> */}
																<div className="mb-0">
																	{/* <!--begin:Menu heading--> */}
																	<h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">General</h4>
																	{/* <!--end:Menu heading--> */}
																	{/* <!--begin:Menu item--> */}
																	<div className="menu-item p-0 m-0">
																		{/* <!--begin:Menu link--> */}
																		<a href="../../demo1/dist/authentication/general/welcome.html" className="menu-link">
																			<span className="menu-title">Welcome Message</span>
																		</a>
																		{/* <!--end:Menu link--> */}
																	</div>
																	{/* <!--end:Menu item--> */}
																	{/* <!--begin:Menu item--> */}
																	<div className="menu-item p-0 m-0">
																		{/* <!--begin:Menu link--> */}
																		<a href="../../demo1/dist/authentication/general/verify-email.html" className="menu-link">
																			<span className="menu-title">Verify Email</span>
																		</a>
																		{/* <!--end:Menu link--> */}
																	</div>
																	{/* <!--end:Menu item--> */}
																	{/* <!--begin:Menu item--> */}
																	<div className="menu-item p-0 m-0">
																		{/* <!--begin:Menu link--> */}
																		<a href="../../demo1/dist/authentication/general/coming-soon.html" className="menu-link">
																			<span className="menu-title">Coming Soon</span>
																		</a>
																		{/* <!--end:Menu link--> */}
																	</div>
																	{/* <!--end:Menu item--> */}
																	{/* <!--begin:Menu item--> */}
																	<div className="menu-item p-0 m-0">
																		{/* <!--begin:Menu link--> */}
																		<a href="../../demo1/dist/authentication/general/password-confirmation.html" className="menu-link">
																			<span className="menu-title">Password Confirmation</span>
																		</a>
																		{/* <!--end:Menu link--> */}
																	</div>
																	{/* <!--end:Menu item--> */}
																	{/* <!--begin:Menu item--> */}
																	<div className="menu-item p-0 m-0">
																		{/* <!--begin:Menu link--> */}
																		<a href="../../demo1/dist/authentication/general/account-deactivated.html" className="menu-link">
																			<span className="menu-title">Account Deactivation</span>
																		</a>
																		{/* <!--end:Menu link--> */}
																	</div>
																	{/* <!--end:Menu item--> */}
																	{/* <!--begin:Menu item--> */}
																	<div className="menu-item p-0 m-0">
																		{/* <!--begin:Menu link--> */}
																		<a href="../../demo1/dist/authentication/general/error-404.html" className="menu-link">
																			<span className="menu-title">Error 404</span>
																		</a>
																		{/* <!--end:Menu link--> */}
																	</div>
																	{/* <!--end:Menu item--> */}
																	{/* <!--begin:Menu item--> */}
																	<div className="menu-item p-0 m-0">
																		{/* <!--begin:Menu link--> */}
																		<a href="../../demo1/dist/authentication/general/error-500.html" className="menu-link">
																			<span className="menu-title">Error 500</span>
																		</a>
																		{/* <!--end:Menu link--> */}
																	</div>
																	{/* <!--end:Menu item--> */}
																	{/* <!--begin:Menu item--> */}
																	<div className="menu-item p-0 m-0">
																		{/* <!--begin:Menu link--> */}
																		<a href="../../demo1/dist/authentication/general/maintenance.html" className="menu-link">
																			<span className="menu-title">Maintenance</span>
																		</a>
																		{/* <!--end:Menu link--> */}
																	</div>
																	{/* <!--end:Menu item--> */}
																</div>
																{/* <!--end:Menu section--> */}
															</div>
															{/* <!--end:Col--> */}
															{/* <!--begin:Col--> */}
															<div className="col-lg-4 mb-6 mb-lg-0">
																{/* <!--begin:Menu section--> */}
																<div className="mb-0">
																	{/* <!--begin:Menu heading--> */}
																	<h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">Email Templates</h4>
																	{/* <!--end:Menu heading--> */}
																	{/* <!--begin:Menu item--> */}
																	<div className="menu-item p-0 m-0">
																		{/* <!--begin:Menu link--> */}
																		<a href="../../demo1/dist/authentication/email/welcome-message.html" className="menu-link">
																			<span className="menu-title">Welcome Message</span>
																		</a>
																		{/* <!--end:Menu link--> */}
																	</div>
																	{/* <!--end:Menu item--> */}
																	{/* <!--begin:Menu item--> */}
																	<div className="menu-item p-0 m-0">
																		{/* <!--begin:Menu link--> */}
																		<a href="../../demo1/dist/authentication/email/reset-password.html" className="menu-link">
																			<span className="menu-title">Reset Password</span>
																		</a>
																		{/* <!--end:Menu link--> */}
																	</div>
																	{/* <!--end:Menu item--> */}
																	{/* <!--begin:Menu item--> */}
																	<div className="menu-item p-0 m-0">
																		{/* <!--begin:Menu link--> */}
																		<a href="../../demo1/dist/authentication/email/subscription-confirmed.html" className="menu-link">
																			<span className="menu-title">Subscription Confirmed</span>
																		</a>
																		{/* <!--end:Menu link--> */}
																	</div>
																	{/* <!--end:Menu item--> */}
																	{/* <!--begin:Menu item--> */}
																	<div className="menu-item p-0 m-0">
																		{/* <!--begin:Menu link--> */}
																		<a href="../../demo1/dist/authentication/email/card-declined.html" className="menu-link">
																			<span className="menu-title">Credit Card Declined</span>
																		</a>
																		{/* <!--end:Menu link--> */}
																	</div>
																	{/* <!--end:Menu item--> */}
																	{/* <!--begin:Menu item--> */}
																	<div className="menu-item p-0 m-0">
																		{/* <!--begin:Menu link--> */}
																		<a href="../../demo1/dist/authentication/email/promo-1.html" className="menu-link">
																			<span className="menu-title">Promo 1</span>
																		</a>
																		{/* <!--end:Menu link--> */}
																	</div>
																	{/* <!--end:Menu item--> */}
																	{/* <!--begin:Menu item--> */}
																	<div className="menu-item p-0 m-0">
																		{/* <!--begin:Menu link--> */}
																		<a href="../../demo1/dist/authentication/email/promo-2.html" className="menu-link">
																			<span className="menu-title">Promo 2</span>
																		</a>
																		{/* <!--end:Menu link--> */}
																	</div>
																	{/* <!--end:Menu item--> */}
																	{/* <!--begin:Menu item--> */}
																	<div className="menu-item p-0 m-0">
																		{/* <!--begin:Menu link--> */}
																		<a href="../../demo1/dist/authentication/email/promo-3.html" className="menu-link">
																			<span className="menu-title">Promo 3</span>
																		</a>
																		{/* <!--end:Menu link--> */}
																	</div>
																	{/* <!--end:Menu item--> */}
																</div>
																{/* <!--end:Menu section--> */}
															</div>
															{/* <!--end:Col--> */}
														</div>
														{/* <!--end:Row--> */}
													</div>
													{/* <!--end:Tab pane--> */}
													{/* <!--begin:Tab pane--> */}
													<div className="tab-pane w-lg-1000px" id="kt_app_header_menu_pages_utilities">
														{/* <!--begin:Row--> */}
														<div className="row">
															{/* <!--begin:Col--> */}
															<div className="col-lg-7">
																{/* <!--begin:Row--> */}
																<div className="row">
																	{/* <!--begin:Col--> */}
																	<div className="col-lg-4 mb-6 mb-lg-0">
																		{/* <!--begin:Menu section--> */}
																		<div className="mb-0">
																			{/* <!--begin:Menu heading--> */}
																			<h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">General Modals</h4>
																			{/* <!--end:Menu heading--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/utilities/modals/general/invite-friends.html" className="menu-link">
																					<span className="menu-title">Invite Friends</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/utilities/modals/general/view-users.html" className="menu-link">
																					<span className="menu-title">View Users</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/utilities/modals/general/select-users.html" className="menu-link">
																					<span className="menu-title">Select Users</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/utilities/modals/general/upgrade-plan.html" className="menu-link">
																					<span className="menu-title">Upgrade Plan</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/utilities/modals/general/share-earn.html" className="menu-link">
																					<span className="menu-title">Share & Earn</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/utilities/modals/forms/new-target.html" className="menu-link">
																					<span className="menu-title">New Target</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/utilities/modals/forms/new-card.html" className="menu-link">
																					<span className="menu-title">New Card</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/utilities/modals/forms/new-address.html" className="menu-link">
																					<span className="menu-title">New Address</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/utilities/modals/forms/create-api-key.html" className="menu-link">
																					<span className="menu-title">Create API Key</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/utilities/modals/forms/bidding.html" className="menu-link">
																					<span className="menu-title">Bidding</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																		</div>
																		{/* <!--end:Menu section--> */}
																	</div>
																	{/* <!--end:Col--> */}
																	{/* <!--begin:Col--> */}
																	<div className="col-lg-4 mb-6 mb-lg-0">
																		{/* <!--begin:Menu section--> */}
																		<div className="mb-6">
																			{/* <!--begin:Menu heading--> */}
																			<h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">Advanced Modals</h4>
																			{/* <!--end:Menu heading--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/utilities/modals/wizards/create-app.html" className="menu-link">
																					<span className="menu-title">Create App</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/utilities/modals/wizards/create-campaign.html" className="menu-link">
																					<span className="menu-title">Create Campaign</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/utilities/modals/wizards/create-account.html" className="menu-link">
																					<span className="menu-title">Create Business Acc</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/utilities/modals/wizards/create-project.html" className="menu-link">
																					<span className="menu-title">Create Project</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/utilities/modals/wizards/top-up-wallet.html" className="menu-link">
																					<span className="menu-title">Top Up Wallet</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/utilities/modals/wizards/offer-a-deal.html" className="menu-link">
																					<span className="menu-title">Offer a Deal</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/utilities/modals/wizards/two-factor-authentication.html" className="menu-link">
																					<span className="menu-title">Two Factor Auth</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																		</div>
																		{/* <!--end:Menu section--> */}
																		{/* <!--begin:Menu section--> */}
																		<div className="mb-0">
																			{/* <!--begin:Menu heading--> */}
																			<h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">Search</h4>
																			{/* <!--end:Menu heading--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/utilities/search/horizontal.html" className="menu-link">
																					<span className="menu-title">Horizontal</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/utilities/search/vertical.html" className="menu-link">
																					<span className="menu-title">Vertical</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/utilities/modals/search/users.html" className="menu-link">
																					<span className="menu-title">Users</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/utilities/modals/search/select-location.html" className="menu-link">
																					<span className="menu-title">Select Location</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																		</div>
																		{/* <!--end:Menu section--> */}
																	</div>
																	{/* <!--end:Col--> */}
																	{/* <!--begin:Col--> */}
																	<div className="col-lg-4 mb-6 mb-lg-0">
																		{/* <!--begin:Menu section--> */}
																		<div className="mb-0">
																			{/* <!--begin:Menu heading--> */}
																			<h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">Wizards</h4>
																			{/* <!--end:Menu heading--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/utilities/wizards/horizontal.html" className="menu-link">
																					<span className="menu-title">Horizontal</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/utilities/wizards/vertical.html" className="menu-link">
																					<span className="menu-title">Vertical</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/utilities/wizards/two-factor-authentication.html" className="menu-link">
																					<span className="menu-title">Two Factor Auth</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/utilities/wizards/create-app.html" className="menu-link">
																					<span className="menu-title">Create App</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/utilities/wizards/create-campaign.html" className="menu-link">
																					<span className="menu-title">Create Campaign</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/utilities/wizards/create-account.html" className="menu-link">
																					<span className="menu-title">Create Account</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/utilities/wizards/create-project.html" className="menu-link">
																					<span className="menu-title">Create Project</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/utilities/modals/wizards/top-up-wallet.html" className="menu-link">
																					<span className="menu-title">Top Up Wallet</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																			{/* <!--begin:Menu item--> */}
																			<div className="menu-item p-0 m-0">
																				{/* <!--begin:Menu link--> */}
																				<a href="../../demo1/dist/utilities/wizards/offer-a-deal.html" className="menu-link">
																					<span className="menu-title">Offer a Deal</span>
																				</a>
																				{/* <!--end:Menu link--> */}
																			</div>
																			{/* <!--end:Menu item--> */}
																		</div>
																		{/* <!--end:Menu section--> */}
																	</div>
																	{/* <!--end:Col--> */}
																</div>
																{/* <!--end:Row--> */}
															</div>
															{/* <!--end:Col--> */}
															{/* <!--begin:Col--> */}
															<div className="col-lg-5 pe-lg-5">
																<img src="%PUBLIC_URL%/assets/media/stock/600x600/img-84.jpg" className="rounded mw-100" alt="" />
															</div>
															{/* <!--end:Col--> */}
														</div>
														{/* <!--end:Row--> */}
													</div>
													{/* <!--end:Tab pane--> */}
												</div>
												{/* <!--end:Tab content--> */}
											</div>
											{/* <!--end:Pages menu--> */}
										</div>
										{/* <!--end:Menu sub--> */}
									</div>
									{/* <!--end:Menu item--> */}
									{/* <!--begin:Menu item--> */}
									<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2">
										{/* <!--begin:Menu link--> */}
										<span className="menu-link">
											<span className="menu-title">Apps</span>
											<span className="menu-arrow d-lg-none"></span>
										</span>
										{/* <!--end:Menu link--> */}
										{/* <!--begin:Menu sub--> */}
										<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-250px">
											{/* <!--begin:Menu item--> */}
											<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
												{/* <!--begin:Menu link--> */}
												<span className="menu-link">
													<span className="menu-icon">
														<i className="ki-duotone ki-rocket fs-2">
															<span className="path1"></span>
															<span className="path2"></span>
														</i>
													</span>
													<span className="menu-title">Projects</span>
													<span className="menu-arrow"></span>
												</span>
												{/* <!--end:Menu link--> */}
												{/* <!--begin:Menu sub--> */}
												<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/projects/list.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">My Projects</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/projects/project.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">View Project</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/projects/targets.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Targets</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/projects/budget.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Budget</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/projects/users.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Users</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/projects/files.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Files</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/projects/activity.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Activity</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/projects/settings.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Settings</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
												</div>
												{/* <!--end:Menu sub--> */}
											</div>
											{/* <!--end:Menu item--> */}
											{/* <!--begin:Menu item--> */}
											<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
												{/* <!--begin:Menu link--> */}
												<span className="menu-link">
													<span className="menu-icon">
														<i className="ki-duotone ki-handcart fs-2"></i>
													</span>
													<span className="menu-title">eCommerce</span>
													<span className="menu-arrow"></span>
												</span>
												{/* <!--end:Menu link--> */}
												{/* <!--begin:Menu sub--> */}
												<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
													{/* <!--begin:Menu item--> */}
													<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
														{/* <!--begin:Menu link--> */}
														<span className="menu-link">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Catalog</span>
															<span className="menu-arrow"></span>
														</span>
														{/* <!--end:Menu link--> */}
														{/* <!--begin:Menu sub--> */}
														<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
															{/* <!--begin:Menu item--> */}
															<div className="menu-item">
																{/* <!--begin:Menu link--> */}
																<a className="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/products.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Products</span>
																</a>
																{/* <!--end:Menu link--> */}
															</div>
															{/* <!--end:Menu item--> */}
															{/* <!--begin:Menu item--> */}
															<div className="menu-item">
																{/* <!--begin:Menu link--> */}
																<a className="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/categories.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Categories</span>
																</a>
																{/* <!--end:Menu link--> */}
															</div>
															{/* <!--end:Menu item--> */}
															{/* <!--begin:Menu item--> */}
															<div className="menu-item">
																{/* <!--begin:Menu link--> */}
																<a className="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/add-product.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Add Product</span>
																</a>
																{/* <!--end:Menu link--> */}
															</div>
															{/* <!--end:Menu item--> */}
															{/* <!--begin:Menu item--> */}
															<div className="menu-item">
																{/* <!--begin:Menu link--> */}
																<a className="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Edit Product</span>
																</a>
																{/* <!--end:Menu link--> */}
															</div>
															{/* <!--end:Menu item--> */}
															{/* <!--begin:Menu item--> */}
															<div className="menu-item">
																{/* <!--begin:Menu link--> */}
																<a className="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/add-category.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Add Category</span>
																</a>
																{/* <!--end:Menu link--> */}
															</div>
															{/* <!--end:Menu item--> */}
															{/* <!--begin:Menu item--> */}
															<div className="menu-item">
																{/* <!--begin:Menu link--> */}
																<a className="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/edit-category.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Edit Category</span>
																</a>
																{/* <!--end:Menu link--> */}
															</div>
															{/* <!--end:Menu item--> */}
														</div>
														{/* <!--end:Menu sub--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div data-kt-menu-trigger="click" className="menu-item menu-accordion menu-sub-indention">
														{/* <!--begin:Menu link--> */}
														<span className="menu-link">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Sales</span>
															<span className="menu-arrow"></span>
														</span>
														{/* <!--end:Menu link--> */}
														{/* <!--begin:Menu sub--> */}
														<div className="menu-sub menu-sub-accordion">
															{/* <!--begin:Menu item--> */}
															<div className="menu-item">
																{/* <!--begin:Menu link--> */}
																<a className="menu-link" href="../../demo1/dist/apps/ecommerce/sales/listing.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Orders Listing</span>
																</a>
																{/* <!--end:Menu link--> */}
															</div>
															{/* <!--end:Menu item--> */}
															{/* <!--begin:Menu item--> */}
															<div className="menu-item">
																{/* <!--begin:Menu link--> */}
																<a className="menu-link" href="../../demo1/dist/apps/ecommerce/sales/details.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Order Details</span>
																</a>
																{/* <!--end:Menu link--> */}
															</div>
															{/* <!--end:Menu item--> */}
															{/* <!--begin:Menu item--> */}
															<div className="menu-item">
																{/* <!--begin:Menu link--> */}
																<a className="menu-link" href="../../demo1/dist/apps/ecommerce/sales/add-order.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Add Order</span>
																</a>
																{/* <!--end:Menu link--> */}
															</div>
															{/* <!--end:Menu item--> */}
															{/* <!--begin:Menu item--> */}
															<div className="menu-item">
																{/* <!--begin:Menu link--> */}
																<a className="menu-link" href="../../demo1/dist/apps/ecommerce/sales/edit-order.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Edit Order</span>
																</a>
																{/* <!--end:Menu link--> */}
															</div>
															{/* <!--end:Menu item--> */}
														</div>
														{/* <!--end:Menu sub--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div data-kt-menu-trigger="click" className="menu-item menu-accordion menu-sub-indention">
														{/* <!--begin:Menu link--> */}
														<span className="menu-link">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Customers</span>
															<span className="menu-arrow"></span>
														</span>
														{/* <!--end:Menu link--> */}
														{/* <!--begin:Menu sub--> */}
														<div className="menu-sub menu-sub-accordion">
															{/* <!--begin:Menu item--> */}
															<div className="menu-item">
																{/* <!--begin:Menu link--> */}
																<a className="menu-link" href="../../demo1/dist/apps/ecommerce/customers/listing.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Customers Listing</span>
																</a>
																{/* <!--end:Menu link--> */}
															</div>
															{/* <!--end:Menu item--> */}
															{/* <!--begin:Menu item--> */}
															<div className="menu-item">
																{/* <!--begin:Menu link--> */}
																<a className="menu-link" href="../../demo1/dist/apps/ecommerce/customers/details.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Customers Details</span>
																</a>
																{/* <!--end:Menu link--> */}
															</div>
															{/* <!--end:Menu item--> */}
														</div>
														{/* <!--end:Menu sub--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div data-kt-menu-trigger="click" className="menu-item menu-accordion menu-sub-indention">
														{/* <!--begin:Menu link--> */}
														<span className="menu-link">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Reports</span>
															<span className="menu-arrow"></span>
														</span>
														{/* <!--end:Menu link--> */}
														{/* <!--begin:Menu sub--> */}
														<div className="menu-sub menu-sub-accordion">
															{/* <!--begin:Menu item--> */}
															<div className="menu-item">
																{/* <!--begin:Menu link--> */}
																<a className="menu-link" href="../../demo1/dist/apps/ecommerce/reports/view.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Products Viewed</span>
																</a>
																{/* <!--end:Menu link--> */}
															</div>
															{/* <!--end:Menu item--> */}
															{/* <!--begin:Menu item--> */}
															<div className="menu-item">
																{/* <!--begin:Menu link--> */}
																<a className="menu-link" href="../../demo1/dist/apps/ecommerce/reports/sales.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Sales</span>
																</a>
																{/* <!--end:Menu link--> */}
															</div>
															{/* <!--end:Menu item--> */}
															{/* <!--begin:Menu item--> */}
															<div className="menu-item">
																{/* <!--begin:Menu link--> */}
																<a className="menu-link" href="../../demo1/dist/apps/ecommerce/reports/returns.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Returns</span>
																</a>
																{/* <!--end:Menu link--> */}
															</div>
															{/* <!--end:Menu item--> */}
															{/* <!--begin:Menu item--> */}
															<div className="menu-item">
																{/* <!--begin:Menu link--> */}
																<a className="menu-link" href="../../demo1/dist/apps/ecommerce/reports/customer-orders.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Customer Orders</span>
																</a>
																{/* <!--end:Menu link--> */}
															</div>
															{/* <!--end:Menu item--> */}
															{/* <!--begin:Menu item--> */}
															<div className="menu-item">
																{/* <!--begin:Menu link--> */}
																<a className="menu-link" href="../../demo1/dist/apps/ecommerce/reports/shipping.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Shipping</span>
																</a>
																{/* <!--end:Menu link--> */}
															</div>
															{/* <!--end:Menu item--> */}
														</div>
														{/* <!--end:Menu sub--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/ecommerce/settings.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Settings</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
												</div>
												{/* <!--end:Menu sub--> */}
											</div>
											{/* <!--end:Menu item--> */}
											{/* <!--begin:Menu item--> */}
											<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
												{/* <!--begin:Menu link--> */}
												<span className="menu-link">
													<span className="menu-icon">
														<i className="ki-duotone ki-chart fs-2">
															<span className="path1"></span>
															<span className="path2"></span>
														</i>
													</span>
													<span className="menu-title">Support Center</span>
													<span className="menu-arrow"></span>
												</span>
												{/* <!--end:Menu link--> */}
												{/* <!--begin:Menu sub--> */}
												<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/support-center/overview.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Overview</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
														{/* <!--begin:Menu link--> */}
														<span className="menu-link">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Tickets</span>
															<span className="menu-arrow"></span>
														</span>
														{/* <!--end:Menu link--> */}
														{/* <!--begin:Menu sub--> */}
														<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
															{/* <!--begin:Menu item--> */}
															<div className="menu-item">
																{/* <!--begin:Menu link--> */}
																<a className="menu-link" href="../../demo1/dist/apps/support-center/tickets/list.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Ticket List</span>
																</a>
																{/* <!--end:Menu link--> */}
															</div>
															{/* <!--end:Menu item--> */}
															{/* <!--begin:Menu item--> */}
															<div className="menu-item">
																{/* <!--begin:Menu link--> */}
																<a className="menu-link" href="../../demo1/dist/apps/support-center/tickets/view.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Ticket View</span>
																</a>
																{/* <!--end:Menu link--> */}
															</div>
															{/* <!--end:Menu item--> */}
														</div>
														{/* <!--end:Menu sub--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
														{/* <!--begin:Menu link--> */}
														<span className="menu-link">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Tutorials</span>
															<span className="menu-arrow"></span>
														</span>
														{/* <!--end:Menu link--> */}
														{/* <!--begin:Menu sub--> */}
														<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
															{/* <!--begin:Menu item--> */}
															<div className="menu-item">
																{/* <!--begin:Menu link--> */}
																<a className="menu-link" href="../../demo1/dist/apps/support-center/tutorials/list.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Tutorials List</span>
																</a>
																{/* <!--end:Menu link--> */}
															</div>
															{/* <!--end:Menu item--> */}
															{/* <!--begin:Menu item--> */}
															<div className="menu-item">
																{/* <!--begin:Menu link--> */}
																<a className="menu-link" href="../../demo1/dist/apps/support-center/tutorials/post.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Tutorials Post</span>
																</a>
																{/* <!--end:Menu link--> */}
															</div>
															{/* <!--end:Menu item--> */}
														</div>
														{/* <!--end:Menu sub--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/support-center/faq.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">FAQ</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/support-center/licenses.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Licenses</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/support-center/contact.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Contact Us</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
												</div>
												{/* <!--end:Menu sub--> */}
											</div>
											{/* <!--end:Menu item--> */}
											{/* <!--begin:Menu item--> */}
											<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
												{/* <!--begin:Menu link--> */}
												<span className="menu-link">
													<span className="menu-icon">
														<i className="ki-duotone ki-shield-tick fs-2">
															<span className="path1"></span>
															<span className="path2"></span>
														</i>
													</span>
													<span className="menu-title">User Management</span>
													<span className="menu-arrow"></span>
												</span>
												{/* <!--end:Menu link--> */}
												{/* <!--begin:Menu sub--> */}
												<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
													{/* <!--begin:Menu item--> */}
													<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
														{/* <!--begin:Menu link--> */}
														<span className="menu-link">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Users</span>
															<span className="menu-arrow"></span>
														</span>
														{/* <!--end:Menu link--> */}
														{/* <!--begin:Menu sub--> */}
														<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
															{/* <!--begin:Menu item--> */}
															<div className="menu-item">
																{/* <!--begin:Menu link--> */}
																<a className="menu-link" href="../../demo1/dist/apps/user-management/users/list.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Users List</span>
																</a>
																{/* <!--end:Menu link--> */}
															</div>
															{/* <!--end:Menu item--> */}
															{/* <!--begin:Menu item--> */}
															<div className="menu-item">
																{/* <!--begin:Menu link--> */}
																<a className="menu-link" href="../../demo1/dist/apps/user-management/users/view.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">View User</span>
																</a>
																{/* <!--end:Menu link--> */}
															</div>
															{/* <!--end:Menu item--> */}
														</div>
														{/* <!--end:Menu sub--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
														{/* <!--begin:Menu link--> */}
														<span className="menu-link">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Roles</span>
															<span className="menu-arrow"></span>
														</span>
														{/* <!--end:Menu link--> */}
														{/* <!--begin:Menu sub--> */}
														<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
															{/* <!--begin:Menu item--> */}
															<div className="menu-item">
																{/* <!--begin:Menu link--> */}
																<a className="menu-link" href="../../demo1/dist/apps/user-management/roles/list.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Roles List</span>
																</a>
																{/* <!--end:Menu link--> */}
															</div>
															{/* <!--end:Menu item--> */}
															{/* <!--begin:Menu item--> */}
															<div className="menu-item">
																{/* <!--begin:Menu link--> */}
																<a className="menu-link" href="../../demo1/dist/apps/user-management/roles/view.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">View Roles</span>
																</a>
																{/* <!--end:Menu link--> */}
															</div>
															{/* <!--end:Menu item--> */}
														</div>
														{/* <!--end:Menu sub--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/user-management/permissions.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Permissions</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
												</div>
												{/* <!--end:Menu sub--> */}
											</div>
											{/* <!--end:Menu item--> */}
											{/* <!--begin:Menu item--> */}
											<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
												{/* <!--begin:Menu link--> */}
												<span className="menu-link">
													<span className="menu-icon">
														<i className="ki-duotone ki-phone fs-2">
															<span className="path1"></span>
															<span className="path2"></span>
														</i>
													</span>
													<span className="menu-title">Contacts</span>
													<span className="menu-arrow"></span>
												</span>
												{/* <!--end:Menu link--> */}
												{/* <!--begin:Menu sub--> */}
												<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/contacts/getting-started.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Getting Started</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/contacts/add-contact.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Add Contact</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/contacts/edit-contact.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Edit Contact</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/contacts/view-contact.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">View Contact</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
												</div>
												{/* <!--end:Menu sub--> */}
											</div>
											{/* <!--end:Menu item--> */}
											{/* <!--begin:Menu item--> */}
											<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
												{/* <!--begin:Menu link--> */}
												<span className="menu-link">
													<span className="menu-icon">
														<i className="ki-duotone ki-basket fs-2">
															<span className="path1"></span>
															<span className="path2"></span>
															<span className="path3"></span>
															<span className="path4"></span>
														</i>
													</span>
													<span className="menu-title">Subscriptions</span>
													<span className="menu-arrow"></span>
												</span>
												{/* <!--end:Menu link--> */}
												{/* <!--begin:Menu sub--> */}
												<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/subscriptions/getting-started.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Getting Started</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/subscriptions/list.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Subscription List</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/subscriptions/add.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Add Subscription</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/subscriptions/view.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">View Subscription</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
												</div>
												{/* <!--end:Menu sub--> */}
											</div>
											{/* <!--end:Menu item--> */}
											{/* <!--begin:Menu item--> */}
											<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
												{/* <!--begin:Menu link--> */}
												<span className="menu-link">
													<span className="menu-icon">
														<i className="ki-duotone ki-briefcase fs-2">
															<span className="path1"></span>
															<span className="path2"></span>
														</i>
													</span>
													<span className="menu-title">Customers</span>
													<span className="menu-arrow"></span>
												</span>
												{/* <!--end:Menu link--> */}
												{/* <!--begin:Menu sub--> */}
												<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/customers/getting-started.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Getting Started</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/customers/list.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Customer Listing</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/customers/view.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Customer Details</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
												</div>
												{/* <!--end:Menu sub--> */}
											</div>
											{/* <!--end:Menu item--> */}
											{/* <!--begin:Menu item--> */}
											<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
												{/* <!--begin:Menu link--> */}
												<span className="menu-link">
													<span className="menu-icon">
														<i className="ki-duotone ki-credit-cart fs-2">
															<span className="path1"></span>
															<span className="path2"></span>
														</i>
													</span>
													<span className="menu-title">Invoice Management</span>
													<span className="menu-arrow"></span>
												</span>
												{/* <!--end:Menu link--> */}
												{/* <!--begin:Menu sub--> */}
												<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
													{/* <!--begin:Menu item--> */}
													<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
														{/* <!--begin:Menu link--> */}
														<span className="menu-link">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Profile</span>
															<span className="menu-arrow"></span>
														</span>
														{/* <!--end:Menu link--> */}
														{/* <!--begin:Menu sub--> */}
														<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
															{/* <!--begin:Menu item--> */}
															<div className="menu-item">
																{/* <!--begin:Menu link--> */}
																<a className="menu-link" href="../../demo1/dist/apps/invoices/view/invoice-1.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Invoice 1</span>
																</a>
																{/* <!--end:Menu link--> */}
															</div>
															{/* <!--end:Menu item--> */}
															{/* <!--begin:Menu item--> */}
															<div className="menu-item">
																{/* <!--begin:Menu link--> */}
																<a className="menu-link" href="../../demo1/dist/apps/invoices/view/invoice-2.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Invoice 2</span>
																</a>
																{/* <!--end:Menu link--> */}
															</div>
															{/* <!--end:Menu item--> */}
															{/* <!--begin:Menu item--> */}
															<div className="menu-item">
																{/* <!--begin:Menu link--> */}
																<a className="menu-link" href="../../demo1/dist/apps/invoices/view/invoice-3.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Invoice 3</span>
																</a>
																{/* <!--end:Menu link--> */}
															</div>
															{/* <!--end:Menu item--> */}
														</div>
														{/* <!--end:Menu sub--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/invoices/create.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Create Invoice</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
												</div>
												{/* <!--end:Menu sub--> */}
											</div>
											{/* <!--end:Menu item--> */}
											{/* <!--begin:Menu item--> */}
											<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
												{/* <!--begin:Menu link--> */}
												<span className="menu-link">
													<span className="menu-icon">
														<i className="ki-duotone ki-file-added fs-2">
															<span className="path1"></span>
															<span className="path2"></span>
														</i>
													</span>
													<span className="menu-title">File Manager</span>
													<span className="menu-arrow"></span>
												</span>
												{/* <!--end:Menu link--> */}
												{/* <!--begin:Menu sub--> */}
												<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/file-manager/folders.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Folders</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/file-manager/files.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Files</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/file-manager/blank.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Blank Directory</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/file-manager/settings.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Settings</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
												</div>
												{/* <!--end:Menu sub--> */}
											</div>
											{/* <!--end:Menu item--> */}
											{/* <!--begin:Menu item--> */}
											<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
												{/* <!--begin:Menu link--> */}
												<span className="menu-link">
													<span className="menu-icon">
														<i className="ki-duotone ki-sms fs-2">
															<span className="path1"></span>
															<span className="path2"></span>
														</i>
													</span>
													<span className="menu-title">Inbox</span>
													<span className="menu-arrow"></span>
												</span>
												{/* <!--end:Menu link--> */}
												{/* <!--begin:Menu sub--> */}
												<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/inbox/listing.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Messages</span>
															<span className="menu-badge">
																<span className="badge badge-light-success">3</span>
															</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/inbox/compose.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Compose</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/inbox/reply.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">View & Reply</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
												</div>
												{/* <!--end:Menu sub--> */}
											</div>
											{/* <!--end:Menu item--> */}
											{/* <!--begin:Menu item--> */}
											<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
												{/* <!--begin:Menu link--> */}
												<span className="menu-link">
													<span className="menu-icon">
														<i className="ki-duotone ki-message-text-2 fs-2">
															<span className="path1"></span>
															<span className="path2"></span>
															<span className="path3"></span>
														</i>
													</span>
													<span className="menu-title">Chat</span>
													<span className="menu-arrow"></span>
												</span>
												{/* <!--end:Menu link--> */}
												{/* <!--begin:Menu sub--> */}
												<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/chat/private.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Private Chat</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/chat/group.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Group Chat</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/apps/chat/drawer.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Drawer Chat</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
												</div>
												{/* <!--end:Menu sub--> */}
											</div>
											{/* <!--end:Menu item--> */}
											{/* <!--begin:Menu item--> */}
											<div className="menu-item">
												{/* <!--begin:Menu link--> */}
												<a className="menu-link" href="../../demo1/dist/apps/calendar.html">
													<span className="menu-icon">
														<i className="ki-duotone ki-calendar-8 fs-2">
															<span className="path1"></span>
															<span className="path2"></span>
															<span className="path3"></span>
															<span className="path4"></span>
															<span className="path5"></span>
															<span className="path6"></span>
														</i>
													</span>
													<span className="menu-title">Calendar</span>
												</a>
												{/* <!--end:Menu link--> */}
											</div>
											{/* <!--end:Menu item--> */}
										</div>
										{/* <!--end:Menu sub--> */}
									</div>
									{/* <!--end:Menu item--> */}
									{/* <!--begin:Menu item--> */}
									<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion me-0 me-lg-2">
										{/* <!--begin:Menu link--> */}
										<span className="menu-link">
											<span className="menu-title">Layouts</span>
											<span className="menu-arrow d-lg-none"></span>
										</span>
										{/* <!--end:Menu link--> */}
										{/* <!--begin:Menu sub--> */}
										<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0 w-100 w-lg-500px">
											{/* <!--begin:Dashboards menu--> */}
											<div className="menu-state-bg pt-1 pb-3 px-3 py-lg-6 px-lg-6" data-kt-menu-dismiss="true">
												{/* <!--begin:Row--> */}
												<div className="row">
													{/* <!--begin:Col--> */}
													<div className="col-lg-5 mb-3 pt-2">
														{/* <!--begin:Menu item--> */}
														<div className="menu-item p-0 m-0">
															{/* <!--begin:Menu link--> */}
															<a href="../../demo1/dist/layouts/light-sidebar.html" className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot h-6px w-6px"></span>
																</span>
																<span className="menu-title">Light Sidebar</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item p-0 m-0">
															{/* <!--begin:Menu link--> */}
															<a href="../../demo1/dist/layouts/dark-sidebar.html" className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot h-6px w-6px"></span>
																</span>
																<span className="menu-title">Dark Sidebar</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item p-0 m-0">
															{/* <!--begin:Menu link--> */}
															<a href="../../demo1/dist/layouts/light-header.html" className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot h-6px w-6px"></span>
																</span>
																<span className="menu-title">Light Header</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item p-0 m-0">
															{/* <!--begin:Menu link--> */}
															<a href="../../demo1/dist/layouts/dark-header.html" className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot h-6px w-6px"></span>
																</span>
																<span className="menu-title">Dark Header</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
													</div>
													{/* <!--end:Col--> */}
													{/* <!--begin:Col--> */}
													<div className="col-lg-7 mb-3 pt-2 pe-lg-8">
														<img src="%PUBLIC_URL%/assets/media/stock/900x600/74.jpg" className="rounded mw-100" alt="" />
													</div>
													{/* <!--end:Col--> */}
												</div>
												{/* <!--end:Row--> */}
												<div className="separator separator-dashed mx-lg-5 my-4"></div>
												{/* <!--begin:Landing--> */}
												<div className="d-flex flex-stack flex-wrap flex-lg-nowrap gap-2 mx-lg-5">
													<div className="d-flex flex-column me-5">
														<div className="fs-6 fw-bold text-gray-800">Layout Builder</div>
														<div className="fs-7 fw-semibold text-muted">Customize, preview and export</div>
													</div>
													<a href="https://preview.keenthemes.com/keen/demo1/layout-builder.html" className="btn btn-sm btn-primary fw-bold">Try Builder</a>
												</div>
												{/* <!--end:Landing--> */}
											</div>
											{/* <!--end:Dashboards menu--> */}
										</div>
										{/* <!--end:Menu sub--> */}
									</div>
									{/* <!--end:Menu item--> */}
									{/* <!--begin:Menu item--> */}
									<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2">
										{/* <!--begin:Menu link--> */}
										<span className="menu-link">
											<span className="menu-title">Help</span>
											<span className="menu-arrow d-lg-none"></span>
										</span>
										{/* <!--end:Menu link--> */}
										{/* <!--begin:Menu sub--> */}
										<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-200px">
											{/* <!--begin:Menu item--> */}
											<div className="menu-item">
												{/* <!--begin:Menu link--> */}
												<a className="menu-link" href="https://preview.keenthemes.com/html/keen/docs/base/utilities" target="_blank" title="Check out over 200 in-house components, plugins and ready for use solutions" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
													<span className="menu-icon">
														<i className="ki-duotone ki-rocket fs-2">
															<span className="path1"></span>
															<span className="path2"></span>
														</i>
													</span>
													<span className="menu-title">Components</span>
												</a>
												{/* <!--end:Menu link--> */}
											</div>
											{/* <!--end:Menu item--> */}
											{/* <!--begin:Menu item--> */}
											<div className="menu-item">
												{/* <!--begin:Menu link--> */}
												<a className="menu-link" href="https://preview.keenthemes.com/html/keen/docs" target="_blank" title="Check out the complete documentation" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
													<span className="menu-icon">
														<i className="ki-duotone ki-abstract-26 fs-2">
															<span className="path1"></span>
															<span className="path2"></span>
														</i>
													</span>
													<span className="menu-title">Documentation</span>
												</a>
												{/* <!--end:Menu link--> */}
											</div>
											{/* <!--end:Menu item--> */}
											{/* <!--begin:Menu item--> */}
											<div className="menu-item">
												{/* <!--begin:Menu link--> */}
												<a className="menu-link" href="https://preview.keenthemes.com/html/keen/docs/getting-started/changelog" target="_blank">
													<span className="menu-icon">
														<i className="ki-duotone ki-code fs-2">
															<span className="path1"></span>
															<span className="path2"></span>
															<span className="path3"></span>
															<span className="path4"></span>
														</i>
													</span>
													<span className="menu-title">Changelog v3.0.5</span>
												</a>
												{/* <!--end:Menu link--> */}
											</div>
											{/* <!--end:Menu item--> */}
										</div>
										{/* <!--end:Menu sub--> */}
									</div>
									{/* <!--end:Menu item--> */}
								</div>
								{/* <!--end::Menu--> */}
							</div>
							{/* <!--end::Menu wrapper--> */}
							{/* <!--begin::Navbar--> */}
							<div className="app-navbar flex-shrink-0">
								{/* <!--begin::Search--> */}
								<div className="app-navbar-item align-items-stretch ms-1 ms-lg-3">
									{/* <!--begin::Search--> */}
									<div id="kt_header_search" className="header-search d-flex align-items-stretch" data-kt-search-keypress="true" data-kt-search-min-length="2" data-kt-search-enter="enter" data-kt-search-layout="menu" data-kt-menu-trigger="auto" data-kt-menu-overflow="false" data-kt-menu-permanent="true" data-kt-menu-placement="bottom-end">
										{/* <!--begin::Search toggle--> */}
										<div className="d-flex align-items-center" data-kt-search-element="toggle" id="kt_header_search_toggle">
											<div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px">
												<i className="ki-duotone ki-magnifier fs-1">
													<span className="path1"></span>
													<span className="path2"></span>
												</i>
											</div>
										</div>
										{/* <!--end::Search toggle--> */}
										{/* <!--begin::Menu--> */}
										<div data-kt-search-element="content" className="menu menu-sub menu-sub-dropdown p-7 w-325px w-md-375px">
											{/* <!--begin::Wrapper--> */}
											<div data-kt-search-element="wrapper">
												{/* <!--begin::Form--> */}
												<form data-kt-search-element="form" className="w-100 position-relative mb-3" autocomplete="off">
													{/* <!--begin::Icon--> */}
													<i className="ki-duotone ki-magnifier fs-2 text-gray-500 position-absolute top-50 translate-middle-y ms-0">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
													{/* <!--end::Icon--> */}
													{/* <!--begin::Input--> */}
													<input type="text" className="search-input form-control form-control-flush ps-10" name="search" value="" placeholder="Search..." data-kt-search-element="input" />
													{/* <!--end::Input--> */}
													{/* <!--begin::Spinner--> */}
													<span className="search-spinner position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-1" data-kt-search-element="spinner">
														<span className="spinner-border h-15px w-15px align-middle text-gray-400"></span>
													</span>
													{/* <!--end::Spinner--> */}
													{/* <!--begin::Reset--> */}
													<span className="search-reset btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none" data-kt-search-element="clear">
														<i className="ki-duotone ki-cross fs-2 fs-lg-1 me-0">
															<span className="path1"></span>
															<span className="path2"></span>
														</i>
													</span>
													{/* <!--end::Reset--> */}
													{/* <!--begin::Toolbar--> */}
													<div className="position-absolute top-50 end-0 translate-middle-y" data-kt-search-element="toolbar">
														{/* <!--begin::Preferences toggle--> */}
														<div data-kt-search-element="preferences-show" className="btn btn-icon w-20px btn-sm btn-active-color-primary me-1" data-bs-toggle="tooltip" title="Show search preferences">
															<i className="ki-duotone ki-setting-2 fs-2">
																<span className="path1"></span>
																<span className="path2"></span>
															</i>
														</div>
														{/* <!--end::Preferences toggle--> */}
														{/* <!--begin::Advanced search toggle--> */}
														<div data-kt-search-element="advanced-options-form-show" className="btn btn-icon w-20px btn-sm btn-active-color-primary" data-bs-toggle="tooltip" title="Show more search options">
															<i className="ki-duotone ki-down fs-2"></i>
														</div>
														{/* <!--end::Advanced search toggle--> */}
													</div>
													{/* <!--end::Toolbar--> */}
												</form>
												{/* <!--end::Form--> */}
												{/* <!--begin::Separator--> */}
												<div className="separator border-gray-200 mb-6"></div>
												{/* <!--end::Separator--> */}
												{/* <!--begin::Recently viewed--> */}
												<div data-kt-search-element="results" className="d-none">
													{/* <!--begin::Items--> */}
													<div className="scroll-y mh-200px mh-lg-350px">
														{/* <!--begin::Category title--> */}
														<h3 className="fs-5 text-muted m-0 pb-5" data-kt-search-element="category-title">Users</h3>
														{/* <!--end::Category title--> */}
														{/* <!--begin::Item--> */}
														<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
															{/* <!--begin::Symbol--> */}
															<div className="symbol symbol-40px me-4">
																<img src="%PUBLIC_URL%/assets/media/avatars/300-6.jpg" alt="" />
															</div>
															{/* <!--end::Symbol--> */}
															{/* <!--begin::Title--> */}
															<div className="d-flex flex-column justify-content-start fw-semibold">
																<span className="fs-6 fw-semibold">Karina Clark</span>
																<span className="fs-7 fw-semibold text-muted">Marketing Manager</span>
															</div>
															{/* <!--end::Title--> */}
														</a>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
															{/* <!--begin::Symbol--> */}
															<div className="symbol symbol-40px me-4">
																<img src="%PUBLIC_URL%/assets/media/avatars/300-2.jpg" alt="" />
															</div>
															{/* <!--end::Symbol--> */}
															{/* <!--begin::Title--> */}
															<div className="d-flex flex-column justify-content-start fw-semibold">
																<span className="fs-6 fw-semibold">Olivia Bold</span>
																<span className="fs-7 fw-semibold text-muted">Software Engineer</span>
															</div>
															{/* <!--end::Title--> */}
														</a>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
															{/* <!--begin::Symbol--> */}
															<div className="symbol symbol-40px me-4">
																<img src="%PUBLIC_URL%/assets/media/avatars/300-9.jpg" alt="" />
															</div>
															{/* <!--end::Symbol--> */}
															{/* <!--begin::Title--> */}
															<div className="d-flex flex-column justify-content-start fw-semibold">
																<span className="fs-6 fw-semibold">Ana Clark</span>
																<span className="fs-7 fw-semibold text-muted">UI/UX Designer</span>
															</div>
															{/* <!--end::Title--> */}
														</a>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
															{/* <!--begin::Symbol--> */}
															<div className="symbol symbol-40px me-4">
																<img src="%PUBLIC_URL%/assets/media/avatars/300-14.jpg" alt="" />
															</div>
															{/* <!--end::Symbol--> */}
															{/* <!--begin::Title--> */}
															<div className="d-flex flex-column justify-content-start fw-semibold">
																<span className="fs-6 fw-semibold">Nick Pitola</span>
																<span className="fs-7 fw-semibold text-muted">Art Director</span>
															</div>
															{/* <!--end::Title--> */}
														</a>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
															{/* <!--begin::Symbol--> */}
															<div className="symbol symbol-40px me-4">
																<img src="%PUBLIC_URL%/assets/media/avatars/300-11.jpg" alt="" />
															</div>
															{/* <!--end::Symbol--> */}
															{/* <!--begin::Title--> */}
															<div className="d-flex flex-column justify-content-start fw-semibold">
																<span className="fs-6 fw-semibold">Edward Kulnic</span>
																<span className="fs-7 fw-semibold text-muted">System Administrator</span>
															</div>
															{/* <!--end::Title--> */}
														</a>
														{/* <!--end::Item--> */}
														{/* <!--begin::Category title--> */}
														<h3 className="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">Customers</h3>
														{/* <!--end::Category title--> */}
														{/* <!--begin::Item--> */}
														<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
															{/* <!--begin::Symbol--> */}
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<img className="w-20px h-20px" src="%PUBLIC_URL%/assets/media/svg/brand-logos/volicity-9.svg" alt="" />
																</span>
															</div>
															{/* <!--end::Symbol--> */}
															{/* <!--begin::Title--> */}
															<div className="d-flex flex-column justify-content-start fw-semibold">
																<span className="fs-6 fw-semibold">Company Rbranding</span>
																<span className="fs-7 fw-semibold text-muted">UI Design</span>
															</div>
															{/* <!--end::Title--> */}
														</a>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
															{/* <!--begin::Symbol--> */}
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<img className="w-20px h-20px" src="%PUBLIC_URL%/assets/media/svg/brand-logos/tvit.svg" alt="" />
																</span>
															</div>
															{/* <!--end::Symbol--> */}
															{/* <!--begin::Title--> */}
															<div className="d-flex flex-column justify-content-start fw-semibold">
																<span className="fs-6 fw-semibold">Company Re-branding</span>
																<span className="fs-7 fw-semibold text-muted">Web Development</span>
															</div>
															{/* <!--end::Title--> */}
														</a>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
															{/* <!--begin::Symbol--> */}
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<img className="w-20px h-20px" src="%PUBLIC_URL%/assets/media/svg/misc/infography.svg" alt="" />
																</span>
															</div>
															{/* <!--end::Symbol--> */}
															{/* <!--begin::Title--> */}
															<div className="d-flex flex-column justify-content-start fw-semibold">
																<span className="fs-6 fw-semibold">Business Analytics App</span>
																<span className="fs-7 fw-semibold text-muted">Administration</span>
															</div>
															{/* <!--end::Title--> */}
														</a>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
															{/* <!--begin::Symbol--> */}
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<img className="w-20px h-20px" src="%PUBLIC_URL%/assets/media/svg/brand-logos/leaf.svg" alt="" />
																</span>
															</div>
															{/* <!--end::Symbol--> */}
															{/* <!--begin::Title--> */}
															<div className="d-flex flex-column justify-content-start fw-semibold">
																<span className="fs-6 fw-semibold">EcoLeaf App Launch</span>
																<span className="fs-7 fw-semibold text-muted">Marketing</span>
															</div>
															{/* <!--end::Title--> */}
														</a>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
															{/* <!--begin::Symbol--> */}
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<img className="w-20px h-20px" src="%PUBLIC_URL%/assets/media/svg/brand-logos/tower.svg" alt="" />
																</span>
															</div>
															{/* <!--end::Symbol--> */}
															{/* <!--begin::Title--> */}
															<div className="d-flex flex-column justify-content-start fw-semibold">
																<span className="fs-6 fw-semibold">Tower Group Website</span>
																<span className="fs-7 fw-semibold text-muted">Google Adwords</span>
															</div>
															{/* <!--end::Title--> */}
														</a>
														{/* <!--end::Item--> */}
														{/* <!--begin::Category title--> */}
														<h3 className="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">Projects</h3>
														{/* <!--end::Category title--> */}
														{/* <!--begin::Item--> */}
														<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
															{/* <!--begin::Symbol--> */}
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-duotone ki-notepad fs-2 text-primary">
																		<span className="path1"></span>
																		<span className="path2"></span>
																		<span className="path3"></span>
																		<span className="path4"></span>
																		<span className="path5"></span>
																	</i>
																</span>
															</div>
															{/* <!--end::Symbol--> */}
															{/* <!--begin::Title--> */}
															<div className="d-flex flex-column">
																<span className="fs-6 fw-semibold">Si-Fi Project by AU Themes</span>
																<span className="fs-7 fw-semibold text-muted">#45670</span>
															</div>
															{/* <!--end::Title--> */}
														</a>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
															{/* <!--begin::Symbol--> */}
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-duotone ki-frame fs-2 text-primary">
																		<span className="path1"></span>
																		<span className="path2"></span>
																		<span className="path3"></span>
																		<span className="path4"></span>
																	</i>
																</span>
															</div>
															{/* <!--end::Symbol--> */}
															{/* <!--begin::Title--> */}
															<div className="d-flex flex-column">
																<span className="fs-6 fw-semibold">Shopix Mobile App Planning</span>
																<span className="fs-7 fw-semibold text-muted">#45690</span>
															</div>
															{/* <!--end::Title--> */}
														</a>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
															{/* <!--begin::Symbol--> */}
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-duotone ki-message-text-2 fs-2 text-primary">
																		<span className="path1"></span>
																		<span className="path2"></span>
																		<span className="path3"></span>
																	</i>
																</span>
															</div>
															{/* <!--end::Symbol--> */}
															{/* <!--begin::Title--> */}
															<div className="d-flex flex-column">
																<span className="fs-6 fw-semibold">Finance Monitoring SAAS Discussion</span>
																<span className="fs-7 fw-semibold text-muted">#21090</span>
															</div>
															{/* <!--end::Title--> */}
														</a>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
															{/* <!--begin::Symbol--> */}
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-duotone ki-profile-circle fs-2 text-primary">
																		<span className="path1"></span>
																		<span className="path2"></span>
																		<span className="path3"></span>
																	</i>
																</span>
															</div>
															{/* <!--end::Symbol--> */}
															{/* <!--begin::Title--> */}
															<div className="d-flex flex-column">
																<span className="fs-6 fw-semibold">Dashboard Analitics Launch</span>
																<span className="fs-7 fw-semibold text-muted">#34560</span>
															</div>
															{/* <!--end::Title--> */}
														</a>
														{/* <!--end::Item--> */}
													</div>
													{/* <!--end::Items--> */}
												</div>
												{/* <!--end::Recently viewed--> */}
												{/* <!--begin::Recently viewed--> */}
												<div className="mb-5" data-kt-search-element="main">
													{/* <!--begin::Heading--> */}
													<div className="d-flex flex-stack fw-semibold mb-4">
														{/* <!--begin::Label--> */}
														<span className="text-muted fs-6 me-2">Recently Searched:</span>
														{/* <!--end::Label--> */}
													</div>
													{/* <!--end::Heading--> */}
													{/* <!--begin::Items--> */}
													<div className="scroll-y mh-200px mh-lg-325px">
														{/* <!--begin::Item--> */}
														<div className="d-flex align-items-center mb-5">
															{/* <!--begin::Symbol--> */}
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-duotone ki-laptop fs-2 text-primary">
																		<span className="path1"></span>
																		<span className="path2"></span>
																	</i>
																</span>
															</div>
															{/* <!--end::Symbol--> */}
															{/* <!--begin::Title--> */}
															<div className="d-flex flex-column">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">BoomApp by Keenthemes</a>
																<span className="fs-7 text-muted fw-semibold">#45789</span>
															</div>
															{/* <!--end::Title--> */}
														</div>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<div className="d-flex align-items-center mb-5">
															{/* <!--begin::Symbol--> */}
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-duotone ki-chart-simple fs-2 text-primary">
																		<span className="path1"></span>
																		<span className="path2"></span>
																		<span className="path3"></span>
																		<span className="path4"></span>
																	</i>
																</span>
															</div>
															{/* <!--end::Symbol--> */}
															{/* <!--begin::Title--> */}
															<div className="d-flex flex-column">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"Kept API Project Meeting</a>
																<span className="fs-7 text-muted fw-semibold">#84050</span>
															</div>
															{/* <!--end::Title--> */}
														</div>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<div className="d-flex align-items-center mb-5">
															{/* <!--begin::Symbol--> */}
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-duotone ki-chart fs-2 text-primary">
																		<span className="path1"></span>
																		<span className="path2"></span>
																	</i>
																</span>
															</div>
															{/* <!--end::Symbol--> */}
															{/* <!--begin::Title--> */}
															<div className="d-flex flex-column">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"KPI Monitoring App Launch</a>
																<span className="fs-7 text-muted fw-semibold">#84250</span>
															</div>
															{/* <!--end::Title--> */}
														</div>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<div className="d-flex align-items-center mb-5">
															{/* <!--begin::Symbol--> */}
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-duotone ki-chart-line-down fs-2 text-primary">
																		<span className="path1"></span>
																		<span className="path2"></span>
																	</i>
																</span>
															</div>
															{/* <!--end::Symbol--> */}
															{/* <!--begin::Title--> */}
															<div className="d-flex flex-column">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">Project Reference FAQ</a>
																<span className="fs-7 text-muted fw-semibold">#67945</span>
															</div>
															{/* <!--end::Title--> */}
														</div>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<div className="d-flex align-items-center mb-5">
															{/* <!--begin::Symbol--> */}
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-duotone ki-sms fs-2 text-primary">
																		<span className="path1"></span>
																		<span className="path2"></span>
																	</i>
																</span>
															</div>
															{/* <!--end::Symbol--> */}
															{/* <!--begin::Title--> */}
															<div className="d-flex flex-column">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"FitPro App Development</a>
																<span className="fs-7 text-muted fw-semibold">#84250</span>
															</div>
															{/* <!--end::Title--> */}
														</div>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<div className="d-flex align-items-center mb-5">
															{/* <!--begin::Symbol--> */}
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-duotone ki-bank fs-2 text-primary">
																		<span className="path1"></span>
																		<span className="path2"></span>
																	</i>
																</span>
															</div>
															{/* <!--end::Symbol--> */}
															{/* <!--begin::Title--> */}
															<div className="d-flex flex-column">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">Shopix Mobile App</a>
																<span className="fs-7 text-muted fw-semibold">#45690</span>
															</div>
															{/* <!--end::Title--> */}
														</div>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<div className="d-flex align-items-center mb-5">
															{/* <!--begin::Symbol--> */}
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-duotone ki-chart-line-down fs-2 text-primary">
																		<span className="path1"></span>
																		<span className="path2"></span>
																	</i>
																</span>
															</div>
															{/* <!--end::Symbol--> */}
															{/* <!--begin::Title--> */}
															<div className="d-flex flex-column">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"Landing UI Design" Launch</a>
																<span className="fs-7 text-muted fw-semibold">#24005</span>
															</div>
															{/* <!--end::Title--> */}
														</div>
														{/* <!--end::Item--> */}
													</div>
													{/* <!--end::Items--> */}
												</div>
												{/* <!--end::Recently viewed--> */}
												{/* <!--begin::Empty--> */}
												<div data-kt-search-element="empty" className="text-center d-none">
													{/* <!--begin::Icon--> */}
													<div className="pt-10 pb-10">
														<i className="ki-duotone ki-search-list fs-4x opacity-50">
															<span className="path1"></span>
															<span className="path2"></span>
															<span className="path3"></span>
														</i>
													</div>
													{/* <!--end::Icon--> */}
													{/* <!--begin::Message--> */}
													<div className="pb-15 fw-semibold">
														<h3 className="text-gray-600 fs-5 mb-2">No result found</h3>
														<div className="text-muted fs-7">Please try again with a different query</div>
													</div>
													{/* <!--end::Message--> */}
												</div>
												{/* <!--end::Empty--> */}
											</div>
											{/* <!--end::Wrapper--> */}
											{/* <!--begin::Preferences--> */}
											<form data-kt-search-element="advanced-options-form" className="pt-1 d-none">
												{/* <!--begin::Heading--> */}
												<h3 className="fw-semibold text-dark mb-7">Advanced Search</h3>
												{/* <!--end::Heading--> */}
												{/* <!--begin::Input group--> */}
												<div className="mb-5">
													<input type="text" className="form-control form-control-sm form-control-solid" placeholder="Contains the word" name="query" />
												</div>
												{/* <!--end::Input group--> */}
												{/* <!--begin::Input group--> */}
												<div className="mb-5">
													{/* <!--begin::Radio group--> */}
													<div className="nav-group nav-group-fluid">
														{/* <!--begin::Option--> */}
														<label>
															<input type="radio" className="btn-check" name="type" value="has" checked="checked" />
															<span className="btn btn-sm btn-color-muted btn-active btn-active-primary">All</span>
														</label>
														{/* <!--end::Option--> */}
														{/* <!--begin::Option--> */}
														<label>
															<input type="radio" className="btn-check" name="type" value="users" />
															<span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Users</span>
														</label>
														{/* <!--end::Option--> */}
														{/* <!--begin::Option--> */}
														<label>
															<input type="radio" className="btn-check" name="type" value="orders" />
															<span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Orders</span>
														</label>
														{/* <!--end::Option--> */}
														{/* <!--begin::Option--> */}
														<label>
															<input type="radio" className="btn-check" name="type" value="projects" />
															<span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Projects</span>
														</label>
														{/* <!--end::Option--> */}
													</div>
													{/* <!--end::Radio group--> */}
												</div>
												{/* <!--end::Input group--> */}
												{/* <!--begin::Input group--> */}
												<div className="mb-5">
													<input type="text" name="assignedto" className="form-control form-control-sm form-control-solid" placeholder="Assigned to" value="" />
												</div>
												{/* <!--end::Input group--> */}
												{/* <!--begin::Input group--> */}
												<div className="mb-5">
													<input type="text" name="collaborators" className="form-control form-control-sm form-control-solid" placeholder="Collaborators" value="" />
												</div>
												{/* <!--end::Input group--> */}
												{/* <!--begin::Input group--> */}
												<div className="mb-5">
													{/* <!--begin::Radio group--> */}
													<div className="nav-group nav-group-fluid">
														{/* <!--begin::Option--> */}
														<label>
															<input type="radio" className="btn-check" name="attachment" value="has" checked="checked" />
															<span className="btn btn-sm btn-color-muted btn-active btn-active-primary">Has attachment</span>
														</label>
														{/* <!--end::Option--> */}
														{/* <!--begin::Option--> */}
														<label>
															<input type="radio" className="btn-check" name="attachment" value="any" />
															<span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Any</span>
														</label>
														{/* <!--end::Option--> */}
													</div>
													{/* <!--end::Radio group--> */}
												</div>
												{/* <!--end::Input group--> */}
												{/* <!--begin::Input group--> */}
												<div className="mb-5">
													<select name="timezone" aria-label="Select a Timezone" data-control="select2" data-dropdown-parent="#kt_header_search" data-placeholder="date_period" className="form-select form-select-sm form-select-solid">
														<option value="next">Within the next</option>
														<option value="last">Within the last</option>
														<option value="between">Between</option>
														<option value="on">On</option>
													</select>
												</div>
												{/* <!--end::Input group--> */}
												{/* <!--begin::Input group--> */}
												<div className="row mb-8">
													{/* <!--begin::Col--> */}
													<div className="col-6">
														<input type="number" name="date_number" className="form-control form-control-sm form-control-solid" placeholder="Lenght" value="" />
													</div>
													{/* <!--end::Col--> */}
													{/* <!--begin::Col--> */}
													<div className="col-6">
														<select name="date_typer" aria-label="Select a Timezone" data-control="select2" data-dropdown-parent="#kt_header_search" data-placeholder="Period" className="form-select form-select-sm form-select-solid">
															<option value="days">Days</option>
															<option value="weeks">Weeks</option>
															<option value="months">Months</option>
															<option value="years">Years</option>
														</select>
													</div>
													{/* <!--end::Col--> */}
												</div>
												{/* <!--end::Input group--> */}
												{/* <!--begin::Actions--> */}
												<div className="d-flex justify-content-end">
													<button type="reset" className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2" data-kt-search-element="advanced-options-form-cancel">Cancel</button>
													<a href="../../demo1/dist/pages/search/horizontal.html" className="btn btn-sm fw-bold btn-primary" data-kt-search-element="advanced-options-form-search">Search</a>
												</div>
												{/* <!--end::Actions--> */}
											</form>
											{/* <!--end::Preferences--> */}
											{/* <!--begin::Preferences--> */}
											<form data-kt-search-element="preferences" className="pt-1 d-none">
												{/* <!--begin::Heading--> */}
												<h3 className="fw-semibold text-dark mb-7">Search Preferences</h3>
												{/* <!--end::Heading--> */}
												{/* <!--begin::Input group--> */}
												<div className="pb-4 border-bottom">
													<label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
														<span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Projects</span>
														<input className="form-check-input" type="checkbox" value="1" checked="checked" />
													</label>
												</div>
												{/* <!--end::Input group--> */}
												{/* <!--begin::Input group--> */}
												<div className="py-4 border-bottom">
													<label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
														<span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Targets</span>
														<input className="form-check-input" type="checkbox" value="1" checked="checked" />
													</label>
												</div>
												{/* <!--end::Input group--> */}
												{/* <!--begin::Input group--> */}
												<div className="py-4 border-bottom">
													<label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
														<span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Affiliate Programs</span>
														<input className="form-check-input" type="checkbox" value="1" />
													</label>
												</div>
												{/* <!--end::Input group--> */}
												{/* <!--begin::Input group--> */}
												<div className="py-4 border-bottom">
													<label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
														<span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Referrals</span>
														<input className="form-check-input" type="checkbox" value="1" checked="checked" />
													</label>
												</div>
												{/* <!--end::Input group--> */}
												{/* <!--begin::Input group--> */}
												<div className="py-4 border-bottom">
													<label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
														<span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Users</span>
														<input className="form-check-input" type="checkbox" value="1" />
													</label>
												</div>
												{/* <!--end::Input group--> */}
												{/* <!--begin::Actions--> */}
												<div className="d-flex justify-content-end pt-7">
													<button type="reset" className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2" data-kt-search-element="preferences-dismiss">Cancel</button>
													<button type="submit" className="btn btn-sm fw-bold btn-primary">Save Changes</button>
												</div>
												{/* <!--end::Actions--> */}
											</form>
											{/* <!--end::Preferences--> */}
										</div>
										{/* <!--end::Menu--> */}
									</div>
									{/* <!--end::Search--> */}
								</div>
								{/* <!--end::Search--> */}
								{/* <!--begin::Activities--> */}
								<div className="app-navbar-item ms-1 ms-lg-3">
									{/* <!--begin::Drawer toggle--> */}
									<div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px" id="kt_activities_toggle">
										<i className="ki-duotone ki-notification-on fs-1">
											<span className="path1"></span>
											<span className="path2"></span>
											<span className="path3"></span>
											<span className="path4"></span>
											<span className="path5"></span>
										</i>
									</div>
									{/* <!--end::Drawer toggle--> */}
								</div>
								{/* <!--end::Activities--> */}
								{/* <!--begin::Notifications--> */}
								<div className="app-navbar-item ms-1 ms-lg-3">
									{/* <!--begin::Menu- wrapper--> */}
									<div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
										<i className="ki-duotone ki-notification-status fs-1">
											<span className="path1"></span>
											<span className="path2"></span>
											<span className="path3"></span>
											<span className="path4"></span>
										</i>
									</div>
									{/* <!--begin::Menu--> */}
									<div className="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px" data-kt-menu="true" id="kt_menu_notifications">
										{/* <!--begin::Heading--> */}
										<div className="d-flex flex-column bgi-no-repeat rounded-top s1" >
											{/* <!--begin::Title--> */}
											<h3 className="text-white fw-semibold px-9 mt-10 mb-6">Notifications
											<span className="fs-8 opacity-75 ps-3">24 reports</span></h3>
											{/* <!--end::Title--> */}
											{/* <!--begin::Tabs--> */}
											<ul className="nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-semibold px-9">
												<li className="nav-item">
													<a className="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_1">Alerts</a>
												</li>
												<li className="nav-item">
													<a className="nav-link text-white opacity-75 opacity-state-100 pb-4 active" data-bs-toggle="tab" href="#kt_topbar_notifications_2">Updates</a>
												</li>
												<li className="nav-item">
													<a className="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_3">Logs</a>
												</li>
											</ul>
											{/* <!--end::Tabs--> */}
										</div>
										{/* <!--end::Heading--> */}
										{/* <!--begin::Tab content--> */}
										<div className="tab-content">
											{/* <!--begin::Tab panel--> */}
											<div className="tab-pane fade" id="kt_topbar_notifications_1" role="tabpanel">
												{/* <!--begin::Items--> */}
												<div className="scroll-y mh-325px my-5 px-8">
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack py-4">
														{/* <!--begin::Section--> */}
														<div className="d-flex align-items-center">
															{/* <!--begin::Symbol--> */}
															<div className="symbol symbol-35px me-4">
																<span className="symbol-label bg-light-primary">
																	<i className="ki-duotone ki-abstract-28 fs-2 text-primary">
																		<span className="path1"></span>
																		<span className="path2"></span>
																	</i>
																</span>
															</div>
															{/* <!--end::Symbol--> */}
															{/* <!--begin::Title--> */}
															<div className="mb-0 me-2">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Alice</a>
																<div className="text-gray-400 fs-7">Phase 1 development</div>
															</div>
															{/* <!--end::Title--> */}
														</div>
														{/* <!--end::Section--> */}
														{/* <!--begin::Label--> */}
														<span className="badge badge-light fs-8">1 hr</span>
														{/* <!--end::Label--> */}
													</div>
													{/* <!--end::Item--> */}
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack py-4">
														{/* <!--begin::Section--> */}
														<div className="d-flex align-items-center">
															{/* <!--begin::Symbol--> */}
															<div className="symbol symbol-35px me-4">
																<span className="symbol-label bg-light-danger">
																	<i className="ki-duotone ki-information fs-2 text-danger">
																		<span className="path1"></span>
																		<span className="path2"></span>
																		<span className="path3"></span>
																	</i>
																</span>
															</div>
															{/* <!--end::Symbol--> */}
															{/* <!--begin::Title--> */}
															<div className="mb-0 me-2">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">HR Confidential</a>
																<div className="text-gray-400 fs-7">Confidential staff documents</div>
															</div>
															{/* <!--end::Title--> */}
														</div>
														{/* <!--end::Section--> */}
														{/* <!--begin::Label--> */}
														<span className="badge badge-light fs-8">2 hrs</span>
														{/* <!--end::Label--> */}
													</div>
													{/* <!--end::Item--> */}
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack py-4">
														{/* <!--begin::Section--> */}
														<div className="d-flex align-items-center">
															{/* <!--begin::Symbol--> */}
															<div className="symbol symbol-35px me-4">
																<span className="symbol-label bg-light-warning">
																	<i className="ki-duotone ki-briefcase fs-2 text-warning">
																		<span className="path1"></span>
																		<span className="path2"></span>
																	</i>
																</span>
															</div>
															{/* <!--end::Symbol--> */}
															{/* <!--begin::Title--> */}
															<div className="mb-0 me-2">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Company HR</a>
																<div className="text-gray-400 fs-7">Corporeate staff profiles</div>
															</div>
															{/* <!--end::Title--> */}
														</div>
														{/* <!--end::Section--> */}
														{/* <!--begin::Label--> */}
														<span className="badge badge-light fs-8">5 hrs</span>
														{/* <!--end::Label--> */}
													</div>
													{/* <!--end::Item--> */}
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack py-4">
														{/* <!--begin::Section--> */}
														<div className="d-flex align-items-center">
															{/* <!--begin::Symbol--> */}
															<div className="symbol symbol-35px me-4">
																<span className="symbol-label bg-light-success">
																	<i className="ki-duotone ki-abstract-12 fs-2 text-success">
																		<span className="path1"></span>
																		<span className="path2"></span>
																	</i>
																</span>
															</div>
															{/* <!--end::Symbol--> */}
															{/* <!--begin::Title--> */}
															<div className="mb-0 me-2">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Redux</a>
																<div className="text-gray-400 fs-7">New frontend admin theme</div>
															</div>
															{/* <!--end::Title--> */}
														</div>
														{/* <!--end::Section--> */}
														{/* <!--begin::Label--> */}
														<span className="badge badge-light fs-8">2 days</span>
														{/* <!--end::Label--> */}
													</div>
													{/* <!--end::Item--> */}
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack py-4">
														{/* <!--begin::Section--> */}
														<div className="d-flex align-items-center">
															{/* <!--begin::Symbol--> */}
															<div className="symbol symbol-35px me-4">
																<span className="symbol-label bg-light-primary">
																	<i className="ki-duotone ki-colors-square fs-2 text-primary">
																		<span className="path1"></span>
																		<span className="path2"></span>
																		<span className="path3"></span>
																		<span className="path4"></span>
																	</i>
																</span>
															</div>
															{/* <!--end::Symbol--> */}
															{/* <!--begin::Title--> */}
															<div className="mb-0 me-2">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Breafing</a>
																<div className="text-gray-400 fs-7">Product launch status update</div>
															</div>
															{/* <!--end::Title--> */}
														</div>
														{/* <!--end::Section--> */}
														{/* <!--begin::Label--> */}
														<span className="badge badge-light fs-8">21 Jan</span>
														{/* <!--end::Label--> */}
													</div>
													{/* <!--end::Item--> */}
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack py-4">
														{/* <!--begin::Section--> */}
														<div className="d-flex align-items-center">
															{/* <!--begin::Symbol--> */}
															<div className="symbol symbol-35px me-4">
																<span className="symbol-label bg-light-info">
																	<i className="ki-duotone ki-picture fs-2 text-info"></i>
																</span>
															</div>
															{/* <!--end::Symbol--> */}
															{/* <!--begin::Title--> */}
															<div className="mb-0 me-2">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Banner Assets</a>
																<div className="text-gray-400 fs-7">Collection of banner images</div>
															</div>
															{/* <!--end::Title--> */}
														</div>
														{/* <!--end::Section--> */}
														{/* <!--begin::Label--> */}
														<span className="badge badge-light fs-8">21 Jan</span>
														{/* <!--end::Label--> */}
													</div>
													{/* <!--end::Item--> */}
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack py-4">
														{/* <!--begin::Section--> */}
														<div className="d-flex align-items-center">
															{/* <!--begin::Symbol--> */}
															<div className="symbol symbol-35px me-4">
																<span className="symbol-label bg-light-warning">
																	<i className="ki-duotone ki-color-swatch fs-2 text-warning">
																		<span className="path1"></span>
																		<span className="path2"></span>
																		<span className="path3"></span>
																		<span className="path4"></span>
																		<span className="path5"></span>
																		<span className="path6"></span>
																		<span className="path7"></span>
																		<span className="path8"></span>
																		<span className="path9"></span>
																		<span className="path10"></span>
																		<span className="path11"></span>
																		<span className="path12"></span>
																		<span className="path13"></span>
																		<span className="path14"></span>
																		<span className="path15"></span>
																		<span className="path16"></span>
																		<span className="path17"></span>
																		<span className="path18"></span>
																		<span className="path19"></span>
																		<span className="path20"></span>
																		<span className="path21"></span>
																	</i>
																</span>
															</div>
															{/* <!--end::Symbol--> */}
															{/* <!--begin::Title--> */}
															<div className="mb-0 me-2">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Icon Assets</a>
																<div className="text-gray-400 fs-7">Collection of SVG icons</div>
															</div>
															{/* <!--end::Title--> */}
														</div>
														{/* <!--end::Section--> */}
														{/* <!--begin::Label--> */}
														<span className="badge badge-light fs-8">20 March</span>
														{/* <!--end::Label--> */}
													</div>
													{/* <!--end::Item--> */}
												</div>
												{/* <!--end::Items--> */}
												{/* <!--begin::View more--> */}
												<div className="py-3 text-center border-top">
													<a href="../../demo1/dist/pages/user-profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">View All
													<i className="ki-duotone ki-arrow-right fs-5">
														<span className="path1"></span>
														<span className="path2"></span>
													</i></a>
												</div>
												{/* <!--end::View more--> */}
											</div>
											{/* <!--end::Tab panel--> */}
											{/* <!--begin::Tab panel--> */}
											<div className="tab-pane fade show active" id="kt_topbar_notifications_2" role="tabpanel">
												{/* <!--begin::Wrapper--> */}
												<div className="d-flex flex-column px-9">
													{/* <!--begin::Section--> */}
													<div className="pt-10 pb-0">
														{/* <!--begin::Title--> */}
														<h3 className="text-dark text-center fw-bold">Get Pro Access</h3>
														{/* <!--end::Title--> */}
														{/* <!--begin::Text--> */}
														<div className="text-center text-gray-600 fw-semibold pt-1">Outlines keep you honest. They stoping you from amazing poorly about drive</div>
														{/* <!--end::Text--> */}
														{/* <!--begin::Action--> */}
														<div className="text-center mt-5 mb-9">
															<a href="#" className="btn btn-sm btn-primary px-6" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">Upgrade</a>
														</div>
														{/* <!--end::Action--> */}
													</div>
													{/* <!--end::Section--> */}
													{/* <!--begin::Illustration--> */}
													<div className="text-center px-4">
														<img className="mw-100 mh-200px" alt="image" src="%PUBLIC_URL%/assets/media/illustrations/sketchy-1/1.png" />
													</div>
													{/* <!--end::Illustration--> */}
												</div>
												{/* <!--end::Wrapper--> */}
											</div>
											{/* <!--end::Tab panel--> */}
											{/* <!--begin::Tab panel--> */}
											<div className="tab-pane fade" id="kt_topbar_notifications_3" role="tabpanel">
												{/* <!--begin::Items--> */}
												<div className="scroll-y mh-325px my-5 px-8">
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack py-4">
														{/* <!--begin::Section--> */}
														<div className="d-flex align-items-center me-2">
															{/* <!--begin::Code--> */}
															<span className="w-70px badge badge-light-success me-4">200 OK</span>
															{/* <!--end::Code--> */}
															{/* <!--begin::Title--> */}
															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">New order</a>
															{/* <!--end::Title--> */}
														</div>
														{/* <!--end::Section--> */}
														{/* <!--begin::Label--> */}
														<span className="badge badge-light fs-8">Just now</span>
														{/* <!--end::Label--> */}
													</div>
													{/* <!--end::Item--> */}
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack py-4">
														{/* <!--begin::Section--> */}
														<div className="d-flex align-items-center me-2">
															{/* <!--begin::Code--> */}
															<span className="w-70px badge badge-light-danger me-4">500 ERR</span>
															{/* <!--end::Code--> */}
															{/* <!--begin::Title--> */}
															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">New customer</a>
															{/* <!--end::Title--> */}
														</div>
														{/* <!--end::Section--> */}
														{/* <!--begin::Label--> */}
														<span className="badge badge-light fs-8">2 hrs</span>
														{/* <!--end::Label--> */}
													</div>
													{/* <!--end::Item--> */}
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack py-4">
														{/* <!--begin::Section--> */}
														<div className="d-flex align-items-center me-2">
															{/* <!--begin::Code--> */}
															<span className="w-70px badge badge-light-success me-4">200 OK</span>
															{/* <!--end::Code--> */}
															{/* <!--begin::Title--> */}
															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Payment process</a>
															{/* <!--end::Title--> */}
														</div>
														{/* <!--end::Section--> */}
														{/* <!--begin::Label--> */}
														<span className="badge badge-light fs-8">5 hrs</span>
														{/* <!--end::Label--> */}
													</div>
													{/* <!--end::Item--> */}
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack py-4">
														{/* <!--begin::Section--> */}
														<div className="d-flex align-items-center me-2">
															{/* <!--begin::Code--> */}
															<span className="w-70px badge badge-light-warning me-4">300 WRN</span>
															{/* <!--end::Code--> */}
															{/* <!--begin::Title--> */}
															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Search query</a>
															{/* <!--end::Title--> */}
														</div>
														{/* <!--end::Section--> */}
														{/* <!--begin::Label--> */}
														<span className="badge badge-light fs-8">2 days</span>
														{/* <!--end::Label--> */}
													</div>
													{/* <!--end::Item--> */}
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack py-4">
														{/* <!--begin::Section--> */}
														<div className="d-flex align-items-center me-2">
															{/* <!--begin::Code--> */}
															<span className="w-70px badge badge-light-success me-4">200 OK</span>
															{/* <!--end::Code--> */}
															{/* <!--begin::Title--> */}
															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">API connection</a>
															{/* <!--end::Title--> */}
														</div>
														{/* <!--end::Section--> */}
														{/* <!--begin::Label--> */}
														<span className="badge badge-light fs-8">1 week</span>
														{/* <!--end::Label--> */}
													</div>
													{/* <!--end::Item--> */}
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack py-4">
														{/* <!--begin::Section--> */}
														<div className="d-flex align-items-center me-2">
															{/* <!--begin::Code--> */}
															<span className="w-70px badge badge-light-success me-4">200 OK</span>
															{/* <!--end::Code--> */}
															{/* <!--begin::Title--> */}
															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Database restore</a>
															{/* <!--end::Title--> */}
														</div>
														{/* <!--end::Section--> */}
														{/* <!--begin::Label--> */}
														<span className="badge badge-light fs-8">Mar 5</span>
														{/* <!--end::Label--> */}
													</div>
													{/* <!--end::Item--> */}
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack py-4">
														{/* <!--begin::Section--> */}
														<div className="d-flex align-items-center me-2">
															{/* <!--begin::Code--> */}
															<span className="w-70px badge badge-light-warning me-4">300 WRN</span>
															{/* <!--end::Code--> */}
															{/* <!--begin::Title--> */}
															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">System update</a>
															{/* <!--end::Title--> */}
														</div>
														{/* <!--end::Section--> */}
														{/* <!--begin::Label--> */}
														<span className="badge badge-light fs-8">May 15</span>
														{/* <!--end::Label--> */}
													</div>
													{/* <!--end::Item--> */}
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack py-4">
														{/* <!--begin::Section--> */}
														<div className="d-flex align-items-center me-2">
															{/* <!--begin::Code--> */}
															<span className="w-70px badge badge-light-warning me-4">300 WRN</span>
															{/* <!--end::Code--> */}
															{/* <!--begin::Title--> */}
															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Server OS update</a>
															{/* <!--end::Title--> */}
														</div>
														{/* <!--end::Section--> */}
														{/* <!--begin::Label--> */}
														<span className="badge badge-light fs-8">Apr 3</span>
														{/* <!--end::Label--> */}
													</div>
													{/* <!--end::Item--> */}
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack py-4">
														{/* <!--begin::Section--> */}
														<div className="d-flex align-items-center me-2">
															{/* <!--begin::Code--> */}
															<span className="w-70px badge badge-light-warning me-4">300 WRN</span>
															{/* <!--end::Code--> */}
															{/* <!--begin::Title--> */}
															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">API rollback</a>
															{/* <!--end::Title--> */}
														</div>
														{/* <!--end::Section--> */}
														{/* <!--begin::Label--> */}
														<span className="badge badge-light fs-8">Jun 30</span>
														{/* <!--end::Label--> */}
													</div>
													{/* <!--end::Item--> */}
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack py-4">
														{/* <!--begin::Section--> */}
														<div className="d-flex align-items-center me-2">
															{/* <!--begin::Code--> */}
															<span className="w-70px badge badge-light-danger me-4">500 ERR</span>
															{/* <!--end::Code--> */}
															{/* <!--begin::Title--> */}
															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Refund process</a>
															{/* <!--end::Title--> */}
														</div>
														{/* <!--end::Section--> */}
														{/* <!--begin::Label--> */}
														<span className="badge badge-light fs-8">Jul 10</span>
														{/* <!--end::Label--> */}
													</div>
													{/* <!--end::Item--> */}
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack py-4">
														{/* <!--begin::Section--> */}
														<div className="d-flex align-items-center me-2">
															{/* <!--begin::Code--> */}
															<span className="w-70px badge badge-light-danger me-4">500 ERR</span>
															{/* <!--end::Code--> */}
															{/* <!--begin::Title--> */}
															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Withdrawal process</a>
															{/* <!--end::Title--> */}
														</div>
														{/* <!--end::Section--> */}
														{/* <!--begin::Label--> */}
														<span className="badge badge-light fs-8">Sep 10</span>
														{/* <!--end::Label--> */}
													</div>
													{/* <!--end::Item--> */}
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack py-4">
														{/* <!--begin::Section--> */}
														<div className="d-flex align-items-center me-2">
															{/* <!--begin::Code--> */}
															<span className="w-70px badge badge-light-danger me-4">500 ERR</span>
															{/* <!--end::Code--> */}
															{/* <!--begin::Title--> */}
															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Mail tasks</a>
															{/* <!--end::Title--> */}
														</div>
														{/* <!--end::Section--> */}
														{/* <!--begin::Label--> */}
														<span className="badge badge-light fs-8">Dec 10</span>
														{/* <!--end::Label--> */}
													</div>
													{/* <!--end::Item--> */}
												</div>
												{/* <!--end::Items--> */}
												{/* <!--begin::View more--> */}
												<div className="py-3 text-center border-top">
													<a href="../../demo1/dist/pages/user-profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">View All
													<i className="ki-duotone ki-arrow-right fs-5">
														<span className="path1"></span>
														<span className="path2"></span>
													</i></a>
												</div>
												{/* <!--end::View more--> */}
											</div>
											{/* <!--end::Tab panel--> */}
										</div>
										{/* <!--end::Tab content--> */}
									</div>
									{/* <!--end::Menu--> */}
									{/* <!--end::Menu wrapper--> */}
								</div>
								{/* <!--end::Notifications--> */}
								{/* <!--begin::Chat--> */}
								<div className="app-navbar-item ms-1 ms-lg-3">
									{/* <!--begin::Menu wrapper--> */}
									<div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px position-relative" id="kt_drawer_chat_toggle">
										<i className="ki-duotone ki-message-text-2 fs-1">
											<span className="path1"></span>
											<span className="path2"></span>
											<span className="path3"></span>
										</i>
										<span className="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"></span>
									</div>
									{/* <!--end::Menu wrapper--> */}
								</div>
								{/* <!--end::Chat--> */}
								{/* <!--begin::Languages--> */}
								<div className="app-navbar-item ms-1 ms-lg-3">
									{/* <!--begin::Menu wrapper--> */}
									<div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
										<span className="symbol symbol-20px">
											<img className="rounded" src="%PUBLIC_URL%/assets/media/flags/united-states.svg" alt="" />
										</span>
									</div>
									{/* <!--begin::User account menu--> */}
									<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-semibold py-4 fs-6 w-175px" data-kt-menu="true">
										{/* <!--begin::Menu item--> */}
										<div className="menu-item px-3">
											<a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5 active">
											<span className="symbol symbol-20px me-4">
												<img className="rounded-1" src="%PUBLIC_URL%/assets/media/flags/united-states.svg" alt="" />
											</span>English</a>
										</div>
										{/* <!--end::Menu item--> */}
										{/* <!--begin::Menu item--> */}
										<div className="menu-item px-3">
											<a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5">
											<span className="symbol symbol-20px me-4">
												<img className="rounded-1" src="%PUBLIC_URL%/assets/media/flags/spain.svg" alt="" />
											</span>Spanish</a>
										</div>
										{/* <!--end::Menu item--> */}
										{/* <!--begin::Menu item--> */}
										<div className="menu-item px-3">
											<a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5">
											<span className="symbol symbol-20px me-4">
												<img className="rounded-1" src="%PUBLIC_URL%/assets/media/flags/germany.svg" alt="" />
											</span>German</a>
										</div>
										{/* <!--end::Menu item--> */}
										{/* <!--begin::Menu item--> */}
										<div className="menu-item px-3">
											<a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5">
											<span className="symbol symbol-20px me-4">
												<img className="rounded-1" src="%PUBLIC_URL%/assets/media/flags/japan.svg" alt="" />
											</span>Japanese</a>
										</div>
										{/* <!--end::Menu item--> */}
										{/* <!--begin::Menu item--> */}
										<div className="menu-item px-3">
											<a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5">
											<span className="symbol symbol-20px me-4">
												<img className="rounded-1" src="%PUBLIC_URL%/assets/media/flags/france.svg" alt="" />
											</span>French</a>
										</div>
										{/* <!--end::Menu item--> */}
									</div>
									{/* <!--end::User account menu--> */}
									{/* <!--end::Menu wrapper--> */}
								</div>
								{/* <!--end::Languages--> */}
								{/* <!--begin::Theme mode--> */}
								<div className="app-navbar-item ms-1 ms-lg-3">
									{/* <!--begin::Menu toggle--> */}
									<a href="#" className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px" data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
										<i className="ki-duotone ki-night-day theme-light-show fs-1">
											<span className="path1"></span>
											<span className="path2"></span>
											<span className="path3"></span>
											<span className="path4"></span>
											<span className="path5"></span>
											<span className="path6"></span>
											<span className="path7"></span>
											<span className="path8"></span>
											<span className="path9"></span>
											<span className="path10"></span>
										</i>
										<i className="ki-duotone ki-moon theme-dark-show fs-1">
											<span className="path1"></span>
											<span className="path2"></span>
										</i>
									</a>
									{/* <!--begin::Menu toggle--> */}
									{/* <!--begin::Menu--> */}
									<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px" data-kt-menu="true" data-kt-element="theme-mode-menu">
										{/* <!--begin::Menu item--> */}
										<div className="menu-item px-3 my-0">
											<a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="light">
												<span className="menu-icon" data-kt-element="icon">
													<i className="ki-duotone ki-night-day fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
														<span className="path3"></span>
														<span className="path4"></span>
														<span className="path5"></span>
														<span className="path6"></span>
														<span className="path7"></span>
														<span className="path8"></span>
														<span className="path9"></span>
														<span className="path10"></span>
													</i>
												</span>
												<span className="menu-title">Light</span>
											</a>
										</div>
										{/* <!--end::Menu item--> */}
										{/* <!--begin::Menu item--> */}
										<div className="menu-item px-3 my-0">
											<a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="dark">
												<span className="menu-icon" data-kt-element="icon">
													<i className="ki-duotone ki-moon fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</span>
												<span className="menu-title">Dark</span>
											</a>
										</div>
										{/* <!--end::Menu item--> */}
										{/* <!--begin::Menu item--> */}
										<div className="menu-item px-3 my-0">
											<a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="system">
												<span className="menu-icon" data-kt-element="icon">
													<i className="ki-duotone ki-screen fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
														<span className="path3"></span>
														<span className="path4"></span>
													</i>
												</span>
												<span className="menu-title">System</span>
											</a>
										</div>
										{/* <!--end::Menu item--> */}
									</div>
									{/* <!--end::Menu--> */}
								</div>
								{/* <!--end::Theme mode--> */}
								{/* <!--begin::User menu--> */}
								<div className="app-navbar-item ms-2 ms-1 ms-lg-3" id="kt_header_user_menu_toggle">
									{/* <!--begin::Menu wrapper--> */}
									<div className="cursor-pointer symbol symbol-35px symbol-md-40px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
										<img src="%PUBLIC_URL%/assets/media/avatars/300-3.jpg" alt="user" />
									</div>
									{/* <!--begin::User account menu--> */}
									<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">
										{/* <!--begin::Menu item--> */}
										<div className="menu-item px-3">
											<div className="menu-content d-flex align-items-center px-3">
												{/* <!--begin::Avatar--> */}
												<div className="symbol symbol-50px me-5">
													<img alt="Logo" src="%PUBLIC_URL%/assets/media/avatars/300-3.jpg" />
												</div>
												{/* <!--end::Avatar--> */}
												{/* <!--begin::Username--> */}
												<div className="d-flex flex-column">
													<div className="fw-bold d-flex align-items-center fs-5">Max Smith
													<span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span></div>
													<a href="#" className="fw-semibold text-muted text-hover-primary fs-7">max@kt.com</a>
												</div>
												{/* <!--end::Username--> */}
											</div>
										</div>
										{/* <!--end::Menu item--> */}
										{/* <!--begin::Menu separator--> */}
										<div className="separator my-2"></div>
										{/* <!--end::Menu separator--> */}
										{/* <!--begin::Menu item--> */}
										<div className="menu-item px-5">
											<a href="../../demo1/dist/account/overview.html" className="menu-link px-5">My Profile</a>
										</div>
										{/* <!--end::Menu item--> */}
										{/* <!--begin::Menu item--> */}
										<div className="menu-item px-5">
											<a href="../../demo1/dist/apps/projects/list.html" className="menu-link px-5">
												<span className="menu-text">My Projects</span>
												<span className="menu-badge">
													<span className="badge badge-light-danger badge-circle fw-bold fs-7">3</span>
												</span>
											</a>
										</div>
										{/* <!--end::Menu item--> */}
										{/* <!--begin::Menu item--> */}
										<div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
											<a href="#" className="menu-link px-5">
												<span className="menu-title">My Subscription</span>
												<span className="menu-arrow"></span>
											</a>
											{/* <!--begin::Menu sub--> */}
											<div className="menu-sub menu-sub-dropdown w-175px py-4">
												{/* <!--begin::Menu item--> */}
												<div className="menu-item px-3">
													<a href="../../demo1/dist/account/referrals.html" className="menu-link px-5">Referrals</a>
												</div>
												{/* <!--end::Menu item--> */}
												{/* <!--begin::Menu item--> */}
												<div className="menu-item px-3">
													<a href="../../demo1/dist/account/billing.html" className="menu-link px-5">Billing</a>
												</div>
												{/* <!--end::Menu item--> */}
												{/* <!--begin::Menu item--> */}
												<div className="menu-item px-3">
													<a href="../../demo1/dist/account/statements.html" className="menu-link px-5">Payments</a>
												</div>
												{/* <!--end::Menu item--> */}
												{/* <!--begin::Menu item--> */}
												<div className="menu-item px-3">
													<a href="../../demo1/dist/account/statements.html" className="menu-link d-flex flex-stack px-5">Statements
													<span className="ms-2 lh-0" data-bs-toggle="tooltip" title="View your statements">
														<i className="ki-duotone ki-information-5 fs-5">
															<span className="path1"></span>
															<span className="path2"></span>
															<span className="path3"></span>
														</i>
													</span></a>
												</div>
												{/* <!--end::Menu item--> */}
												{/* <!--begin::Menu separator--> */}
												<div className="separator my-2"></div>
												{/* <!--end::Menu separator--> */}
												{/* <!--begin::Menu item--> */}
												<div className="menu-item px-3">
													<div className="menu-content px-3">
														<label className="form-check form-switch form-check-custom form-check-solid">
															<input className="form-check-input w-30px h-20px" type="checkbox" value="1" checked="checked" name="notifications" />
															<span className="form-check-label text-muted fs-7">Notifications</span>
														</label>
													</div>
												</div>
												{/* <!--end::Menu item--> */}
											</div>
											{/* <!--end::Menu sub--> */}
										</div>
										{/* <!--end::Menu item--> */}
										{/* <!--begin::Menu item--> */}
										<div className="menu-item px-5">
											<a href="../../demo1/dist/account/statements.html" className="menu-link px-5">My Statements</a>
										</div>
										{/* <!--end::Menu item--> */}
										{/* <!--begin::Menu separator--> */}
										<div className="separator my-2"></div>
										{/* <!--end::Menu separator--> */}
										{/* <!--begin::Menu item--> */}
										<div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
											<a href="#" className="menu-link px-5">
												<span className="menu-title position-relative">Language
												<span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">English
												<img className="w-15px h-15px rounded-1 ms-2" src="%PUBLIC_URL%/assets/media/flags/united-states.svg" alt="" /></span></span>
											</a>
											{/* <!--begin::Menu sub--> */}
											<div className="menu-sub menu-sub-dropdown w-175px py-4">
												{/* <!--begin::Menu item--> */}
												<div className="menu-item px-3">
													<a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5 active">
													<span className="symbol symbol-20px me-4">
														<img className="rounded-1" src="%PUBLIC_URL%/assets/media/flags/united-states.svg" alt="" />
													</span>English</a>
												</div>
												{/* <!--end::Menu item--> */}
												{/* <!--begin::Menu item--> */}
												<div className="menu-item px-3">
													<a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5">
													<span className="symbol symbol-20px me-4">
														<img className="rounded-1" src="%PUBLIC_URL%/assets/media/flags/spain.svg" alt="" />
													</span>Spanish</a>
												</div>
												{/* <!--end::Menu item--> */}
												{/* <!--begin::Menu item--> */}
												<div className="menu-item px-3">
													<a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5">
													<span className="symbol symbol-20px me-4">
														<img className="rounded-1" src="%PUBLIC_URL%/assets/media/flags/germany.svg" alt="" />
													</span>German</a>
												</div>
												{/* <!--end::Menu item--> */}
												{/* <!--begin::Menu item--> */}
												<div className="menu-item px-3">
													<a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5">
													<span className="symbol symbol-20px me-4">
														<img className="rounded-1" src="%PUBLIC_URL%/assets/media/flags/japan.svg" alt="" />
													</span>Japanese</a>
												</div>
												{/* <!--end::Menu item--> */}
												{/* <!--begin::Menu item--> */}
												<div className="menu-item px-3">
													<a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5">
													<span className="symbol symbol-20px me-4">
														<img className="rounded-1" src="%PUBLIC_URL%/assets/media/flags/france.svg" alt="" />
													</span>French</a>
												</div>
												{/* <!--end::Menu item--> */}
											</div>
											{/* <!--end::Menu sub--> */}
										</div>
										{/* <!--end::Menu item--> */}
										{/* <!--begin::Menu item--> */}
										<div className="menu-item px-5 my-1">
											<a href="../../demo1/dist/account/settings.html" className="menu-link px-5">Account Settings</a>
										</div>
										{/* <!--end::Menu item--> */}
										{/* <!--begin::Menu item--> */}
										<div className="menu-item px-5">
											<a href="../../demo1/dist/authentication/layouts/corporate/sign-in.html" className="menu-link px-5">Sign Out</a>
										</div>
										{/* <!--end::Menu item--> */}
									</div>
									{/* <!--end::User account menu--> */}
									{/* <!--end::Menu wrapper--> */}
								</div>
								{/* <!--end::User menu--> */}
								{/* <!--begin::Header menu toggle--> */}
								<div className="app-navbar-item d-lg-none ms-2 me-n2" title="Show header menu">
									<div className="btn btn-flex btn-icon btn-active-color-primary w-30px h-30px" id="kt_app_header_menu_toggle">
										<i className="ki-duotone ki-element-4 fs-1">
											<span className="path1"></span>
											<span className="path2"></span>
										</i>
									</div>
								</div>
								{/* <!--end::Header menu toggle--> */}
							</div>
							{/* <!--end::Navbar--> */}
						</div>
						{/* <!--end::Header wrapper--> */}
					</div>
					{/* <!--end::Header container--> */}
				</div>
				{/* <!--end::Header--> */}
				{/* <!--begin::Wrapper--> */}
				<div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
					{/* <!--begin::Sidebar--> */}
					<div id="kt_app_sidebar" className="app-sidebar flex-column" data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="225px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
						{/* <!--begin::Logo--> */}
						<div className="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
							{/* <!--begin::Logo image--> */}
							<a href="../../demo1/dist/index.html">
								<img alt="Logo" src="%PUBLIC_URL%/assets/media/logos/default-dark.svg" className="h-30px app-sidebar-logo-default" />
							</a>
							{/* <!--end::Logo image--> */}
							{/* <!--begin::Sidebar toggle ariel--> */}
							<div onClick={changeStyle} id="kt_app_sidebar_toggle" className={style} data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body" data-kt-toggle-name="app-sidebar-minimize">
								<i className="ki-duotone ki-double-left fs-2 rotate-180">
									<span className="path1"></span>
									<span className="path2"></span>
								</i>
							</div>
							{/* <!--end::Sidebar toggle--> */}
						</div>
						{/* <!--end::Logo--> */}
						{/* <!--begin::sidebar menu--> */}
						<div className="app-sidebar-menu overflow-hidden flex-column-fluid">
							{/* <!--begin::Menu wrapper--> */}
							<div id="kt_app_sidebar_menu_wrapper" className="app-sidebar-wrapper">
								{/* <!--begin::Scroll wrapper--> */}
								<div id="kt_app_sidebar_menu_scroll" className="hover-scroll-y my-5 mx-3" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer" data-kt-scroll-wrappers="#kt_app_sidebar_menu" data-kt-scroll-offset="5px" data-kt-scroll-save-state="true">
									{/* <!--begin::Menu--> */}
									<div className="menu menu-column menu-rounded menu-sub-indention fw-semibold" id="#kt_app_sidebar_menu" data-kt-menu="true" data-kt-menu-expand="false">
										{/* <!--begin:Menu item--> */}
										<div data-kt-menu-trigger="click" className="menu-item here show menu-accordion">
											{/* <!--begin:Menu link--> */}
											<span className="menu-link">
												<span className="menu-icon">
													<i className="ki-duotone ki-category fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
														<span className="path3"></span>
														<span className="path4"></span>
													</i>
												</span>
												<span className="menu-title">Dashboards</span>
												<span className="menu-arrow"></span>
											</span>
											{/* <!--end:Menu link--> */}
											{/* <!--begin:Menu sub--> */}
											<div className="menu-sub menu-sub-accordion">
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link active" href="../../demo1/dist/index.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Default</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/dashboards/projects.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Projects</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/dashboards/ecommerce.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">eCommerce</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/dashboards/marketing.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Marketing</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												<div className="menu-inner flex-column collapse" id="kt_app_sidebar_menu_dashboards_collapse">
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/dashboards/social.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Social</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/dashboards/bidding.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Bidding</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/dashboards/online-courses.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Online Courses</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<a className="menu-link" href="../../demo1/dist/dashboards/logistics.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Logistics</span>
														</a>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
												</div>
												<div className="menu-item">
													<div className="menu-content">
														<a className="btn btn-flex btn-color-gray-500 btn-icon-gray-400 d-flex flex-stack fs-base p-0 ms-2 mb-2 toggle collapsible collapsed" data-bs-toggle="collapse" href="#kt_app_sidebar_menu_dashboards_collapse" data-kt-toggle-text="Show Less">
															<span data-kt-toggle-text-target="true">Show 4 More</span>
															<i className="ki-duotone ki-minus-square toggle-on fs-2 me-0 pe-0">
																<span className="path1"></span>
																<span className="path2"></span>
															</i>
															<i className="ki-duotone ki-plus-square toggle-off fs-2 me-0 pe-0">
																<span className="path1"></span>
																<span className="path2"></span>
																<span className="path3"></span>
															</i>
														</a>
													</div>
												</div>
											</div>
											{/* <!--end:Menu sub--> */}
										</div>
										{/* <!--end:Menu item--> */}
										{/* <!--begin:Menu item--> */}
										<div className="menu-item pt-5">
											{/* <!--begin:Menu content--> */}
											<div className="menu-content">
												<span className="menu-heading fw-bold text-uppercase fs-7">Pages</span>
											</div>
											{/* <!--end:Menu content--> */}
										</div>
										{/* <!--end:Menu item--> */}
										{/* <!--begin:Menu item--> */}
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											{/* <!--begin:Menu link--> */}
											<span className="menu-link">
												<span className="menu-icon">
													<i className="ki-duotone ki-address-book fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
														<span className="path3"></span>
													</i>
												</span>
												<span className="menu-title">User Profile</span>
												<span className="menu-arrow"></span>
											</span>
											{/* <!--end:Menu link--> */}
											{/* <!--begin:Menu sub--> */}
											<div className="menu-sub menu-sub-accordion">
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/pages/user-profile/overview.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Overview</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/pages/user-profile/projects.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Projects</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/pages/user-profile/campaigns.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Campaigns</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/pages/user-profile/documents.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Documents</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/pages/user-profile/followers.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Followers</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/pages/user-profile/activity.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Activity</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
											</div>
											{/* <!--end:Menu sub--> */}
										</div>
										{/* <!--end:Menu item--> */}
										{/* <!--begin:Menu item--> */}
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											{/* <!--begin:Menu link--> */}
											<span className="menu-link">
												<span className="menu-icon">
													<i className="ki-duotone ki-educare fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
														<span className="path3"></span>
														<span className="path4"></span>
													</i>
												</span>
												<span className="menu-title">Account</span>
												<span className="menu-arrow"></span>
											</span>
											{/* <!--end:Menu link--> */}
											{/* <!--begin:Menu sub--> */}
											<div className="menu-sub menu-sub-accordion">
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/account/overview.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Overview</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/account/settings.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Settings</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/account/security.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Security</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/account/activity.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Activity</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/account/billing.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Billing</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/account/statements.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Statements</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/account/referrals.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Referrals</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/account/api-keys.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">API Keys</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/account/logs.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Logs</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
											</div>
											{/* <!--end:Menu sub--> */}
										</div>
										{/* <!--end:Menu item--> */}
										{/* <!--begin:Menu item--> */}
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											{/* <!--begin:Menu link--> */}
											<span className="menu-link">
												<span className="menu-icon">
													<i className="ki-duotone ki-user fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</span>
												<span className="menu-title">Authentication</span>
												<span className="menu-arrow"></span>
											</span>
											{/* <!--end:Menu link--> */}
											{/* <!--begin:Menu sub--> */}
											<div className="menu-sub menu-sub-accordion">
												{/* <!--begin:Menu item--> */}
												<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
													{/* <!--begin:Menu link--> */}
													<span className="menu-link">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Corporate</span>
														<span className="menu-arrow"></span>
													</span>
													{/* <!--end:Menu link--> */}
													{/* <!--begin:Menu sub--> */}
													<div className="menu-sub menu-sub-accordion menu-active-bg">
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/authentication/layouts/corporate/sign-in.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Sign-In</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/authentication/layouts/corporate/sign-up.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Sign-Up</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/authentication/layouts/corporate/two-factor.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Two-Factor</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/authentication/layouts/corporate/reset-password.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Reset Password</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/authentication/layouts/corporate/new-password.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">New Password</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/authentication/extended/multi-steps-sign-up.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Multi-Steps Sign-Up</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/authentication/extended/two-factor-auth.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Two Factor Auth</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
													</div>
													{/* <!--end:Menu sub--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
													{/* <!--begin:Menu link--> */}
													<span className="menu-link">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Email Templates</span>
														<span className="menu-arrow"></span>
													</span>
													{/* <!--end:Menu link--> */}
													{/* <!--begin:Menu sub--> */}
													<div className="menu-sub menu-sub-accordion menu-active-bg">
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/authentication/email/welcome-message.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Welcome Message</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/authentication/email/reset-password.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Reset Password</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/authentication/email/subscription-confirmed.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Subscription Confirmed</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/authentication/email/card-declined.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Credit Card Declined</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/authentication/email/promo-1.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Promo 1</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/authentication/email/promo-2.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Promo 2</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/authentication/email/promo-3.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Promo 3</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
													</div>
													{/* <!--end:Menu sub--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/authentication/general/welcome.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Welcome Message</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/authentication/general/verify-email.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Verify Email</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/authentication/general/coming-soon.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Coming Soon</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/authentication/general/password-confirmation.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Password Confirmation</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/authentication/general/account-deactivated.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Account Deactivation</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/authentication/general/error-404.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Error 404</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/authentication/general/error-500.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Error 500</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/authentication/general/maintenance.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Maintenance</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
											</div>
											{/* <!--end:Menu sub--> */}
										</div>
										{/* <!--end:Menu item--> */}
										{/* <!--begin:Menu item--> */}
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											{/* <!--begin:Menu link--> */}
											<span className="menu-link">
												<span className="menu-icon">
													<i className="ki-duotone ki-file fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</span>
												<span className="menu-title">Corporate</span>
												<span className="menu-arrow"></span>
											</span>
											{/* <!--end:Menu link--> */}
											{/* <!--begin:Menu sub--> */}
											<div className="menu-sub menu-sub-accordion">
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/pages/about.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">About</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/pages/team.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Our Team</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/pages/faq.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">FAQ</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/pages/contact.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Contact Us</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/pages/pricing.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Pricing</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/pages/licenses.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Licenses</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/pages/sitemap.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Sitemap</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
											</div>
											{/* <!--end:Menu sub--> */}
										</div>
										{/* <!--end:Menu item--> */}
										{/* <!--begin:Menu item--> */}
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											{/* <!--begin:Menu link--> */}
											<span className="menu-link">
												<span className="menu-icon">
													<i className="ki-duotone ki-abstract-39 fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</span>
												<span className="menu-title">Social</span>
												<span className="menu-arrow"></span>
											</span>
											{/* <!--end:Menu link--> */}
											{/* <!--begin:Menu sub--> */}
											<div className="menu-sub menu-sub-accordion">
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/pages/social/feeds.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Feeds</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/pages/social/activity.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Activty</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/pages/social/followers.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Followers</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/pages/social/settings.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Settings</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
											</div>
											{/* <!--end:Menu sub--> */}
										</div>
										{/* <!--end:Menu item--> */}
										{/* <!--begin:Menu item--> */}
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											{/* <!--begin:Menu link--> */}
											<span className="menu-link">
												<span className="menu-icon">
													<i className="ki-duotone ki-bank fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</span>
												<span className="menu-title">Blog</span>
												<span className="menu-arrow"></span>
											</span>
											{/* <!--end:Menu link--> */}
											{/* <!--begin:Menu sub--> */}
											<div className="menu-sub menu-sub-accordion menu-active-bg">
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/pages/blog/home.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Blog Home</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/pages/blog/post.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Blog Post</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
											</div>
											{/* <!--end:Menu sub--> */}
										</div>
										{/* <!--end:Menu item--> */}
										{/* <!--begin:Menu item--> */}
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											{/* <!--begin:Menu link--> */}
											<span className="menu-link">
												<span className="menu-icon">
													<i className="ki-duotone ki-call fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
														<span className="path3"></span>
														<span className="path4"></span>
														<span className="path5"></span>
														<span className="path6"></span>
														<span className="path7"></span>
														<span className="path8"></span>
													</i>
												</span>
												<span className="menu-title">Careers</span>
												<span className="menu-arrow"></span>
											</span>
											{/* <!--end:Menu link--> */}
											{/* <!--begin:Menu sub--> */}
											<div className="menu-sub menu-sub-accordion">
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/pages/careers/list.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Careers List</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/pages/careers/apply.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Careers Apply</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
											</div>
											{/* <!--end:Menu sub--> */}
										</div>
										{/* <!--end:Menu item--> */}
										{/* <!--begin:Menu item--> */}
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											{/* <!--begin:Menu link--> */}
											<span className="menu-link">
												<span className="menu-icon">
													<i className="ki-duotone ki-color-swatch fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
														<span className="path3"></span>
														<span className="path4"></span>
														<span className="path5"></span>
														<span className="path6"></span>
														<span className="path7"></span>
														<span className="path8"></span>
														<span className="path9"></span>
														<span className="path10"></span>
														<span className="path11"></span>
														<span className="path12"></span>
														<span className="path13"></span>
														<span className="path14"></span>
														<span className="path15"></span>
														<span className="path16"></span>
														<span className="path17"></span>
														<span className="path18"></span>
														<span className="path19"></span>
														<span className="path20"></span>
														<span className="path21"></span>
													</i>
												</span>
												<span className="menu-title">Utilities</span>
												<span className="menu-arrow"></span>
											</span>
											{/* <!--end:Menu link--> */}
											{/* <!--begin:Menu sub--> */}
											<div className="menu-sub menu-sub-accordion">
												{/* <!--begin:Menu item--> */}
												<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
													{/* <!--begin:Menu link--> */}
													<span className="menu-link">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Modals</span>
														<span className="menu-arrow"></span>
													</span>
													{/* <!--end:Menu link--> */}
													{/* <!--begin:Menu sub--> */}
													<div className="menu-sub menu-sub-accordion">
														{/* <!--begin:Menu item--> */}
														<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
															{/* <!--begin:Menu link--> */}
															<span className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">General</span>
																<span className="menu-arrow"></span>
															</span>
															{/* <!--end:Menu link--> */}
															{/* <!--begin:Menu sub--> */}
															<div className="menu-sub menu-sub-accordion menu-active-bg">
																{/* <!--begin:Menu item--> */}
																<div className="menu-item">
																	{/* <!--begin:Menu link--> */}
																	<a className="menu-link" href="../../demo1/dist/utilities/modals/general/invite-friends.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Invite Friends</span>
																	</a>
																	{/* <!--end:Menu link--> */}
																</div>
																{/* <!--end:Menu item--> */}
																{/* <!--begin:Menu item--> */}
																<div className="menu-item">
																	{/* <!--begin:Menu link--> */}
																	<a className="menu-link" href="../../demo1/dist/utilities/modals/general/view-users.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">View Users</span>
																	</a>
																	{/* <!--end:Menu link--> */}
																</div>
																{/* <!--end:Menu item--> */}
																{/* <!--begin:Menu item--> */}
																<div className="menu-item">
																	{/* <!--begin:Menu link--> */}
																	<a className="menu-link" href="../../demo1/dist/utilities/modals/general/select-users.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Select Users</span>
																	</a>
																	{/* <!--end:Menu link--> */}
																</div>
																{/* <!--end:Menu item--> */}
																{/* <!--begin:Menu item--> */}
																<div className="menu-item">
																	{/* <!--begin:Menu link--> */}
																	<a className="menu-link" href="../../demo1/dist/utilities/modals/general/upgrade-plan.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Upgrade Plan</span>
																	</a>
																	{/* <!--end:Menu link--> */}
																</div>
																{/* <!--end:Menu item--> */}
																{/* <!--begin:Menu item--> */}
																<div className="menu-item">
																	{/* <!--begin:Menu link--> */}
																	<a className="menu-link" href="../../demo1/dist/utilities/modals/general/share-earn.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Share & Earn</span>
																	</a>
																	{/* <!--end:Menu link--> */}
																</div>
																{/* <!--end:Menu item--> */}
															</div>
															{/* <!--end:Menu sub--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
															{/* <!--begin:Menu link--> */}
															<span className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Forms</span>
																<span className="menu-arrow"></span>
															</span>
															{/* <!--end:Menu link--> */}
															{/* <!--begin:Menu sub--> */}
															<div className="menu-sub menu-sub-accordion menu-active-bg">
																{/* <!--begin:Menu item--> */}
																<div className="menu-item">
																	{/* <!--begin:Menu link--> */}
																	<a className="menu-link" href="../../demo1/dist/utilities/modals/forms/new-target.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">New Target</span>
																	</a>
																	{/* <!--end:Menu link--> */}
																</div>
																{/* <!--end:Menu item--> */}
																{/* <!--begin:Menu item--> */}
																<div className="menu-item">
																	{/* <!--begin:Menu link--> */}
																	<a className="menu-link" href="../../demo1/dist/utilities/modals/forms/new-card.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">New Card</span>
																	</a>
																	{/* <!--end:Menu link--> */}
																</div>
																{/* <!--end:Menu item--> */}
																{/* <!--begin:Menu item--> */}
																<div className="menu-item">
																	{/* <!--begin:Menu link--> */}
																	<a className="menu-link" href="../../demo1/dist/utilities/modals/forms/new-address.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">New Address</span>
																	</a>
																	{/* <!--end:Menu link--> */}
																</div>
																{/* <!--end:Menu item--> */}
																{/* <!--begin:Menu item--> */}
																<div className="menu-item">
																	{/* <!--begin:Menu link--> */}
																	<a className="menu-link" href="../../demo1/dist/utilities/modals/forms/create-api-key.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Create API Key</span>
																	</a>
																	{/* <!--end:Menu link--> */}
																</div>
																{/* <!--end:Menu item--> */}
																{/* <!--begin:Menu item--> */}
																<div className="menu-item">
																	{/* <!--begin:Menu link--> */}
																	<a className="menu-link" href="../../demo1/dist/utilities/modals/forms/bidding.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Bidding</span>
																	</a>
																	{/* <!--end:Menu link--> */}
																</div>
																{/* <!--end:Menu item--> */}
															</div>
															{/* <!--end:Menu sub--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
															{/* <!--begin:Menu link--> */}
															<span className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Wizards</span>
																<span className="menu-arrow"></span>
															</span>
															{/* <!--end:Menu link--> */}
															{/* <!--begin:Menu sub--> */}
															<div className="menu-sub menu-sub-accordion menu-active-bg">
																{/* <!--begin:Menu item--> */}
																<div className="menu-item">
																	{/* <!--begin:Menu link--> */}
																	<a className="menu-link" href="../../demo1/dist/utilities/modals/wizards/create-app.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Create App</span>
																	</a>
																	{/* <!--end:Menu link--> */}
																</div>
																{/* <!--end:Menu item--> */}
																{/* <!--begin:Menu item--> */}
																<div className="menu-item">
																	{/* <!--begin:Menu link--> */}
																	<a className="menu-link" href="../../demo1/dist/utilities/modals/wizards/create-campaign.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Create Campaign</span>
																	</a>
																	{/* <!--end:Menu link--> */}
																</div>
																{/* <!--end:Menu item--> */}
																{/* <!--begin:Menu item--> */}
																<div className="menu-item">
																	{/* <!--begin:Menu link--> */}
																	<a className="menu-link" href="../../demo1/dist/utilities/modals/wizards/create-account.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Create Business Acc</span>
																	</a>
																	{/* <!--end:Menu link--> */}
																</div>
																{/* <!--end:Menu item--> */}
																{/* <!--begin:Menu item--> */}
																<div className="menu-item">
																	{/* <!--begin:Menu link--> */}
																	<a className="menu-link" href="../../demo1/dist/utilities/modals/wizards/create-project.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Create Project</span>
																	</a>
																	{/* <!--end:Menu link--> */}
																</div>
																{/* <!--end:Menu item--> */}
																{/* <!--begin:Menu item--> */}
																<div className="menu-item">
																	{/* <!--begin:Menu link--> */}
																	<a className="menu-link" href="../../demo1/dist/utilities/modals/wizards/top-up-wallet.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Top Up Wallet</span>
																	</a>
																	{/* <!--end:Menu link--> */}
																</div>
																{/* <!--end:Menu item--> */}
																{/* <!--begin:Menu item--> */}
																<div className="menu-item">
																	{/* <!--begin:Menu link--> */}
																	<a className="menu-link" href="../../demo1/dist/utilities/modals/wizards/offer-a-deal.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Offer a Deal</span>
																	</a>
																	{/* <!--end:Menu link--> */}
																</div>
																{/* <!--end:Menu item--> */}
																{/* <!--begin:Menu item--> */}
																<div className="menu-item">
																	{/* <!--begin:Menu link--> */}
																	<a className="menu-link" href="../../demo1/dist/utilities/modals/wizards/two-factor-authentication.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Two Factor Auth</span>
																	</a>
																	{/* <!--end:Menu link--> */}
																</div>
																{/* <!--end:Menu item--> */}
															</div>
															{/* <!--end:Menu sub--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
															{/* <!--begin:Menu link--> */}
															<span className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Search</span>
																<span className="menu-arrow"></span>
															</span>
															{/* <!--end:Menu link--> */}
															{/* <!--begin:Menu sub--> */}
															<div className="menu-sub menu-sub-accordion menu-active-bg">
																{/* <!--begin:Menu item--> */}
																<div className="menu-item">
																	{/* <!--begin:Menu link--> */}
																	<a className="menu-link" href="../../demo1/dist/utilities/modals/search/users.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Users</span>
																	</a>
																	{/* <!--end:Menu link--> */}
																</div>
																{/* <!--end:Menu item--> */}
																{/* <!--begin:Menu item--> */}
																<div className="menu-item">
																	{/* <!--begin:Menu link--> */}
																	<a className="menu-link" href="../../demo1/dist/utilities/modals/search/select-location.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Select Location</span>
																	</a>
																	{/* <!--end:Menu link--> */}
																</div>
																{/* <!--end:Menu item--> */}
															</div>
															{/* <!--end:Menu sub--> */}
														</div>
														{/* <!--end:Menu item--> */}
													</div>
													{/* <!--end:Menu sub--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
													{/* <!--begin:Menu link--> */}
													<span className="menu-link">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Search</span>
														<span className="menu-arrow"></span>
													</span>
													{/* <!--end:Menu link--> */}
													{/* <!--begin:Menu sub--> */}
													<div className="menu-sub menu-sub-accordion">
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/utilities/search/horizontal.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Horizontal</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/utilities/search/vertical.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Vertical</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/utilities/search/users.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Users</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/utilities/search/select-location.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Location</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
													</div>
													{/* <!--end:Menu sub--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
													{/* <!--begin:Menu link--> */}
													<span className="menu-link">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Wizards</span>
														<span className="menu-arrow"></span>
													</span>
													{/* <!--end:Menu link--> */}
													{/* <!--begin:Menu sub--> */}
													<div className="menu-sub menu-sub-accordion">
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/utilities/wizards/horizontal.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Horizontal</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/utilities/wizards/vertical.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Vertical</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/utilities/wizards/two-factor-authentication.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Two Factor Auth</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/utilities/wizards/create-app.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Create App</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/utilities/wizards/create-campaign.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Create Campaign</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/utilities/wizards/create-account.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Create Account</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/utilities/wizards/create-project.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Create Project</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/utilities/modals/wizards/top-up-wallet.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Top Up Wallet</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/utilities/wizards/offer-a-deal.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Offer a Deal</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
													</div>
													{/* <!--end:Menu sub--> */}
												</div>
												{/* <!--end:Menu item--> */}
											</div>
											{/* <!--end:Menu sub--> */}
										</div>
										{/* <!--end:Menu item--> */}
										{/* <!--begin:Menu item--> */}
										<div className="menu-item pt-5">
											{/* <!--begin:Menu content--> */}
											<div className="menu-content">
												<span className="menu-heading fw-bold text-uppercase fs-7">Apps</span>
											</div>
											{/* <!--end:Menu content--> */}
										</div>
										{/* <!--end:Menu item--> */}
										{/* <!--begin:Menu item--> */}
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											{/* <!--begin:Menu link--> */}
											<span className="menu-link">
												<span className="menu-icon">
													<i className="ki-duotone ki-abstract-41 fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</span>
												<span className="menu-title">Projects</span>
												<span className="menu-arrow"></span>
											</span>
											{/* <!--end:Menu link--> */}
											{/* <!--begin:Menu sub--> */}
											<div className="menu-sub menu-sub-accordion">
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/projects/list.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">My Projects</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/projects/project.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">View Project</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/projects/targets.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Targets</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/projects/budget.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Budget</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/projects/users.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Users</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/projects/files.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Files</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/projects/activity.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Activity</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/projects/settings.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Settings</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
											</div>
											{/* <!--end:Menu sub--> */}
										</div>
										{/* <!--end:Menu item--> */}
										{/* <!--begin:Menu item--> */}
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											{/* <!--begin:Menu link--> */}
											<span className="menu-link">
												<span className="menu-icon">
													<i className="ki-duotone ki-basket fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
														<span className="path3"></span>
														<span className="path4"></span>
													</i>
												</span>
												<span className="menu-title">eCommerce</span>
												<span className="menu-arrow"></span>
											</span>
											{/* <!--end:Menu link--> */}
											{/* <!--begin:Menu sub--> */}
											<div className="menu-sub menu-sub-accordion">
												{/* <!--begin:Menu item--> */}
												<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
													{/* <!--begin:Menu link--> */}
													<span className="menu-link">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Catalog</span>
														<span className="menu-arrow"></span>
													</span>
													{/* <!--end:Menu link--> */}
													{/* <!--begin:Menu sub--> */}
													<div className="menu-sub menu-sub-accordion">
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/products.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Products</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/categories.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Categories</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/add-product.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Add Product</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Edit Product</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/add-category.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Add Category</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/edit-category.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Edit Category</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
													</div>
													{/* <!--end:Menu sub--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
													{/* <!--begin:Menu link--> */}
													<span className="menu-link">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Sales</span>
														<span className="menu-arrow"></span>
													</span>
													{/* <!--end:Menu link--> */}
													{/* <!--begin:Menu sub--> */}
													<div className="menu-sub menu-sub-accordion">
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/apps/ecommerce/sales/listing.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Orders Listing</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/apps/ecommerce/sales/details.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Order Details</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/apps/ecommerce/sales/add-order.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Add Order</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/apps/ecommerce/sales/edit-order.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Edit Order</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
													</div>
													{/* <!--end:Menu sub--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
													{/* <!--begin:Menu link--> */}
													<span className="menu-link">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Customers</span>
														<span className="menu-arrow"></span>
													</span>
													{/* <!--end:Menu link--> */}
													{/* <!--begin:Menu sub--> */}
													<div className="menu-sub menu-sub-accordion">
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/apps/ecommerce/customers/listing.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Customer Listing</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/apps/ecommerce/customers/details.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Customer Details</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
													</div>
													{/* <!--end:Menu sub--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
													{/* <!--begin:Menu link--> */}
													<span className="menu-link">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Reports</span>
														<span className="menu-arrow"></span>
													</span>
													{/* <!--end:Menu link--> */}
													{/* <!--begin:Menu sub--> */}
													<div className="menu-sub menu-sub-accordion">
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/apps/ecommerce/reports/view.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Products Viewed</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/apps/ecommerce/reports/sales.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Sales</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/apps/ecommerce/reports/returns.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Returns</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/apps/ecommerce/reports/customer-orders.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Customer Orders</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/apps/ecommerce/reports/shipping.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Shipping</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
													</div>
													{/* <!--end:Menu sub--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/ecommerce/settings.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Settings</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
											</div>
											{/* <!--end:Menu sub--> */}
										</div>
										{/* <!--end:Menu item--> */}
										{/* <!--begin:Menu item--> */}
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											{/* <!--begin:Menu link--> */}
											<span className="menu-link">
												<span className="menu-icon">
													<i className="ki-duotone ki-abstract-25 fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</span>
												<span className="menu-title">Contacts</span>
												<span className="menu-arrow"></span>
											</span>
											{/* <!--end:Menu link--> */}
											{/* <!--begin:Menu sub--> */}
											<div className="menu-sub menu-sub-accordion">
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/contacts/getting-started.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Getting Started</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/contacts/add-contact.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Add Contact</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/contacts/edit-contact.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Edit Contact</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/contacts/view-contact.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">View Contact</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
											</div>
											{/* <!--end:Menu sub--> */}
										</div>
										{/* <!--end:Menu item--> */}
										{/* <!--begin:Menu item--> */}
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											{/* <!--begin:Menu link--> */}
											<span className="menu-link">
												<span className="menu-icon">
													<i className="ki-duotone ki-chart fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</span>
												<span className="menu-title">Support Center</span>
												<span className="menu-arrow"></span>
											</span>
											{/* <!--end:Menu link--> */}
											{/* <!--begin:Menu sub--> */}
											<div className="menu-sub menu-sub-accordion">
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/support-center/overview.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Overview</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">
													{/* <!--begin:Menu link--> */}
													<span className="menu-link">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Tickets</span>
														<span className="menu-arrow"></span>
													</span>
													{/* <!--end:Menu link--> */}
													{/* <!--begin:Menu sub--> */}
													<div className="menu-sub menu-sub-accordion">
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/apps/support-center/tickets/list.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Tickets List</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/apps/support-center/tickets/view.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">View Ticket</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
													</div>
													{/* <!--end:Menu sub--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">
													{/* <!--begin:Menu link--> */}
													<span className="menu-link">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Tutorials</span>
														<span className="menu-arrow"></span>
													</span>
													{/* <!--end:Menu link--> */}
													{/* <!--begin:Menu sub--> */}
													<div className="menu-sub menu-sub-accordion">
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/apps/support-center/tutorials/list.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Tutorials List</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/apps/support-center/tutorials/post.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Tutorial Post</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
													</div>
													{/* <!--end:Menu sub--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/support-center/faq.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">FAQ</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/support-center/licenses.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Licenses</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/support-center/contact.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Contact Us</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
											</div>
											{/* <!--end:Menu sub--> */}
										</div>
										{/* <!--end:Menu item--> */}
										{/* <!--begin:Menu item--> */}
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											{/* <!--begin:Menu link--> */}
											<span className="menu-link">
												<span className="menu-icon">
													<i className="ki-duotone ki-abstract-28 fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</span>
												<span className="menu-title">User Management</span>
												<span className="menu-arrow"></span>
											</span>
											{/* <!--end:Menu link--> */}
											{/* <!--begin:Menu sub--> */}
											<div className="menu-sub menu-sub-accordion">
												{/* <!--begin:Menu item--> */}
												<div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">
													{/* <!--begin:Menu link--> */}
													<span className="menu-link">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Users</span>
														<span className="menu-arrow"></span>
													</span>
													{/* <!--end:Menu link--> */}
													{/* <!--begin:Menu sub--> */}
													<div className="menu-sub menu-sub-accordion">
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/apps/user-management/users/list.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Users List</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/apps/user-management/users/view.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">View User</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
													</div>
													{/* <!--end:Menu sub--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
													{/* <!--begin:Menu link--> */}
													<span className="menu-link">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Roles</span>
														<span className="menu-arrow"></span>
													</span>
													{/* <!--end:Menu link--> */}
													{/* <!--begin:Menu sub--> */}
													<div className="menu-sub menu-sub-accordion">
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/apps/user-management/roles/list.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Roles List</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/apps/user-management/roles/view.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">View Role</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
													</div>
													{/* <!--end:Menu sub--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/user-management/permissions.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Permissions</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
											</div>
											{/* <!--end:Menu sub--> */}
										</div>
										{/* <!--end:Menu item--> */}
										{/* <!--begin:Menu item--> */}
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											{/* <!--begin:Menu link--> */}
											<span className="menu-link">
												<span className="menu-icon">
													<i className="ki-duotone ki-abstract-38 fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</span>
												<span className="menu-title">Customers</span>
												<span className="menu-arrow"></span>
											</span>
											{/* <!--end:Menu link--> */}
											{/* <!--begin:Menu sub--> */}
											<div className="menu-sub menu-sub-accordion">
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/customers/getting-started.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Getting Started</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/customers/list.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Customer Listing</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/customers/view.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Customer Details</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
											</div>
											{/* <!--end:Menu sub--> */}
										</div>
										{/* <!--end:Menu item--> */}
										{/* <!--begin:Menu item--> */}
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											{/* <!--begin:Menu link--> */}
											<span className="menu-link">
												<span className="menu-icon">
													<i className="ki-duotone ki-map fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
														<span className="path3"></span>
													</i>
												</span>
												<span className="menu-title">Subscription</span>
												<span className="menu-arrow"></span>
											</span>
											{/* <!--end:Menu link--> */}
											{/* <!--begin:Menu sub--> */}
											<div className="menu-sub menu-sub-accordion">
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/subscriptions/getting-started.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Getting Started</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/subscriptions/list.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Subscription List</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/subscriptions/add.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Add Subscription</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/subscriptions/view.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">View Subscription</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
											</div>
											{/* <!--end:Menu sub--> */}
										</div>
										{/* <!--end:Menu item--> */}
										{/* <!--begin:Menu item--> */}
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											{/* <!--begin:Menu link--> */}
											<span className="menu-link">
												<span className="menu-icon">
													<i className="ki-duotone ki-credit-cart fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</span>
												<span className="menu-title">Invoice Manager</span>
												<span className="menu-arrow"></span>
											</span>
											{/* <!--end:Menu link--> */}
											{/* <!--begin:Menu sub--> */}
											<div className="menu-sub menu-sub-accordion">
												{/* <!--begin:Menu item--> */}
												<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
													{/* <!--begin:Menu link--> */}
													<span className="menu-link">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">View Invoices</span>
														<span className="menu-arrow"></span>
													</span>
													{/* <!--end:Menu link--> */}
													{/* <!--begin:Menu sub--> */}
													<div className="menu-sub menu-sub-accordion menu-active-bg">
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/apps/invoices/view/invoice-1.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Invoice 1</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/apps/invoices/view/invoice-2.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Invoice 2</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
														{/* <!--begin:Menu item--> */}
														<div className="menu-item">
															{/* <!--begin:Menu link--> */}
															<a className="menu-link" href="../../demo1/dist/apps/invoices/view/invoice-3.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Invoice 3</span>
															</a>
															{/* <!--end:Menu link--> */}
														</div>
														{/* <!--end:Menu item--> */}
													</div>
													{/* <!--end:Menu sub--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/invoices/create.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Create Invoice</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
											</div>
											{/* <!--end:Menu sub--> */}
										</div>
										{/* <!--end:Menu item--> */}
										{/* <!--begin:Menu item--> */}
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											{/* <!--begin:Menu link--> */}
											<span className="menu-link">
												<span className="menu-icon">
													<i className="ki-duotone ki-switch fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</span>
												<span className="menu-title">File Manager</span>
												<span className="menu-arrow"></span>
											</span>
											{/* <!--end:Menu link--> */}
											{/* <!--begin:Menu sub--> */}
											<div className="menu-sub menu-sub-accordion">
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/file-manager/folders.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Folders</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/file-manager/files.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Files</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/file-manager/blank.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Blank Directory</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/file-manager/settings.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Settings</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
											</div>
											{/* <!--end:Menu sub--> */}
										</div>
										{/* <!--end:Menu item--> */}
										{/* <!--begin:Menu item--> */}
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											{/* <!--begin:Menu link--> */}
											<span className="menu-link">
												<span className="menu-icon">
													<i className="ki-duotone ki-sms fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</span>
												<span className="menu-title">Inbox</span>
												<span className="menu-arrow"></span>
											</span>
											{/* <!--end:Menu link--> */}
											{/* <!--begin:Menu sub--> */}
											<div className="menu-sub menu-sub-accordion">
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/inbox/listing.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Messages</span>
														<span className="menu-badge">
															<span className="badge badge-success">3</span>
														</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/inbox/compose.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Compose</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/inbox/reply.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">View & Reply</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
											</div>
											{/* <!--end:Menu sub--> */}
										</div>
										{/* <!--end:Menu item--> */}
										{/* <!--begin:Menu item--> */}
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											{/* <!--begin:Menu link--> */}
											<span className="menu-link">
												<span className="menu-icon">
													<i className="ki-duotone ki-message-text-2 fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
														<span className="path3"></span>
													</i>
												</span>
												<span className="menu-title">Chat</span>
												<span className="menu-arrow"></span>
											</span>
											{/* <!--end:Menu link--> */}
											{/* <!--begin:Menu sub--> */}
											<div className="menu-sub menu-sub-accordion">
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/chat/private.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Private Chat</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/chat/group.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Group Chat</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/apps/chat/drawer.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Drawer Chat</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
											</div>
											{/* <!--end:Menu sub--> */}
										</div>
										{/* <!--end:Menu item--> */}
										{/* <!--begin:Menu item--> */}
										<div className="menu-item">
											{/* <!--begin:Menu link--> */}
											<a className="menu-link" href="../../demo1/dist/apps/calendar.html">
												<span className="menu-icon">
													<i className="ki-duotone ki-calendar-8 fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
														<span className="path3"></span>
														<span className="path4"></span>
														<span className="path5"></span>
														<span className="path6"></span>
													</i>
												</span>
												<span className="menu-title">Calendar</span>
											</a>
											{/* <!--end:Menu link--> */}
										</div>
										{/* <!--end:Menu item--> */}
										{/* <!--begin:Menu item--> */}
										<div className="menu-item pt-5">
											{/* <!--begin:Menu content--> */}
											<div className="menu-content">
												<span className="menu-heading fw-bold text-uppercase fs-7">Layouts</span>
											</div>
											{/* <!--end:Menu content--> */}
										</div>
										{/* <!--end:Menu item--> */}
										{/* <!--begin:Menu item--> */}
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											{/* <!--begin:Menu link--> */}
											<span className="menu-link">
												<span className="menu-icon">
													<i className="ki-duotone ki-element-7 fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</span>
												<span className="menu-title">Layout Options</span>
												<span className="menu-arrow"></span>
											</span>
											{/* <!--end:Menu link--> */}
											{/* <!--begin:Menu sub--> */}
											<div className="menu-sub menu-sub-accordion">
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/layouts/light-sidebar.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Light Sidebar</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/layouts/dark-sidebar.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Dark Sidebar</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/layouts/light-header.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Light Header</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
												{/* <!--begin:Menu item--> */}
												<div className="menu-item">
													{/* <!--begin:Menu link--> */}
													<a className="menu-link" href="../../demo1/dist/layouts/dark-header.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Dark Header</span>
													</a>
													{/* <!--end:Menu link--> */}
												</div>
												{/* <!--end:Menu item--> */}
											</div>
											{/* <!--end:Menu sub--> */}
										</div>
										{/* <!--end:Menu item--> */}
										{/* <!--begin:Menu item--> */}
										<div className="menu-item">
											{/* <!--begin:Menu link--> */}
											<a className="menu-link" href="https://preview.keenthemes.com/keen/demo1/layout-builder.html">
												<span className="menu-icon">
													<i className="ki-duotone ki-abstract-13 fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</span>
												<span className="menu-title">Layout Builder</span>
											</a>
											{/* <!--end:Menu link--> */}
										</div>
										{/* <!--end:Menu item--> */}
										{/* <!--begin:Menu item--> */}
										<div className="menu-item pt-5">
											{/* <!--begin:Menu content--> */}
											<div className="menu-content">
												<span className="menu-heading fw-bold text-uppercase fs-7">Help</span>
											</div>
											{/* <!--end:Menu content--> */}
										</div>
										{/* <!--end:Menu item--> */}
										{/* <!--begin:Menu item--> */}
										<div className="menu-item">
											{/* <!--begin:Menu link--> */}
											<a className="menu-link" href="https://preview.keenthemes.com/html/keen/docs/base/utilities" target="_blank">
												<span className="menu-icon">
													<i className="ki-duotone ki-rocket fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</span>
												<span className="menu-title">Components</span>
											</a>
											{/* <!--end:Menu link--> */}
										</div>
										{/* <!--end:Menu item--> */}
										{/* <!--begin:Menu item--> */}
										<div className="menu-item">
											{/* <!--begin:Menu link--> */}
											<a className="menu-link" href="https://preview.keenthemes.com/html/keen/docs" target="_blank">
												<span className="menu-icon">
													<i className="ki-duotone ki-abstract-26 fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</span>
												<span className="menu-title">Documentation</span>
											</a>
											{/* <!--end:Menu link--> */}
										</div>
										{/* <!--end:Menu item--> */}
										{/* <!--begin:Menu item--> */}
										<div className="menu-item">
											{/* <!--begin:Menu link--> */}
											<a className="menu-link" href="https://preview.keenthemes.com/html/keen/docs/getting-started/changelog" target="_blank">
												<span className="menu-icon">
													<i className="ki-duotone ki-code fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
														<span className="path3"></span>
														<span className="path4"></span>
													</i>
												</span>
												<span className="menu-title">Changelog v3.0.5</span>
											</a>
											{/* <!--end:Menu link--> */}
										</div>
										{/* <!--end:Menu item--> */}
									</div>
									{/* <!--end::Menu--> */}
								</div>
								{/* <!--end::Scroll wrapper--> */}
							</div>
							{/* <!--end::Menu wrapper--> */}
						</div>
						{/* <!--end::sidebar menu--> */}
						{/* <!--begin::Footer--> */}
						<div className="app-sidebar-footer flex-column-auto pt-2 pb-6 px-6" id="kt_app_sidebar_footer">
							<a href="https://preview.keenthemes.com/html/keen/docs" className="btn btn-flex flex-center btn-custom btn-primary overflow-hidden text-nowrap px-0 h-40px w-100" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss-="click" title="200+ in-house components and 3rd-party plugins">
								<span className="btn-label">Docs & Components</span>
								<i className="ki-duotone ki-document btn-icon fs-2 m-0">
									<span className="path1"></span>
									<span className="path2"></span>
								</i>
							</a>
						</div>
						{/* <!--end::Footer--> */}
					</div>
					{/* <!--end::Sidebar--> */}
					{/* <!--begin::Main--> */}
					<div className="app-main flex-column flex-row-fluid" id="kt_app_main">
						{/* <!--begin::Content wrapper--> */}
						<div className="d-flex flex-column flex-column-fluid">
							{/* <!--begin::Toolbar--> */}
							<div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
								{/* <!--begin::Toolbar container--> */}
								<div id="kt_app_toolbar_container" className="app-container container-fluid d-flex flex-stack">
									{/* <!--begin::Page title--> */}
									<div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
										{/* <!--begin::Title--> */}
										<h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">Default</h1>
										{/* <!--end::Title--> */}
										{/* <!--begin::Breadcrumb--> */}
										<ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
											{/* <!--begin::Item--> */}
											<li className="breadcrumb-item text-muted">
												<a href="../../demo1/dist/index.html" className="text-muted text-hover-primary">Home</a>
											</li>
											{/* <!--end::Item--> */}
											{/* <!--begin::Item--> */}
											<li className="breadcrumb-item">
												<span className="bullet bg-gray-400 w-5px h-2px"></span>
											</li>
											{/* <!--end::Item--> */}
											{/* <!--begin::Item--> */}
											<li className="breadcrumb-item text-muted">Dashboards</li>
											{/* <!--end::Item--> */}
										</ul>
										{/* <!--end::Breadcrumb--> */}
									</div>
									{/* <!--end::Page title--> */}
									{/* <!--begin::Actions--> */}
									<div className="d-flex align-items-center gap-2 gap-lg-3">
										{/* <!--begin::Filter menu--> */}
										<div className="d-flex">
											<select name="campaign-type" data-control="select2" data-hide-search="true" className="form-select form-select-sm bg-body border-body w-175px">
												<option value="Twitter" selected="selected">Select Campaign</option>
												<option value="Twitter">Twitter Campaign</option>
												<option value="Twitter">Facebook Campaign</option>
												<option value="Twitter">Adword Campaign</option>
												<option value="Twitter">Carbon Campaign</option>
											</select>
											<a href="#" className="btn btn-icon btn-sm btn-success flex-shrink-0 ms-4" data-bs-toggle="modal" data-bs-target="#kt_modal_create_campaign">
												<i className="ki-duotone ki-plus fs-2"></i>
											</a>
										</div>
										{/* <!--end::Filter menu--> */}
										{/* <!--begin::Secondary button--> */}
										{/* <!--end::Secondary button--> */}
										{/* <!--begin::Primary button--> */}
										{/* <!--end::Primary button--> */}
									</div>
									{/* <!--end::Actions--> */}
								</div>
								{/* <!--end::Toolbar container--> */}
							</div>
							{/* <!--end::Toolbar--> */}
							{/* <!--begin::Content--> */}
							<div id="kt_app_content" className="app-content flex-column-fluid">
								{/* <!--begin::Content container--> */}
								<div id="kt_app_content_container" className="app-container container-fluid">
									{/* <!--begin::Row--> */}
									<div className="row g-5 g-xl-10 mb-5 mb-xl-10">
										{/* <!--begin::Col--> */}
										<div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
											{/* <!--begin::Card widget 20--> */}
											<div className="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-md-50 mb-5 mb-xl-10 s2">
												{/* <!--begin::Header--> */}
												<div className="card-header pt-5">
													{/* <!--begin::Title--> */}
													<div className="card-title d-flex flex-column">
														{/* <!--begin::Amount--> */}
														<span className="fs-2hx fw-bold text-white me-2 lh-1 ls-n2">69</span>
														{/* <!--end::Amount--> */}
														{/* <!--begin::Subtitle--> */}
														<span className="text-white opacity-75 pt-1 fw-semibold fs-6">Active Projects in April</span>
														{/* <!--end::Subtitle--> */}
													</div>
													{/* <!--end::Title--> */}
												</div>
												{/* <!--end::Header--> */}
												{/* <!--begin::Card body--> */}
												<div className="card-body d-flex align-items-end pt-0">
													{/* <!--begin::Progress--> */}
													<div className="d-flex align-items-center flex-column mt-3 w-100">
														<div className="d-flex justify-content-between fw-bold fs-6 text-white opacity-75 w-100 mt-auto mb-2">
															<span>43 Pending</span>
															<span>72%</span>
														</div>
														<div className="h-8px mx-3 w-100 bg-white bg-opacity-50 rounded">
															<div className="bg-white rounded h-8px" role="progressbar s3"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
														</div>
													</div>
													{/* <!--end::Progress--> */}
												</div>
												{/* <!--end::Card body--> */}
											</div>
											{/* <!--end::Card widget 20--> */}
											{/* <!--begin::List widget 26--> */}
											<div className="card card-flush h-md-50 mb-xl-10">
												{/* <!--begin::Header--> */}
												<div className="card-header pt-5">
													{/* <!--begin::Title--> */}
													<h3 className="card-title text-gray-800 fw-bold">External Links</h3>
													{/* <!--end::Title--> */}
													{/* <!--begin::Toolbar--> */}
													<div className="card-toolbar">
														{/* <!--begin::Menu--> */}
														<button className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
															<i className="ki-duotone ki-dots-square fs-1 text-gray-400 me-n1">
																<span className="path1"></span>
																<span className="path2"></span>
																<span className="path3"></span>
																<span className="path4"></span>
															</i>
														</button>
														{/* <!--begin::Menu 2--> */}
														<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
															{/* <!--begin::Menu item--> */}
															<div className="menu-item px-3">
																<div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
															</div>
															{/* <!--end::Menu item--> */}
															{/* <!--begin::Menu separator--> */}
															<div className="separator mb-3 opacity-75"></div>
															{/* <!--end::Menu separator--> */}
															{/* <!--begin::Menu item--> */}
															<div className="menu-item px-3">
																<a href="#" className="menu-link px-3">New Ticket</a>
															</div>
															{/* <!--end::Menu item--> */}
															{/* <!--begin::Menu item--> */}
															<div className="menu-item px-3">
																<a href="#" className="menu-link px-3">New Customer</a>
															</div>
															{/* <!--end::Menu item--> */}
															{/* <!--begin::Menu item--> */}
															<div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
																{/* <!--begin::Menu item--> */}
																<a href="#" className="menu-link px-3">
																	<span className="menu-title">New Group</span>
																	<span className="menu-arrow"></span>
																</a>
																{/* <!--end::Menu item--> */}
																{/* <!--begin::Menu sub--> */}
																<div className="menu-sub menu-sub-dropdown w-175px py-4">
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3">Admin Group</a>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3">Staff Group</a>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3">Member Group</a>
																	</div>
																	{/* <!--end::Menu item--> */}
																</div>
																{/* <!--end::Menu sub--> */}
															</div>
															{/* <!--end::Menu item--> */}
															{/* <!--begin::Menu item--> */}
															<div className="menu-item px-3">
																<a href="#" className="menu-link px-3">New Contact</a>
															</div>
															{/* <!--end::Menu item--> */}
															{/* <!--begin::Menu separator--> */}
															<div className="separator mt-3 opacity-75"></div>
															{/* <!--end::Menu separator--> */}
															{/* <!--begin::Menu item--> */}
															<div className="menu-item px-3">
																<div className="menu-content px-3 py-3">
																	<a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
																</div>
															</div>
															{/* <!--end::Menu item--> */}
														</div>
														{/* <!--end::Menu 2--> */}
														{/* <!--end::Menu--> */}
													</div>
													{/* <!--end::Toolbar--> */}
												</div>
												{/* <!--end::Header--> */}
												{/* <!--begin::Body--> */}
												<div className="card-body pt-5">
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack">
														{/* <!--begin::Section--> */}
														<a href="#" className="text-primary fw-semibold fs-6 me-2">Avg. Client Rating</a>
														{/* <!--end::Section--> */}
														{/* <!--begin::Action--> */}
														<button type="button" className="btn btn-icon btn-sm h-auto btn-color-gray-400 btn-active-color-primary justify-content-end">
															<i className="ki-duotone ki-exit-right-corner fs-2">
																<span className="path1"></span>
																<span className="path2"></span>
															</i>
														</button>
														{/* <!--end::Action--> */}
													</div>
													{/* <!--end::Item--> */}
													{/* <!--begin::Separator--> */}
													<div className="separator separator-dashed my-3"></div>
													{/* <!--end::Separator--> */}
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack">
														{/* <!--begin::Section--> */}
														<a href="#" className="text-primary fw-semibold fs-6 me-2">Instagram Followers</a>
														{/* <!--end::Section--> */}
														{/* <!--begin::Action--> */}
														<button type="button" className="btn btn-icon btn-sm h-auto btn-color-gray-400 btn-active-color-primary justify-content-end">
															<i className="ki-duotone ki-exit-right-corner fs-2">
																<span className="path1"></span>
																<span className="path2"></span>
															</i>
														</button>
														{/* <!--end::Action--> */}
													</div>
													{/* <!--end::Item--> */}
													{/* <!--begin::Separator--> */}
													<div className="separator separator-dashed my-3"></div>
													{/* <!--end::Separator--> */}
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack">
														{/* <!--begin::Section--> */}
														<a href="#" className="text-primary fw-semibold fs-6 me-2">Google Ads CPC</a>
														{/* <!--end::Section--> */}
														{/* <!--begin::Action--> */}
														<button type="button" className="btn btn-icon btn-sm h-auto btn-color-gray-400 btn-active-color-primary justify-content-end">
															<i className="ki-duotone ki-exit-right-corner fs-2">
																<span className="path1"></span>
																<span className="path2"></span>
															</i>
														</button>
														{/* <!--end::Action--> */}
													</div>
													{/* <!--end::Item--> */}
												</div>
												{/* <!--end::Body--> */}
											</div>
											{/* <!--end::LIst widget 26--> */}
										</div>
										{/* <!--end::Col--> */}
										{/* <!--begin::Col--> */}
										<div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
											{/* <!--begin::Card widget 17--> */}
											<div className="card card-flush h-md-50 mb-5 mb-xl-10">
												{/* <!--begin::Header--> */}
												<div className="card-header pt-5">
													{/* <!--begin::Title--> */}
													<div className="card-title d-flex flex-column">
														{/* <!--begin::Info--> */}
														<div className="d-flex align-items-center">
															{/* <!--begin::Currency--> */}
															<span className="fs-4 fw-semibold text-gray-400 me-1 align-self-start">$</span>
															{/* <!--end::Currency--> */}
															{/* <!--begin::Amount--> */}
															<span className="fs-2hx fw-bold text-dark me-2 lh-1 ls-n2">69,700</span>
															{/* <!--end::Amount--> */}
															{/* <!--begin::Badge--> */}
															<span className="badge badge-light-success fs-base">
															<i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
																<span className="path1"></span>
																<span className="path2"></span>
															</i>2.2%</span>
															{/* <!--end::Badge--> */}
														</div>
														{/* <!--end::Info--> */}
														{/* <!--begin::Subtitle--> */}
														<span className="text-gray-400 pt-1 fw-semibold fs-6">Projects Earnings in April</span>
														{/* <!--end::Subtitle--> */}
													</div>
													{/* <!--end::Title--> */}
												</div>
												{/* <!--end::Header--> */}
												{/* <!--begin::Card body--> */}
												<div className="card-body pt-2 pb-4 d-flex flex-wrap align-items-center">
													{/* <!--begin::Chart--> */}
													<div className="d-flex flex-center me-5 pt-2">
														<div id="kt_card_widget_17_chart s4" data-kt-size="70" data-kt-line="11"></div>
													</div>
													{/* <!--end::Chart--> */}
													{/* <!--begin::Labels--> */}
													<div className="d-flex flex-column content-justify-center flex-row-fluid">
														{/* <!--begin::Label--> */}
														<div className="d-flex fw-semibold align-items-center">
															{/* <!--begin::Bullet--> */}
															<div className="bullet w-8px h-3px rounded-2 bg-success me-3"></div>
															{/* <!--end::Bullet--> */}
															{/* <!--begin::Label--> */}
															<div className="text-gray-500 flex-grow-1 me-4">Leaf CRM</div>
															{/* <!--end::Label--> */}
															{/* <!--begin::Stats--> */}
															<div className="fw-bolder text-gray-700 text-xxl-end">$7,660</div>
															{/* <!--end::Stats--> */}
														</div>
														{/* <!--end::Label--> */}
														{/* <!--begin::Label--> */}
														<div className="d-flex fw-semibold align-items-center my-3">
															{/* <!--begin::Bullet--> */}
															<div className="bullet w-8px h-3px rounded-2 bg-primary me-3"></div>
															{/* <!--end::Bullet--> */}
															{/* <!--begin::Label--> */}
															<div className="text-gray-500 flex-grow-1 me-4">Mivy App</div>
															{/* <!--end::Label--> */}
															{/* <!--begin::Stats--> */}
															<div className="fw-bolder text-gray-700 text-xxl-end">$2,820</div>
															{/* <!--end::Stats--> */}
														</div>
														{/* <!--end::Label--> */}
														{/* <!--begin::Label--> */}
														<div className="d-flex fw-semibold align-items-center">
															{/* <!--begin::Bullet--> */}
															<div className="bullet w-8px h-3px rounded-2 me-3 s5" ></div>
															{/* <!--end::Bullet--> */}
															{/* <!--begin::Label--> */}
															<div className="text-gray-500 flex-grow-1 me-4">Others</div>
															{/* <!--end::Label--> */}
															{/* <!--begin::Stats--> */}
															<div className="fw-bolder text-gray-700 text-xxl-end">$45,257</div>
															{/* <!--end::Stats--> */}
														</div>
														{/* <!--end::Label--> */}
													</div>
													{/* <!--end::Labels--> */}
												</div>
												{/* <!--end::Card body--> */}
											</div>
											{/* <!--end::Card widget 17--> */}
											{/* <!--begin::List widget 25--> */}
											<div className="card card-flush h-lg-50">
												{/* <!--begin::Header--> */}
												<div className="card-header pt-5">
													{/* <!--begin::Title--> */}
													<h3 className="card-title text-gray-800">Highlights</h3>
													{/* <!--end::Title--> */}
													{/* <!--begin::Toolbar--> */}
													<div className="card-toolbar d-none">
														{/* <!--begin::Daterangepicker(defined in src/js/layout/app.js)--> */}
														<div data-kt-daterangepicker="true" data-kt-daterangepicker-opens="left" className="btn btn-sm btn-light d-flex align-items-center px-4">
															{/* <!--begin::Display range--> */}
															<div className="text-gray-600 fw-bold">Loading date range...</div>
															{/* <!--end::Display range--> */}
															<i className="ki-duotone ki-calendar-8 fs-1 ms-2 me-0">
																<span className="path1"></span>
																<span className="path2"></span>
																<span className="path3"></span>
																<span className="path4"></span>
																<span className="path5"></span>
																<span className="path6"></span>
															</i>
														</div>
														{/* <!--end::Daterangepicker--> */}
													</div>
													{/* <!--end::Toolbar--> */}
												</div>
												{/* <!--end::Header--> */}
												{/* <!--begin::Body--> */}
												<div className="card-body pt-5">
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack">
														{/* <!--begin::Section--> */}
														<div className="text-gray-700 fw-semibold fs-6 me-2">Avg. Client Rating</div>
														{/* <!--end::Section--> */}
														{/* <!--begin::Statistics--> */}
														<div className="d-flex align-items-senter">
															<i className="ki-duotone ki-arrow-up-right fs-2 text-success me-2">
																<span className="path1"></span>
																<span className="path2"></span>
															</i>
															{/* <!--begin::Number--> */}
															<span className="text-gray-900 fw-bolder fs-6">7.8</span>
															{/* <!--end::Number--> */}
															<span className="text-gray-400 fw-bold fs-6">/10</span>
														</div>
														{/* <!--end::Statistics--> */}
													</div>
													{/* <!--end::Item--> */}
													{/* <!--begin::Separator--> */}
													<div className="separator separator-dashed my-3"></div>
													{/* <!--end::Separator--> */}
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack">
														{/* <!--begin::Section--> */}
														<div className="text-gray-700 fw-semibold fs-6 me-2">Avg. Quotes</div>
														{/* <!--end::Section--> */}
														{/* <!--begin::Statistics--> */}
														<div className="d-flex align-items-senter">
															<i className="ki-duotone ki-arrow-down-right fs-2 text-danger me-2">
																<span className="path1"></span>
																<span className="path2"></span>
															</i>
															{/* <!--begin::Number--> */}
															<span className="text-gray-900 fw-bolder fs-6">730</span>
															{/* <!--end::Number--> */}
														</div>
														{/* <!--end::Statistics--> */}
													</div>
													{/* <!--end::Item--> */}
													{/* <!--begin::Separator--> */}
													<div className="separator separator-dashed my-3"></div>
													{/* <!--end::Separator--> */}
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack">
														{/* <!--begin::Section--> */}
														<div className="text-gray-700 fw-semibold fs-6 me-2">Avg. Agent Earnings</div>
														{/* <!--end::Section--> */}
														{/* <!--begin::Statistics--> */}
														<div className="d-flex align-items-senter">
															<i className="ki-duotone ki-arrow-up-right fs-2 text-success me-2">
																<span className="path1"></span>
																<span className="path2"></span>
															</i>
															{/* <!--begin::Number--> */}
															<span className="text-gray-900 fw-bolder fs-6">$2,309</span>
															{/* <!--end::Number--> */}
														</div>
														{/* <!--end::Statistics--> */}
													</div>
													{/* <!--end::Item--> */}
												</div>
												{/* <!--end::Body--> */}
											</div>
											{/* <!--end::LIst widget 25--> */}
										</div>
										{/* <!--end::Col--> */}
										{/* <!--begin::Col--> */}
										<div className="col-xxl-6">
											{/* <!--begin::Tables widget 16--> */}
											<div className="card card-flush h-md-100">
												{/* <!--begin::Header--> */}
												<div className="card-header pt-5">
													{/* <!--begin::Title--> */}
													<h3 className="card-title align-items-start flex-column">
														<span className="card-label fw-bold text-gray-800">Authors Achievements</span>
														<span className="text-gray-400 mt-1 fw-semibold fs-6">Avg. 69.34% Conv. Rate</span>
													</h3>
													{/* <!--end::Title--> */}
													{/* <!--begin::Toolbar--> */}
													<div className="card-toolbar">
														{/* <!--begin::Menu--> */}
														<button className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
															<i className="ki-duotone ki-dots-square fs-1 text-gray-400 me-n1">
																<span className="path1"></span>
																<span className="path2"></span>
																<span className="path3"></span>
																<span className="path4"></span>
															</i>
														</button>
														{/* <!--begin::Menu 2--> */}
														<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
															{/* <!--begin::Menu item--> */}
															<div className="menu-item px-3">
																<div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
															</div>
															{/* <!--end::Menu item--> */}
															{/* <!--begin::Menu separator--> */}
															<div className="separator mb-3 opacity-75"></div>
															{/* <!--end::Menu separator--> */}
															{/* <!--begin::Menu item--> */}
															<div className="menu-item px-3">
																<a href="#" className="menu-link px-3">New Ticket</a>
															</div>
															{/* <!--end::Menu item--> */}
															{/* <!--begin::Menu item--> */}
															<div className="menu-item px-3">
																<a href="#" className="menu-link px-3">New Customer</a>
															</div>
															{/* <!--end::Menu item--> */}
															{/* <!--begin::Menu item--> */}
															<div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
																{/* <!--begin::Menu item--> */}
																<a href="#" className="menu-link px-3">
																	<span className="menu-title">New Group</span>
																	<span className="menu-arrow"></span>
																</a>
																{/* <!--end::Menu item--> */}
																{/* <!--begin::Menu sub--> */}
																<div className="menu-sub menu-sub-dropdown w-175px py-4">
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3">Admin Group</a>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3">Staff Group</a>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3">Member Group</a>
																	</div>
																	{/* <!--end::Menu item--> */}
																</div>
																{/* <!--end::Menu sub--> */}
															</div>
															{/* <!--end::Menu item--> */}
															{/* <!--begin::Menu item--> */}
															<div className="menu-item px-3">
																<a href="#" className="menu-link px-3">New Contact</a>
															</div>
															{/* <!--end::Menu item--> */}
															{/* <!--begin::Menu separator--> */}
															<div className="separator mt-3 opacity-75"></div>
															{/* <!--end::Menu separator--> */}
															{/* <!--begin::Menu item--> */}
															<div className="menu-item px-3">
																<div className="menu-content px-3 py-3">
																	<a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
																</div>
															</div>
															{/* <!--end::Menu item--> */}
														</div>
														{/* <!--end::Menu 2--> */}
														{/* <!--end::Menu--> */}
													</div>
													{/* <!--end::Toolbar--> */}
												</div>
												{/* <!--end::Header--> */}
												{/* <!--begin::Body--> */}
												<div className="card-body pt-6">
													{/* <!--begin::Nav--> */}
													<ul className="nav nav-pills nav-pills-custom mb-3">
														{/* <!--begin::Item--> */}
														<li className="nav-item mb-3 me-3 me-lg-6">
															{/* <!--begin::Link--> */}
															<a className="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2 active" id="kt_stats_widget_16_tab_link_1" data-bs-toggle="pill" href="#kt_stats_widget_16_tab_1">
																{/* <!--begin::Icon--> */}
																<div className="nav-icon mb-3">
																	<i className="ki-duotone ki-car fs-1">
																		<span className="path1"></span>
																		<span className="path2"></span>
																		<span className="path3"></span>
																		<span className="path4"></span>
																		<span className="path5"></span>
																	</i>
																</div>
																{/* <!--end::Icon--> */}
																{/* <!--begin::Title--> */}
																<span className="nav-text text-gray-800 fw-bold fs-6 lh-1">SaaS</span>
																{/* <!--end::Title--> */}
																{/* <!--begin::Bullet--> */}
																<span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
																{/* <!--end::Bullet--> */}
															</a>
															{/* <!--end::Link--> */}
														</li>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<li className="nav-item mb-3 me-3 me-lg-6">
															{/* <!--begin::Link--> */}
															<a className="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2" id="kt_stats_widget_16_tab_link_2" data-bs-toggle="pill" href="#kt_stats_widget_16_tab_2">
																{/* <!--begin::Icon--> */}
																<div className="nav-icon mb-3">
																	<i className="ki-duotone ki-bitcoin fs-1">
																		<span className="path1"></span>
																		<span className="path2"></span>
																	</i>
																</div>
																{/* <!--end::Icon--> */}
																{/* <!--begin::Title--> */}
																<span className="nav-text text-gray-800 fw-bold fs-6 lh-1">Crypto</span>
																{/* <!--end::Title--> */}
																{/* <!--begin::Bullet--> */}
																<span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
																{/* <!--end::Bullet--> */}
															</a>
															{/* <!--end::Link--> */}
														</li>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<li className="nav-item mb-3 me-3 me-lg-6">
															{/* <!--begin::Link--> */}
															<a className="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2" id="kt_stats_widget_16_tab_link_3" data-bs-toggle="pill" href="#kt_stats_widget_16_tab_3">
																{/* <!--begin::Icon--> */}
																<div className="nav-icon mb-3">
																	<i className="ki-duotone ki-like fs-1">
																		<span className="path1"></span>
																		<span className="path2"></span>
																	</i>
																</div>
																{/* <!--end::Icon--> */}
																{/* <!--begin::Title--> */}
																<span className="nav-text text-gray-800 fw-bold fs-6 lh-1">Social</span>
																{/* <!--end::Title--> */}
																{/* <!--begin::Bullet--> */}
																<span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
																{/* <!--end::Bullet--> */}
															</a>
															{/* <!--end::Link--> */}
														</li>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<li className="nav-item mb-3 me-3 me-lg-6">
															{/* <!--begin::Link--> */}
															<a className="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2" id="kt_stats_widget_16_tab_link_4" data-bs-toggle="pill" href="#kt_stats_widget_16_tab_4">
																{/* <!--begin::Icon--> */}
																<div className="nav-icon mb-3">
																	<i className="ki-duotone ki-tablet fs-1">
																		<span className="path1"></span>
																		<span className="path2"></span>
																		<span className="path3"></span>
																	</i>
																</div>
																{/* <!--end::Icon--> */}
																{/* <!--begin::Title--> */}
																<span className="nav-text text-gray-800 fw-bold fs-6 lh-1">Mobile</span>
																{/* <!--end::Title--> */}
																{/* <!--begin::Bullet--> */}
																<span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
																{/* <!--end::Bullet--> */}
															</a>
															{/* <!--end::Link--> */}
														</li>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<li className="nav-item mb-3 me-3 me-lg-6">
															{/* <!--begin::Link--> */}
															<a className="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2" id="kt_stats_widget_16_tab_link_5" data-bs-toggle="pill" href="#kt_stats_widget_16_tab_5">
																{/* <!--begin::Icon--> */}
																<div className="nav-icon mb-3">
																	<i className="ki-duotone ki-send fs-1">
																		<span className="path1"></span>
																		<span className="path2"></span>
																	</i>
																</div>
																{/* <!--end::Icon--> */}
																{/* <!--begin::Title--> */}
																<span className="nav-text text-gray-800 fw-bold fs-6 lh-1">Others</span>
																{/* <!--end::Title--> */}
																{/* <!--begin::Bullet--> */}
																<span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
																{/* <!--end::Bullet--> */}
															</a>
															{/* <!--end::Link--> */}
														</li>
														{/* <!--end::Item--> */}
													</ul>
													{/* <!--end::Nav--> */}
													{/* <!--begin::Tab Content--> */}
													<div className="tab-content">
														{/* <!--begin::Tap pane--> */}
														<div className="tab-pane fade show active" id="kt_stats_widget_16_tab_1">
															{/* <!--begin::Table container--> */}
															<div className="table-responsive">
																{/* <!--begin::Table--> */}
																<table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
																	{/* <!--begin::Table head--> */}
																	<thead>
																		<tr className="fs-7 fw-bold text-gray-400 border-bottom-0">
																			<th className="p-0 pb-3 min-w-150px text-start">AUTHOR</th>
																			<th className="p-0 pb-3 min-w-100px text-end pe-13">CONV.</th>
																			<th className="p-0 pb-3 w-125px text-end pe-7">CHART</th>
																			<th className="p-0 pb-3 w-50px text-end">VIEW</th>
																		</tr>
																	</thead>
																	{/* <!--end::Table head--> */}
																	{/* <!--begin::Table body--> */}
																	<tbody>
																		<tr>
																			<td>
																				<div className="d-flex align-items-center">
																					<div className="symbol symbol-circle symbol-50px me-3">
																						<img src="%PUBLIC_URL%/assets/media/avatars/300-3.jpg" className="" alt="" />
																					</div>
																					<div className="d-flex justify-content-start flex-column">
																						<a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Guy Hawkins</a>
																						<span className="text-gray-400 fw-semibold d-block fs-7">Haiti</span>
																					</div>
																				</div>
																			</td>
																			<td className="text-end pe-13">
																				<span className="text-gray-600 fw-bold fs-6">78.34%</span>
																			</td>
																			<td className="text-end pe-0">
																				<div id="kt_table_widget_16_chart_1_1" className="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
																			</td>
																			<td className="text-end">
																				<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
																					<i className="ki-duotone ki-black-right fs-2 text-gray-500"></i>
																				</a>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<div className="d-flex align-items-center">
																					<div className="symbol symbol-circle symbol-50px me-3">
																						<img src="%PUBLIC_URL%/assets/media/avatars/300-2.jpg" className="" alt="" />
																					</div>
																					<div className="d-flex justify-content-start flex-column">
																						<a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Jane Cooper</a>
																						<span className="text-gray-400 fw-semibold d-block fs-7">Monaco</span>
																					</div>
																				</div>
																			</td>
																			<td className="text-end pe-13">
																				<span className="text-gray-600 fw-bold fs-6">63.83%</span>
																			</td>
																			<td className="text-end pe-0">
																				<div id="kt_table_widget_16_chart_1_2" className="h-50px mt-n8 pe-7" data-kt-chart-color="danger"></div>
																			</td>
																			<td className="text-end">
																				<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
																					<i className="ki-duotone ki-black-right fs-2 text-gray-500"></i>
																				</a>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<div className="d-flex align-items-center">
																					<div className="symbol symbol-circle symbol-50px me-3">
																						<img src="%PUBLIC_URL%/assets/media/avatars/300-9.jpg" className="" alt="" />
																					</div>
																					<div className="d-flex justify-content-start flex-column">
																						<a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Jacob Jones</a>
																						<span className="text-gray-400 fw-semibold d-block fs-7">Poland</span>
																					</div>
																				</div>
																			</td>
																			<td className="text-end pe-13">
																				<span className="text-gray-600 fw-bold fs-6">92.56%</span>
																			</td>
																			<td className="text-end pe-0">
																				<div id="kt_table_widget_16_chart_1_3" className="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
																			</td>
																			<td className="text-end">
																				<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
																					<i className="ki-duotone ki-black-right fs-2 text-gray-500"></i>
																				</a>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<div className="d-flex align-items-center">
																					<div className="symbol symbol-circle symbol-50px me-3">
																						<img src="%PUBLIC_URL%/assets/media/avatars/300-7.jpg" className="" alt="" />
																					</div>
																					<div className="d-flex justify-content-start flex-column">
																						<a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Cody Fishers</a>
																						<span className="text-gray-400 fw-semibold d-block fs-7">Mexico</span>
																					</div>
																				</div>
																			</td>
																			<td className="text-end pe-13">
																				<span className="text-gray-600 fw-bold fs-6">63.08%</span>
																			</td>
																			<td className="text-end pe-0">
																				<div id="kt_table_widget_16_chart_1_4" className="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
																			</td>
																			<td className="text-end">
																				<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
																					<i className="ki-duotone ki-black-right fs-2 text-gray-500"></i>
																				</a>
																			</td>
																		</tr>
																	</tbody>
																	{/* <!--end::Table body--> */}
																</table>
																{/* <!--end::Table--> */}
															</div>
															{/* <!--end::Table container--> */}
														</div>
														{/* <!--end::Tap pane--> */}
														{/* <!--begin::Tap pane--> */}
														<div className="tab-pane fade" id="kt_stats_widget_16_tab_2">
															{/* <!--begin::Table container--> */}
															<div className="table-responsive">
																{/* <!--begin::Table--> */}
																<table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
																	{/* <!--begin::Table head--> */}
																	<thead>
																		<tr className="fs-7 fw-bold text-gray-400 border-bottom-0">
																			<th className="p-0 pb-3 min-w-150px text-start">AUTHOR</th>
																			<th className="p-0 pb-3 min-w-100px text-end pe-13">CONV.</th>
																			<th className="p-0 pb-3 w-125px text-end pe-7">CHART</th>
																			<th className="p-0 pb-3 w-50px text-end">VIEW</th>
																		</tr>
																	</thead>
																	{/* <!--end::Table head--> */}
																	{/* <!--begin::Table body--> */}
																	<tbody>
																		<tr>
																			<td>
																				<div className="d-flex align-items-center">
																					<div className="symbol symbol-circle symbol-50px me-3">
																						<img src="%PUBLIC_URL%/assets/media/avatars/300-25.jpg" className="" alt="" />
																					</div>
																					<div className="d-flex justify-content-start flex-column">
																						<a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Brooklyn Simmons</a>
																						<span className="text-gray-400 fw-semibold d-block fs-7">Poland</span>
																					</div>
																				</div>
																			</td>
																			<td className="text-end pe-13">
																				<span className="text-gray-600 fw-bold fs-6">85.23%</span>
																			</td>
																			<td className="text-end pe-0">
																				<div id="kt_table_widget_16_chart_2_1" className="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
																			</td>
																			<td className="text-end">
																				<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
																					<i className="ki-duotone ki-black-right fs-2 text-gray-500"></i>
																				</a>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<div className="d-flex align-items-center">
																					<div className="symbol symbol-circle symbol-50px me-3">
																						<img src="%PUBLIC_URL%/assets/media/avatars/300-24.jpg" className="" alt="" />
																					</div>
																					<div className="d-flex justify-content-start flex-column">
																						<a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Esther Howard</a>
																						<span className="text-gray-400 fw-semibold d-block fs-7">Mexico</span>
																					</div>
																				</div>
																			</td>
																			<td className="text-end pe-13">
																				<span className="text-gray-600 fw-bold fs-6">74.83%</span>
																			</td>
																			<td className="text-end pe-0">
																				<div id="kt_table_widget_16_chart_2_2" className="h-50px mt-n8 pe-7" data-kt-chart-color="danger"></div>
																			</td>
																			<td className="text-end">
																				<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
																					<i className="ki-duotone ki-black-right fs-2 text-gray-500"></i>
																				</a>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<div className="d-flex align-items-center">
																					<div className="symbol symbol-circle symbol-50px me-3">
																						<img src="%PUBLIC_URL%/assets/media/avatars/300-20.jpg" className="" alt="" />
																					</div>
																					<div className="d-flex justify-content-start flex-column">
																						<a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Annette Black</a>
																						<span className="text-gray-400 fw-semibold d-block fs-7">Haiti</span>
																					</div>
																				</div>
																			</td>
																			<td className="text-end pe-13">
																				<span className="text-gray-600 fw-bold fs-6">90.06%</span>
																			</td>
																			<td className="text-end pe-0">
																				<div id="kt_table_widget_16_chart_2_3" className="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
																			</td>
																			<td className="text-end">
																				<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
																					<i className="ki-duotone ki-black-right fs-2 text-gray-500"></i>
																				</a>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<div className="d-flex align-items-center">
																					<div className="symbol symbol-circle symbol-50px me-3">
																						<img src="%PUBLIC_URL%/assets/media/avatars/300-17.jpg" className="" alt="" />
																					</div>
																					<div className="d-flex justify-content-start flex-column">
																						<a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Marvin McKinney</a>
																						<span className="text-gray-400 fw-semibold d-block fs-7">Monaco</span>
																					</div>
																				</div>
																			</td>
																			<td className="text-end pe-13">
																				<span className="text-gray-600 fw-bold fs-6">54.08%</span>
																			</td>
																			<td className="text-end pe-0">
																				<div id="kt_table_widget_16_chart_2_4" className="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
																			</td>
																			<td className="text-end">
																				<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
																					<i className="ki-duotone ki-black-right fs-2 text-gray-500"></i>
																				</a>
																			</td>
																		</tr>
																	</tbody>
																	{/* <!--end::Table body--> */}
																</table>
																{/* <!--end::Table--> */}
															</div>
															{/* <!--end::Table container--> */}
														</div>
														{/* <!--end::Tap pane--> */}
														{/* <!--begin::Tap pane--> */}
														<div className="tab-pane fade" id="kt_stats_widget_16_tab_3">
															{/* <!--begin::Table container--> */}
															<div className="table-responsive">
																{/* <!--begin::Table--> */}
																<table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
																	{/* <!--begin::Table head--> */}
																	<thead>
																		<tr className="fs-7 fw-bold text-gray-400 border-bottom-0">
																			<th className="p-0 pb-3 min-w-150px text-start">AUTHOR</th>
																			<th className="p-0 pb-3 min-w-100px text-end pe-13">CONV.</th>
																			<th className="p-0 pb-3 w-125px text-end pe-7">CHART</th>
																			<th className="p-0 pb-3 w-50px text-end">VIEW</th>
																		</tr>
																	</thead>
																	{/* <!--end::Table head--> */}
																	{/* <!--begin::Table body--> */}
																	<tbody>
																		<tr>
																			<td>
																				<div className="d-flex align-items-center">
																					<div className="symbol symbol-circle symbol-50px me-3">
																						<img src="%PUBLIC_URL%/assets/media/avatars/300-11.jpg" className="" alt="" />
																					</div>
																					<div className="d-flex justify-content-start flex-column">
																						<a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Jacob Jones</a>
																						<span className="text-gray-400 fw-semibold d-block fs-7">New York</span>
																					</div>
																				</div>
																			</td>
																			<td className="text-end pe-13">
																				<span className="text-gray-600 fw-bold fs-6">52.34%</span>
																			</td>
																			<td className="text-end pe-0">
																				<div id="kt_table_widget_16_chart_3_1" className="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
																			</td>
																			<td className="text-end">
																				<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
																					<i className="ki-duotone ki-black-right fs-2 text-gray-500"></i>
																				</a>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<div className="d-flex align-items-center">
																					<div className="symbol symbol-circle symbol-50px me-3">
																						<img src="%PUBLIC_URL%/assets/media/avatars/300-23.jpg" className="" alt="" />
																					</div>
																					<div className="d-flex justify-content-start flex-column">
																						<a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Ronald Richards</a>
																						<span className="text-gray-400 fw-semibold d-block fs-7">Madrid</span>
																					</div>
																				</div>
																			</td>
																			<td className="text-end pe-13">
																				<span className="text-gray-600 fw-bold fs-6">77.65%</span>
																			</td>
																			<td className="text-end pe-0">
																				<div id="kt_table_widget_16_chart_3_2" className="h-50px mt-n8 pe-7" data-kt-chart-color="danger"></div>
																			</td>
																			<td className="text-end">
																				<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
																					<i className="ki-duotone ki-black-right fs-2 text-gray-500"></i>
																				</a>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<div className="d-flex align-items-center">
																					<div className="symbol symbol-circle symbol-50px me-3">
																						<img src="%PUBLIC_URL%/assets/media/avatars/300-4.jpg" className="" alt="" />
																					</div>
																					<div className="d-flex justify-content-start flex-column">
																						<a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Leslie Alexander</a>
																						<span className="text-gray-400 fw-semibold d-block fs-7">Pune</span>
																					</div>
																				</div>
																			</td>
																			<td className="text-end pe-13">
																				<span className="text-gray-600 fw-bold fs-6">82.47%</span>
																			</td>
																			<td className="text-end pe-0">
																				<div id="kt_table_widget_16_chart_3_3" className="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
																			</td>
																			<td className="text-end">
																				<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
																					<i className="ki-duotone ki-black-right fs-2 text-gray-500"></i>
																				</a>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<div className="d-flex align-items-center">
																					<div className="symbol symbol-circle symbol-50px me-3">
																						<img src="%PUBLIC_URL%/assets/media/avatars/300-1.jpg" className="" alt="" />
																					</div>
																					<div className="d-flex justify-content-start flex-column">
																						<a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Courtney Henry</a>
																						<span className="text-gray-400 fw-semibold d-block fs-7">Mexico</span>
																					</div>
																				</div>
																			</td>
																			<td className="text-end pe-13">
																				<span className="text-gray-600 fw-bold fs-6">67.84%</span>
																			</td>
																			<td className="text-end pe-0">
																				<div id="kt_table_widget_16_chart_3_4" className="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
																			</td>
																			<td className="text-end">
																				<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
																					<i className="ki-duotone ki-black-right fs-2 text-gray-500"></i>
																				</a>
																			</td>
																		</tr>
																	</tbody>
																	{/* <!--end::Table body--> */}
																</table>
																{/* <!--end::Table--> */}
															</div>
															{/* <!--end::Table container--> */}
														</div>
														{/* <!--end::Tap pane--> */}
														{/* <!--begin::Tap pane--> */}
														<div className="tab-pane fade" id="kt_stats_widget_16_tab_4">
															{/* <!--begin::Table container--> */}
															<div className="table-responsive">
																{/* <!--begin::Table--> */}
																<table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
																	{/* <!--begin::Table head--> */}
																	<thead>
																		<tr className="fs-7 fw-bold text-gray-400 border-bottom-0">
																			<th className="p-0 pb-3 min-w-150px text-start">AUTHOR</th>
																			<th className="p-0 pb-3 min-w-100px text-end pe-13">CONV.</th>
																			<th className="p-0 pb-3 w-125px text-end pe-7">CHART</th>
																			<th className="p-0 pb-3 w-50px text-end">VIEW</th>
																		</tr>
																	</thead>
																	{/* <!--end::Table head--> */}
																	{/* <!--begin::Table body--> */}
																	<tbody>
																		<tr>
																			<td>
																				<div className="d-flex align-items-center">
																					<div className="symbol symbol-circle symbol-50px me-3">
																						<img src="%PUBLIC_URL%/assets/media/avatars/300-12.jpg" className="" alt="" />
																					</div>
																					<div className="d-flex justify-content-start flex-column">
																						<a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Arlene McCoy</a>
																						<span className="text-gray-400 fw-semibold d-block fs-7">London</span>
																					</div>
																				</div>
																			</td>
																			<td className="text-end pe-13">
																				<span className="text-gray-600 fw-bold fs-6">53.44%</span>
																			</td>
																			<td className="text-end pe-0">
																				<div id="kt_table_widget_16_chart_4_1" className="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
																			</td>
																			<td className="text-end">
																				<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
																					<i className="ki-duotone ki-black-right fs-2 text-gray-500"></i>
																				</a>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<div className="d-flex align-items-center">
																					<div className="symbol symbol-circle symbol-50px me-3">
																						<img src="%PUBLIC_URL%/assets/media/avatars/300-21.jpg" className="" alt="" />
																					</div>
																					<div className="d-flex justify-content-start flex-column">
																						<a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Marvin McKinneyr</a>
																						<span className="text-gray-400 fw-semibold d-block fs-7">Monaco</span>
																					</div>
																				</div>
																			</td>
																			<td className="text-end pe-13">
																				<span className="text-gray-600 fw-bold fs-6">74.64%</span>
																			</td>
																			<td className="text-end pe-0">
																				<div id="kt_table_widget_16_chart_4_2" className="h-50px mt-n8 pe-7" data-kt-chart-color="danger"></div>
																			</td>
																			<td className="text-end">
																				<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
																					<i className="ki-duotone ki-black-right fs-2 text-gray-500"></i>
																				</a>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<div className="d-flex align-items-center">
																					<div className="symbol symbol-circle symbol-50px me-3">
																						<img src="%PUBLIC_URL%/assets/media/avatars/300-30.jpg" className="" alt="" />
																					</div>
																					<div className="d-flex justify-content-start flex-column">
																						<a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Jacob Jones</a>
																						<span className="text-gray-400 fw-semibold d-block fs-7">PManila</span>
																					</div>
																				</div>
																			</td>
																			<td className="text-end pe-13">
																				<span className="text-gray-600 fw-bold fs-6">88.56%</span>
																			</td>
																			<td className="text-end pe-0">
																				<div id="kt_table_widget_16_chart_4_3" className="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
																			</td>
																			<td className="text-end">
																				<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
																					<i className="ki-duotone ki-black-right fs-2 text-gray-500"></i>
																				</a>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<div className="d-flex align-items-center">
																					<div className="symbol symbol-circle symbol-50px me-3">
																						<img src="%PUBLIC_URL%/assets/media/avatars/300-14.jpg" className="" alt="" />
																					</div>
																					<div className="d-flex justify-content-start flex-column">
																						<a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Esther Howard</a>
																						<span className="text-gray-400 fw-semibold d-block fs-7">Iceland</span>
																					</div>
																				</div>
																			</td>
																			<td className="text-end pe-13">
																				<span className="text-gray-600 fw-bold fs-6">63.16%</span>
																			</td>
																			<td className="text-end pe-0">
																				<div id="kt_table_widget_16_chart_4_4" className="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
																			</td>
																			<td className="text-end">
																				<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
																					<i className="ki-duotone ki-black-right fs-2 text-gray-500"></i>
																				</a>
																			</td>
																		</tr>
																	</tbody>
																	{/* <!--end::Table body--> */}
																</table>
																{/* <!--end::Table--> */}
															</div>
															{/* <!--end::Table container--> */}
														</div>
														{/* <!--end::Tap pane--> */}
														{/* <!--begin::Tap pane--> */}
														<div className="tab-pane fade" id="kt_stats_widget_16_tab_5">
															{/* <!--begin::Table container--> */}
															<div className="table-responsive">
																{/* <!--begin::Table--> */}
																<table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
																	{/* <!--begin::Table head--> */}
																	<thead>
																		<tr className="fs-7 fw-bold text-gray-400 border-bottom-0">
																			<th className="p-0 pb-3 min-w-150px text-start">AUTHOR</th>
																			<th className="p-0 pb-3 min-w-100px text-end pe-13">CONV.</th>
																			<th className="p-0 pb-3 w-125px text-end pe-7">CHART</th>
																			<th className="p-0 pb-3 w-50px text-end">VIEW</th>
																		</tr>
																	</thead>
																	{/* <!--end::Table head--> */}
																	{/* <!--begin::Table body--> */}
																	<tbody>
																		<tr>
																			<td>
																				<div className="d-flex align-items-center">
																					<div className="symbol symbol-circle symbol-50px me-3">
																						<img src="%PUBLIC_URL%/assets/media/avatars/300-6.jpg" className="" alt="" />
																					</div>
																					<div className="d-flex justify-content-start flex-column">
																						<a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Jane Cooper</a>
																						<span className="text-gray-400 fw-semibold d-block fs-7">Haiti</span>
																					</div>
																				</div>
																			</td>
																			<td className="text-end pe-13">
																				<span className="text-gray-600 fw-bold fs-6">68.54%</span>
																			</td>
																			<td className="text-end pe-0">
																				<div id="kt_table_widget_16_chart_5_1" className="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
																			</td>
																			<td className="text-end">
																				<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
																					<i className="ki-duotone ki-black-right fs-2 text-gray-500"></i>
																				</a>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<div className="d-flex align-items-center">
																					<div className="symbol symbol-circle symbol-50px me-3">
																						<img src="%PUBLIC_URL%/assets/media/avatars/300-10.jpg" className="" alt="" />
																					</div>
																					<div className="d-flex justify-content-start flex-column">
																						<a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Esther Howard</a>
																						<span className="text-gray-400 fw-semibold d-block fs-7">Kiribati</span>
																					</div>
																				</div>
																			</td>
																			<td className="text-end pe-13">
																				<span className="text-gray-600 fw-bold fs-6">55.83%</span>
																			</td>
																			<td className="text-end pe-0">
																				<div id="kt_table_widget_16_chart_5_2" className="h-50px mt-n8 pe-7" data-kt-chart-color="danger"></div>
																			</td>
																			<td className="text-end">
																				<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
																					<i className="ki-duotone ki-black-right fs-2 text-gray-500"></i>
																				</a>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<div className="d-flex align-items-center">
																					<div className="symbol symbol-circle symbol-50px me-3">
																						<img src="%PUBLIC_URL%/assets/media/avatars/300-9.jpg" className="" alt="" />
																					</div>
																					<div className="d-flex justify-content-start flex-column">
																						<a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Jacob Jones</a>
																						<span className="text-gray-400 fw-semibold d-block fs-7">Poland</span>
																					</div>
																				</div>
																			</td>
																			<td className="text-end pe-13">
																				<span className="text-gray-600 fw-bold fs-6">93.46%</span>
																			</td>
																			<td className="text-end pe-0">
																				<div id="kt_table_widget_16_chart_5_3" className="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
																			</td>
																			<td className="text-end">
																				<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
																					<i className="ki-duotone ki-black-right fs-2 text-gray-500"></i>
																				</a>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<div className="d-flex align-items-center">
																					<div className="symbol symbol-circle symbol-50px me-3">
																						<img src="%PUBLIC_URL%/assets/media/avatars/300-3.jpg" className="" alt="" />
																					</div>
																					<div className="d-flex justify-content-start flex-column">
																						<a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Ralph Edwards</a>
																						<span className="text-gray-400 fw-semibold d-block fs-7">Mexico</span>
																					</div>
																				</div>
																			</td>
																			<td className="text-end pe-13">
																				<span className="text-gray-600 fw-bold fs-6">64.48%</span>
																			</td>
																			<td className="text-end pe-0">
																				<div id="kt_table_widget_16_chart_5_4" className="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
																			</td>
																			<td className="text-end">
																				<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
																					<i className="ki-duotone ki-black-right fs-2 text-gray-500"></i>
																				</a>
																			</td>
																		</tr>
																	</tbody>
																	{/* <!--end::Table body--> */}
																</table>
																{/* <!--end::Table--> */}
															</div>
															{/* <!--end::Table container--> */}
														</div>
														{/* <!--end::Tap pane--> */}
														{/* <!--end::Table container--> */}
													</div>
													{/* <!--end::Tab Content--> */}
												</div>
												{/* <!--end: Card Body--> */}
											</div>
											{/* <!--end::Tables widget 16--> */}
										</div>
										{/* <!--end::Col--> */}
									</div>
									{/* <!--end::Row--> */}
									{/* <!--begin::Row--> */}
									<div className="row gx-5 gx-xl-10">
										{/* <!--begin::Col--> */}
										<div className="col-xxl-6 mb-5 mb-xl-10">
											{/* <!--begin::Chart widget 8--> */}
											<div className="card card-flush h-xl-100">
												{/* <!--begin::Header--> */}
												<div className="card-header pt-5">
													{/* <!--begin::Title--> */}
													<h3 className="card-title align-items-start flex-column">
														<span className="card-label fw-bold text-dark">Performance Overview</span>
														<span className="text-gray-400 mt-1 fw-semibold fs-6">Users from all channels</span>
													</h3>
													{/* <!--end::Title--> */}
													{/* <!--begin::Toolbar--> */}
													<div className="card-toolbar">
														<ul className="nav" id="kt_chart_widget_8_tabs">
															<li className="nav-item">
																<a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light fw-bold px-4 me-1" data-bs-toggle="tab" id="kt_chart_widget_8_week_toggle" href="#kt_chart_widget_8_week_tab">Month</a>
															</li>
															<li className="nav-item">
																<a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light fw-bold px-4 me-1 active" data-bs-toggle="tab" id="kt_chart_widget_8_month_toggle" href="#kt_chart_widget_8_month_tab">Week</a>
															</li>
														</ul>
													</div>
													{/* <!--end::Toolbar--> */}
												</div>
												{/* <!--end::Header--> */}
												{/* <!--begin::Body--> */}
												<div className="card-body pt-6">
													{/* <!--begin::Tab content--> */}
													<div className="tab-content">
														{/* <!--begin::Tab pane--> */}
														<div className="tab-pane fade" id="kt_chart_widget_8_week_tab" role="tabpanel">
															{/* <!--begin::Statistics--> */}
															<div className="mb-5">
																{/* <!--begin::Statistics--> */}
																<div className="d-flex align-items-center mb-2">
																	<span className="fs-1 fw-semibold text-gray-400 me-1 mt-n1">$</span>
																	<span className="fs-3x fw-bold text-gray-800 me-2 lh-1 ls-n2">18,89</span>
																	<span className="badge badge-light-success fs-base">
																	<i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
																		<span className="path1"></span>
																		<span className="path2"></span>
																	</i>4,8%</span>
																</div>
																{/* <!--end::Statistics--> */}
																{/* <!--begin::Description--> */}
																<span className="fs-6 fw-semibold text-gray-400">Avarage cost per interaction</span>
																{/* <!--end::Description--> */}
															</div>
															{/* <!--end::Statistics--> */}
															{/* <!--begin::Chart--> */}
															<div id="kt_chart_widget_8_week_chart" className="ms-n5 min-h-auto s6"></div>
															{/* <!--end::Chart--> */}
															{/* <!--begin::Items--> */}
															<div className="d-flex flex-wrap pt-5">
																{/* <!--begin::Item--> */}
																<div className="d-flex flex-column me-7 me-lg-16 pt-sm-3 pt-6">
																	{/* <!--begin::Item--> */}
																	<div className="d-flex align-items-center mb-3 mb-sm-6">
																		{/* <!--begin::Bullet--> */}
																		<span className="bullet bullet-dot bg-primary me-2 h-10px w-10px"></span>
																		{/* <!--end::Bullet--> */}
																		{/* <!--begin::Label--> */}
																		<span className="fw-bold text-gray-600 fs-6">Social Campaigns</span>
																		{/* <!--end::Label--> */}
																	</div>
																	{/* <!--ed::Item--> */}
																	{/* <!--begin::Item--> */}
																	<div className="d-flex align-items-center">
																		{/* <!--begin::Bullet--> */}
																		<span className="bullet bullet-dot bg-danger me-2 h-10px w-10px"></span>
																		{/* <!--end::Bullet--> */}
																		{/* <!--begin::Label--> */}
																		<span className="fw-bold text-&lt;gray-600 fs-6">Google Ads</span>
																		{/* <!--end::Label--> */}
																	</div>
																	{/* <!--ed::Item--> */}
																</div>
																{/* <!--ed::Item--> */}
																{/* <!--begin::Item--> */}
																<div className="d-flex flex-column me-7 me-lg-16 pt-sm-3 pt-6">
																	{/* <!--begin::Item--> */}
																	<div className="d-flex align-items-center mb-3 mb-sm-6">
																		{/* <!--begin::Bullet--> */}
																		<span className="bullet bullet-dot bg-success me-2 h-10px w-10px"></span>
																		{/* <!--end::Bullet--> */}
																		{/* <!--begin::Label--> */}
																		<span className="fw-bold text-gray-600 fs-6">Email Newsletter</span>
																		{/* <!--end::Label--> */}
																	</div>
																	{/* <!--ed::Item--> */}
																	{/* <!--begin::Item--> */}
																	<div className="d-flex align-items-center">
																		{/* <!--begin::Bullet--> */}
																		<span className="bullet bullet-dot bg-warning me-2 h-10px w-10px"></span>
																		{/* <!--end::Bullet--> */}
																		{/* <!--begin::Label--> */}
																		<span className="fw-bold text-gray-600 fs-6">Courses</span>
																		{/* <!--end::Label--> */}
																	</div>
																	{/* <!--ed::Item--> */}
																</div>
																{/* <!--ed::Item--> */}
																{/* <!--begin::Item--> */}
																<div className="d-flex flex-column pt-sm-3 pt-6">
																	{/* <!--begin::Item--> */}
																	<div className="d-flex align-items-center mb-3 mb-sm-6">
																		{/* <!--begin::Bullet--> */}
																		<span className="bullet bullet-dot bg-info me-2 h-10px w-10px"></span>
																		{/* <!--end::Bullet--> */}
																		{/* <!--begin::Label--> */}
																		<span className="fw-bold text-gray-600 fs-6">TV Campaign</span>
																		{/* <!--end::Label--> */}
																	</div>
																	{/* <!--ed::Item--> */}
																	{/* <!--begin::Item--> */}
																	<div className="d-flex align-items-center">
																		{/* <!--begin::Bullet--> */}
																		<span className="bullet bullet-dot bg-success me-2 h-10px w-10px"></span>
																		{/* <!--end::Bullet--> */}
																		{/* <!--begin::Label--> */}
																		<span className="fw-bold text-gray-600 fs-6">Radio</span>
																		{/* <!--end::Label--> */}
																	</div>
																	{/* <!--ed::Item--> */}
																</div>
																{/* <!--ed::Item--> */}
															</div>
															{/* <!--ed::Items--> */}
														</div>
														{/* <!--end::Tab pane--> */}
														{/* <!--begin::Tab pane--> */}
														<div className="tab-pane fade active show" id="kt_chart_widget_8_month_tab" role="tabpanel">
															{/* <!--begin::Statistics--> */}
															<div className="mb-5">
																{/* <!--begin::Statistics--> */}
																<div className="d-flex align-items-center mb-2">
																	<span className="fs-1 fw-semibold text-gray-400 me-1 mt-n1">$</span>
																	<span className="fs-3x fw-bold text-gray-800 me-2 lh-1 ls-n2">8,55</span>
																	<span className="badge badge-light-success fs-base">
																	<i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
																		<span className="path1"></span>
																		<span className="path2"></span>
																	</i>2.2%</span>
																</div>
																{/* <!--end::Statistics--> */}
																{/* <!--begin::Description--> */}
																<span className="fs-6 fw-semibold text-gray-400">Avarage cost per interaction</span>
																{/* <!--end::Description--> */}
															</div>
															{/* <!--end::Statistics--> */}
															{/* <!--begin::Chart--> */}
															<div id="kt_chart_widget_8_month_chart" className="ms-n5 min-h-auto s7" ></div>
															{/* <!--end::Chart--> */}
															{/* <!--begin::Items--> */}
															<div className="d-flex flex-wrap pt-5">
																{/* <!--begin::Item--> */}
																<div className="d-flex flex-column me-7 me-lg-16 pt-sm-3 pt-6">
																	{/* <!--begin::Item--> */}
																	<div className="d-flex align-items-center mb-3 mb-sm-6">
																		{/* <!--begin::Bullet--> */}
																		<span className="bullet bullet-dot bg-primary me-2 h-10px w-10px"></span>
																		{/* <!--end::Bullet--> */}
																		{/* <!--begin::Label--> */}
																		<span className="fw-bold text-gray-600 fs-6">Social Campaigns</span>
																		{/* <!--end::Label--> */}
																	</div>
																	{/* <!--ed::Item--> */}
																	{/* <!--begin::Item--> */}
																	<div className="d-flex align-items-center">
																		{/* <!--begin::Bullet--> */}
																		<span className="bullet bullet-dot bg-danger me-2 h-10px w-10px"></span>
																		{/* <!--end::Bullet--> */}
																		{/* <!--begin::Label--> */}
																		<span className="fw-bold text-gray-600 fs-6">Google Ads</span>
																		{/* <!--end::Label--> */}
																	</div>
																	{/* <!--ed::Item--> */}
																</div>
																{/* <!--ed::Item--> */}
																{/* <!--begin::Item--> */}
																<div className="d-flex flex-column me-7 me-lg-16 pt-sm-3 pt-6">
																	{/* <!--begin::Item--> */}
																	<div className="d-flex align-items-center mb-3 mb-sm-6">
																		{/* <!--begin::Bullet--> */}
																		<span className="bullet bullet-dot bg-success me-2 h-10px w-10px"></span>
																		{/* <!--end::Bullet--> */}
																		{/* <!--begin::Label--> */}
																		<span className="fw-bold text-gray-600 fs-6">Email Newsletter</span>
																		{/* <!--end::Label--> */}
																	</div>
																	{/* <!--ed::Item--> */}
																	{/* <!--begin::Item--> */}
																	<div className="d-flex align-items-center">
																		{/* <!--begin::Bullet--> */}
																		<span className="bullet bullet-dot bg-warning me-2 h-10px w-10px"></span>
																		{/* <!--end::Bullet--> */}
																		{/* <!--begin::Label--> */}
																		<span className="fw-bold text-gray-600 fs-6">Courses</span>
																		{/* <!--end::Label--> */}
																	</div>
																	{/* <!--ed::Item--> */}
																</div>
																{/* <!--ed::Item--> */}
																{/* <!--begin::Item--> */}
																<div className="d-flex flex-column pt-sm-3 pt-6">
																	{/* <!--begin::Item--> */}
																	<div className="d-flex align-items-center mb-3 mb-sm-6">
																		{/* <!--begin::Bullet--> */}
																		<span className="bullet bullet-dot bg-info me-2 h-10px w-10px"></span>
																		{/* <!--end::Bullet--> */}
																		{/* <!--begin::Label--> */}
																		<span className="fw-bold text-gray-600 fs-6">TV Campaign</span>
																		{/* <!--end::Label--> */}
																	</div>
																	{/* <!--ed::Item--> */}
																	{/* <!--begin::Item--> */}
																	<div className="d-flex align-items-center">
																		{/* <!--begin::Bullet--> */}
																		<span className="bullet bullet-dot bg-success me-2 h-10px w-10px"></span>
																		{/* <!--end::Bullet--> */}
																		{/* <!--begin::Label--> */}
																		<span className="fw-bold text-gray-600 fs-6">Radio</span>
																		{/* <!--end::Label--> */}
																	</div>
																	{/* <!--ed::Item--> */}
																</div>
																{/* <!--ed::Item--> */}
															</div>
															{/* <!--ed::Items--> */}
														</div>
														{/* <!--end::Tab pane--> */}
													</div>
													{/* <!--end::Tab content--> */}
												</div>
												{/* <!--end::Body--> */}
											</div>
											{/* <!--end::Chart widget 8--> */}
										</div>
										{/* <!--end::Col--> */}
										{/* <!--begin::Col--> */}
										<div className="col-xl-6 mb-5 mb-xl-10">
											{/* <!--begin::Chart widget 36--> */}
											<div className="card card-flush overflow-hidden h-xl-100">
												{/* <!--begin::Header--> */}
												<div className="card-header pt-5">
													{/* <!--begin::Title--> */}
													<h3 className="card-title align-items-start flex-column">
														<span className="card-label fw-bold text-dark">Performance</span>
														<span className="text-gray-400 mt-1 fw-semibold fs-6">1,046 Inbound Calls today</span>
													</h3>
													{/* <!--end::Title--> */}
													{/* <!--begin::Toolbar--> */}
													<div className="card-toolbar">
														{/* <!--begin::Daterangepicker(defined in src/js/layout/app.js)--> */}
														<div data-kt-daterangepicker="true" data-kt-daterangepicker-opens="left" data-kt-daterangepicker-range="today" className="btn btn-sm btn-light d-flex align-items-center px-4">
															{/* <!--begin::Display range--> */}
															<div className="text-gray-600 fw-bold">Loading date range...</div>
															{/* <!--end::Display range--> */}
															<i className="ki-duotone ki-calendar-8 fs-1 ms-2 me-0">
																<span className="path1"></span>
																<span className="path2"></span>
																<span className="path3"></span>
																<span className="path4"></span>
																<span className="path5"></span>
																<span className="path6"></span>
															</i>
														</div>
														{/* <!--end::Daterangepicker--> */}
													</div>
													{/* <!--end::Toolbar--> */}
												</div>
												{/* <!--end::Header--> */}
												{/* <!--begin::Card body--> */}
												<div className="card-body d-flex align-items-end p-0">
													{/* <!--begin::Chart--> */}
													<div id="kt_charts_widget_36" className="min-h-auto w-100 ps-4 pe-6 s8" ></div>
													{/* <!--end::Chart--> */}
												</div>
												{/* <!--end::Card body--> */}
											</div>
											{/* <!--end::Chart widget 36--> */}
										</div>
										{/* <!--end::Col--> */}
									</div>
									{/* <!--end::Row--> */}
									{/* <!--begin::Row--> */}
									<div className="row gx-5 gx-xl-10">
										{/* <!--begin::Col--> */}
										<div className="col-xxl-4 mb-5 mb-xl-10">
											{/* <!--begin::List widget 8--> */}
											<div className="card card-flush h-lg-100">
												{/* <!--begin::Header--> */}
												<div className="card-header pt-7 mb-5">
													{/* <!--begin::Title--> */}
													<h3 className="card-title align-items-start flex-column">
														<span className="card-label fw-bold text-gray-800">Visits by Country</span>
														<span className="text-gray-400 mt-1 fw-semibold fs-6">20 countries share 97% visits</span>
													</h3>
													{/* <!--end::Title--> */}
													{/* <!--begin::Toolbar--> */}
													<div className="card-toolbar">
														<a href="../../demo1/dist/apps/ecommerce/sales/listing.html" className="btn btn-sm btn-light">View All</a>
													</div>
													{/* <!--end::Toolbar--> */}
												</div>
												{/* <!--end::Header--> */}
												{/* <!--begin::Body--> */}
												<div className="card-body pt-0">
													{/* <!--begin::Items--> */}
													<div className="m-0">
														{/* <!--begin::Item--> */}
														<div className="d-flex flex-stack">
															{/* <!--begin::Flag--> */}
															<img src="%PUBLIC_URL%/assets/media/flags/united-states.svg" className="me-4 w-25px s9"  alt="" />
															{/* <!--end::Flag--> */}
															{/* <!--begin::Section--> */}
															<div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
																{/* <!--begin::Content--> */}
																<div className="me-5">
																	{/* <!--begin::Title--> */}
																	<a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">United States</a>
																	{/* <!--end::Title--> */}
																	{/* <!--begin::Desc--> */}
																	<span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Direct link clicks</span>
																	{/* <!--end::Desc--> */}
																</div>
																{/* <!--end::Content--> */}
																{/* <!--begin::Info--> */}
																<div className="d-flex align-items-center">
																	{/* <!--begin::Number--> */}
																	<span className="text-gray-800 fw-bold fs-6 me-3 d-block">9,763</span>
																	{/* <!--end::Number--> */}
																	{/* <!--begin::Label--> */}
																	<div className="m-0">
																		{/* <!--begin::Label--> */}
																		<span className="badge badge-light-success fs-base">
																		<i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
																			<span className="path1"></span>
																			<span className="path2"></span>
																		</i>2.6%</span>
																		{/* <!--end::Label--> */}
																	</div>
																	{/* <!--end::Label--> */}
																</div>
																{/* <!--end::Info--> */}
															</div>
															{/* <!--end::Section--> */}
														</div>
														{/* <!--end::Item--> */}
														{/* <!--begin::Separator--> */}
														<div className="separator separator-dashed my-3"></div>
														{/* <!--end::Separator--> */}
														{/* <!--begin::Item--> */}
														<div className="d-flex flex-stack">
															{/* <!--begin::Flag--> */}
															<img src="%PUBLIC_URL%/assets/media/flags/brazil.svg" className="me-4 w-25px s9"  alt="" />
															{/* <!--end::Flag--> */}
															{/* <!--begin::Section--> */}
															<div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
																{/* <!--begin::Content--> */}
																<div className="me-5">
																	{/* <!--begin::Title--> */}
																	<a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">Brasil</a>
																	{/* <!--end::Title--> */}
																	{/* <!--begin::Desc--> */}
																	<span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">All Social Channels</span>
																	{/* <!--end::Desc--> */}
																</div>
																{/* <!--end::Content--> */}
																{/* <!--begin::Info--> */}
																<div className="d-flex align-items-center">
																	{/* <!--begin::Number--> */}
																	<span className="text-gray-800 fw-bold fs-6 me-3 d-block">4,062</span>
																	{/* <!--end::Number--> */}
																	{/* <!--begin::Label--> */}
																	<div className="m-0">
																		{/* <!--begin::Label--> */}
																		<span className="badge badge-light-danger fs-base">
																		<i className="ki-duotone ki-arrow-down fs-5 text-danger ms-n1">
																			<span className="path1"></span>
																			<span className="path2"></span>
																		</i>0.4%</span>
																		{/* <!--end::Label--> */}
																	</div>
																	{/* <!--end::Label--> */}
																</div>
																{/* <!--end::Info--> */}
															</div>
															{/* <!--end::Section--> */}
														</div>
														{/* <!--end::Item--> */}
														{/* <!--begin::Separator--> */}
														<div className="separator separator-dashed my-3"></div>
														{/* <!--end::Separator--> */}
														{/* <!--begin::Item--> */}
														<div className="d-flex flex-stack">
															{/* <!--begin::Flag--> */}
															<img src="%PUBLIC_URL%/assets/media/flags/turkey.svg" className="me-4 w-25px s9"  alt="" />
															{/* <!--end::Flag--> */}
															{/* <!--begin::Section--> */}
															<div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
																{/* <!--begin::Content--> */}
																<div className="me-5">
																	{/* <!--begin::Title--> */}
																	<a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">Turkey</a>
																	{/* <!--end::Title--> */}
																	{/* <!--begin::Desc--> */}
																	<span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Mailchimp Campaigns</span>
																	{/* <!--end::Desc--> */}
																</div>
																{/* <!--end::Content--> */}
																{/* <!--begin::Info--> */}
																<div className="d-flex align-items-center">
																	{/* <!--begin::Number--> */}
																	<span className="text-gray-800 fw-bold fs-6 me-3 d-block">1,680</span>
																	{/* <!--end::Number--> */}
																	{/* <!--begin::Label--> */}
																	<div className="m-0">
																		{/* <!--begin::Label--> */}
																		<span className="badge badge-light-success fs-base">
																		<i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
																			<span className="path1"></span>
																			<span className="path2"></span>
																		</i>0.2%</span>
																		{/* <!--end::Label--> */}
																	</div>
																	{/* <!--end::Label--> */}
																</div>
																{/* <!--end::Info--> */}
															</div>
															{/* <!--end::Section--> */}
														</div>
														{/* <!--end::Item--> */}
														{/* <!--begin::Separator--> */}
														<div className="separator separator-dashed my-3"></div>
														{/* <!--end::Separator--> */}
														{/* <!--begin::Item--> */}
														<div className="d-flex flex-stack">
															{/* <!--begin::Flag--> */}
															<img src="%PUBLIC_URL%/assets/media/flags/france.svg" className="me-4 w-25px s9"  alt="" />
															{/* <!--end::Flag--> */}
															{/* <!--begin::Section--> */}
															<div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
																{/* <!--begin::Content--> */}
																<div className="me-5">
																	{/* <!--begin::Title--> */}
																	<a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">France</a>
																	{/* <!--end::Title--> */}
																	{/* <!--begin::Desc--> */}
																	<span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Impact Radius visits</span>
																	{/* <!--end::Desc--> */}
																</div>
																{/* <!--end::Content--> */}
																{/* <!--begin::Info--> */}
																<div className="d-flex align-items-center">
																	{/* <!--begin::Number--> */}
																	<span className="text-gray-800 fw-bold fs-6 me-3 d-block">849</span>
																	{/* <!--end::Number--> */}
																	{/* <!--begin::Label--> */}
																	<div className="m-0">
																		{/* <!--begin::Label--> */}
																		<span className="badge badge-light-success fs-base">
																		<i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
																			<span className="path1"></span>
																			<span className="path2"></span>
																		</i>4.1%</span>
																		{/* <!--end::Label--> */}
																	</div>
																	{/* <!--end::Label--> */}
																</div>
																{/* <!--end::Info--> */}
															</div>
															{/* <!--end::Section--> */}
														</div>
														{/* <!--end::Item--> */}
														{/* <!--begin::Separator--> */}
														<div className="separator separator-dashed my-3"></div>
														{/* <!--end::Separator--> */}
														{/* <!--begin::Item--> */}
														<div className="d-flex flex-stack">
															{/* <!--begin::Flag--> */}
															<img src="%PUBLIC_URL%/assets/media/flags/india.svg" className="me-4 w-25px s9"  alt="" />
															{/* <!--end::Flag--> */}
															{/* <!--begin::Section--> */}
															<div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
																{/* <!--begin::Content--> */}
																<div className="me-5">
																	{/* <!--begin::Title--> */}
																	<a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">India</a>
																	{/* <!--end::Title--> */}
																	{/* <!--begin::Desc--> */}
																	<span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Many Sources</span>
																	{/* <!--end::Desc--> */}
																</div>
																{/* <!--end::Content--> */}
																{/* <!--begin::Info--> */}
																<div className="d-flex align-items-center">
																	{/* <!--begin::Number--> */}
																	<span className="text-gray-800 fw-bold fs-6 me-3 d-block">604</span>
																	{/* <!--end::Number--> */}
																	{/* <!--begin::Label--> */}
																	<div className="m-0">
																		{/* <!--begin::Label--> */}
																		<span className="badge badge-light-danger fs-base">
																		<i className="ki-duotone ki-arrow-down fs-5 text-danger ms-n1">
																			<span className="path1"></span>
																			<span className="path2"></span>
																		</i>8.3%</span>
																		{/* <!--end::Label--> */}
																	</div>
																	{/* <!--end::Label--> */}
																</div>
																{/* <!--end::Info--> */}
															</div>
															{/* <!--end::Section--> */}
														</div>
														{/* <!--end::Item--> */}
														{/* <!--begin::Separator--> */}
														<div className="separator separator-dashed my-3"></div>
														{/* <!--end::Separator--> */}
														{/* <!--begin::Item--> */}
														<div className="d-flex flex-stack">
															{/* <!--begin::Flag--> */}
															<img src="%PUBLIC_URL%/assets/media/flags/sweden.svg" className="me-4 w-25px s9"  alt="" />
															{/* <!--end::Flag--> */}
															{/* <!--begin::Section--> */}
															<div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
																{/* <!--begin::Content--> */}
																<div className="me-5">
																	{/* <!--begin::Title--> */}
																	<a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">Sweden</a>
																	{/* <!--end::Title--> */}
																	{/* <!--begin::Desc--> */}
																	<span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Social Network</span>
																	{/* <!--end::Desc--> */}
																</div>
																{/* <!--end::Content--> */}
																{/* <!--begin::Info--> */}
																<div className="d-flex align-items-center">
																	{/* <!--begin::Number--> */}
																	<span className="text-gray-800 fw-bold fs-6 me-3 d-block">237</span>
																	{/* <!--end::Number--> */}
																	{/* <!--begin::Label--> */}
																	<div className="m-0">
																		{/* <!--begin::Label--> */}
																		<span className="badge badge-light-success fs-base">
																		<i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
																			<span className="path1"></span>
																			<span className="path2"></span>
																		</i>1.9%</span>
																		{/* <!--end::Label--> */}
																	</div>
																	{/* <!--end::Label--> */}
																</div>
																{/* <!--end::Info--> */}
															</div>
															{/* <!--end::Section--> */}
														</div>
														{/* <!--end::Item--> */}
													</div>
													{/* <!--end::Items--> */}
												</div>
												{/* <!--end::Body--> */}
											</div>
											{/* <!--end::LIst widget 8--> */}
										</div>
										{/* <!--end::Col--> */}
										{/* <!--begin::Col--> */}
										<div className="col-xxl-4 mb-5 mb-xl-10">
											{/* <!--begin::List widget 9--> */}
											<div className="card card-flush h-xl-100">
												{/* <!--begin::Header--> */}
												<div className="card-header py-7">
													{/* <!--begin::Statistics--> */}
													<div className="m-0">
														{/* <!--begin::Heading--> */}
														<div className="d-flex align-items-center mb-2">
															{/* <!--begin::Title--> */}
															<span className="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">5,037</span>
															{/* <!--end::Title--> */}
															{/* <!--begin::Label--> */}
															<span className="badge badge-light-success fs-base">
															<i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
																<span className="path1"></span>
																<span className="path2"></span>
															</i>2.2%</span>
															{/* <!--end::Label--> */}
														</div>
														{/* <!--end::Heading--> */}
														{/* <!--begin::Description--> */}
														<span className="fs-6 fw-semibold text-gray-400">Visits by Social Networks</span>
														{/* <!--end::Description--> */}
													</div>
													{/* <!--end::Statistics--> */}
													{/* <!--begin::Toolbar--> */}
													<div className="card-toolbar">
														{/* <!--begin::Menu--> */}
														<button className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
															<i className="ki-duotone ki-dots-square fs-1 text-gray-400 me-n1">
																<span className="path1"></span>
																<span className="path2"></span>
																<span className="path3"></span>
																<span className="path4"></span>
															</i>
														</button>
														{/* <!--begin::Menu 2--> */}
														<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
															{/* <!--begin::Menu item--> */}
															<div className="menu-item px-3">
																<div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
															</div>
															{/* <!--end::Menu item--> */}
															{/* <!--begin::Menu separator--> */}
															<div className="separator mb-3 opacity-75"></div>
															{/* <!--end::Menu separator--> */}
															{/* <!--begin::Menu item--> */}
															<div className="menu-item px-3">
																<a href="#" className="menu-link px-3">New Ticket</a>
															</div>
															{/* <!--end::Menu item--> */}
															{/* <!--begin::Menu item--> */}
															<div className="menu-item px-3">
																<a href="#" className="menu-link px-3">New Customer</a>
															</div>
															{/* <!--end::Menu item--> */}
															{/* <!--begin::Menu item--> */}
															<div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
																{/* <!--begin::Menu item--> */}
																<a href="#" className="menu-link px-3">
																	<span className="menu-title">New Group</span>
																	<span className="menu-arrow"></span>
																</a>
																{/* <!--end::Menu item--> */}
																{/* <!--begin::Menu sub--> */}
																<div className="menu-sub menu-sub-dropdown w-175px py-4">
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3">Admin Group</a>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3">Staff Group</a>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3">Member Group</a>
																	</div>
																	{/* <!--end::Menu item--> */}
																</div>
																{/* <!--end::Menu sub--> */}
															</div>
															{/* <!--end::Menu item--> */}
															{/* <!--begin::Menu item--> */}
															<div className="menu-item px-3">
																<a href="#" className="menu-link px-3">New Contact</a>
															</div>
															{/* <!--end::Menu item--> */}
															{/* <!--begin::Menu separator--> */}
															<div className="separator mt-3 opacity-75"></div>
															{/* <!--end::Menu separator--> */}
															{/* <!--begin::Menu item--> */}
															<div className="menu-item px-3">
																<div className="menu-content px-3 py-3">
																	<a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
																</div>
															</div>
															{/* <!--end::Menu item--> */}
														</div>
														{/* <!--end::Menu 2--> */}
														{/* <!--end::Menu--> */}
													</div>
													{/* <!--end::Toolbar--> */}
												</div>
												{/* <!--end::Header--> */}
												{/* <!--begin::Body--> */}
												<div className="card-body card-body d-flex justify-content-between flex-column pt-3">
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack">
														{/* <!--begin::Flag--> */}
														<img src="%PUBLIC_URL%/assets/media/svg/brand-logos/dribbble-icon-1.svg" className="me-4 w-30px s9"  alt="" />
														{/* <!--end::Flag--> */}
														{/* <!--begin::Section--> */}
														<div className="d-flex align-items-center flex-stack flex-wrap flex-row-fluid d-grid gap-2">
															{/* <!--begin::Content--> */}
															<div className="me-5">
																{/* <!--begin::Title--> */}
																<a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">Dribbble</a>
																{/* <!--end::Title--> */}
																{/* <!--begin::Desc--> */}
																<span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Community</span>
																{/* <!--end::Desc--> */}
															</div>
															{/* <!--end::Content--> */}
															{/* <!--begin::Wrapper--> */}
															<div className="d-flex align-items-center">
																{/* <!--begin::Number--> */}
																<span className="text-gray-800 fw-bold fs-4 me-3">579</span>
																{/* <!--end::Number--> */}
																{/* <!--begin::Info--> */}
																<div className="m-0">
																	{/* <!--begin::Label--> */}
																	<span className="badge badge-light-success fs-base">
																	<i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
																		<span className="path1"></span>
																		<span className="path2"></span>
																	</i>2.6%</span>
																	{/* <!--end::Label--> */}
																</div>
																{/* <!--end::Info--> */}
															</div>
															{/* <!--end::Wrapper--> */}
														</div>
														{/* <!--end::Section--> */}
													</div>
													{/* <!--end::Item--> */}
													{/* <!--begin::Separator--> */}
													<div className="separator separator-dashed my-3"></div>
													{/* <!--end::Separator--> */}
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack">
														{/* <!--begin::Flag--> */}
														<img src="%PUBLIC_URL%/assets/media/svg/brand-logos/linkedin-1.svg" className="me-4 w-30px s9"  alt="" />
														{/* <!--end::Flag--> */}
														{/* <!--begin::Section--> */}
														<div className="d-flex align-items-center flex-stack flex-wrap flex-row-fluid d-grid gap-2">
															{/* <!--begin::Content--> */}
															<div className="me-5">
																{/* <!--begin::Title--> */}
																<a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">Linked In</a>
																{/* <!--end::Title--> */}
																{/* <!--begin::Desc--> */}
																<span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Social Media</span>
																{/* <!--end::Desc--> */}
															</div>
															{/* <!--end::Content--> */}
															{/* <!--begin::Wrapper--> */}
															<div className="d-flex align-items-center">
																{/* <!--begin::Number--> */}
																<span className="text-gray-800 fw-bold fs-4 me-3">1,088</span>
																{/* <!--end::Number--> */}
																{/* <!--begin::Info--> */}
																<div className="m-0">
																	{/* <!--begin::Label--> */}
																	<span className="badge badge-light-danger fs-base">
																	<i className="ki-duotone ki-arrow-down fs-5 text-danger ms-n1">
																		<span className="path1"></span>
																		<span className="path2"></span>
																	</i>0.4%</span>
																	{/* <!--end::Label--> */}
																</div>
																{/* <!--end::Info--> */}
															</div>
															{/* <!--end::Wrapper--> */}
														</div>
														{/* <!--end::Section--> */}
													</div>
													{/* <!--end::Item--> */}
													{/* <!--begin::Separator--> */}
													<div className="separator separator-dashed my-3"></div>
													{/* <!--end::Separator--> */}
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack">
														{/* <!--begin::Flag--> */}
														<img src="%PUBLIC_URL%/assets/media/svg/brand-logos/slack-icon.svg" className="me-4 w-30px s9"  alt="" />
														{/* <!--end::Flag--> */}
														{/* <!--begin::Section--> */}
														<div className="d-flex align-items-center flex-stack flex-wrap flex-row-fluid d-grid gap-2">
															{/* <!--begin::Content--> */}
															<div className="me-5">
																{/* <!--begin::Title--> */}
																<a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">Slack</a>
																{/* <!--end::Title--> */}
																{/* <!--begin::Desc--> */}
																<span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Messanger</span>
																{/* <!--end::Desc--> */}
															</div>
															{/* <!--end::Content--> */}
															{/* <!--begin::Wrapper--> */}
															<div className="d-flex align-items-center">
																{/* <!--begin::Number--> */}
																<span className="text-gray-800 fw-bold fs-4 me-3">794</span>
																{/* <!--end::Number--> */}
																{/* <!--begin::Info--> */}
																<div className="m-0">
																	{/* <!--begin::Label--> */}
																	<span className="badge badge-light-success fs-base">
																	<i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
																		<span className="path1"></span>
																		<span className="path2"></span>
																	</i>0.2%</span>
																	{/* <!--end::Label--> */}
																</div>
																{/* <!--end::Info--> */}
															</div>
															{/* <!--end::Wrapper--> */}
														</div>
														{/* <!--end::Section--> */}
													</div>
													{/* <!--end::Item--> */}
													{/* <!--begin::Separator--> */}
													<div className="separator separator-dashed my-3"></div>
													{/* <!--end::Separator--> */}
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack">
														{/* <!--begin::Flag--> */}
														<img src="%PUBLIC_URL%/assets/media/svg/brand-logos/youtube-3.svg" className="me-4 w-30px s9"  alt="" />
														{/* <!--end::Flag--> */}
														{/* <!--begin::Section--> */}
														<div className="d-flex align-items-center flex-stack flex-wrap flex-row-fluid d-grid gap-2">
															{/* <!--begin::Content--> */}
															<div className="me-5">
																{/* <!--begin::Title--> */}
																<a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">YouTube</a>
																{/* <!--end::Title--> */}
																{/* <!--begin::Desc--> */}
																<span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Video Channel</span>
																{/* <!--end::Desc--> */}
															</div>
															{/* <!--end::Content--> */}
															{/* <!--begin::Wrapper--> */}
															<div className="d-flex align-items-center">
																{/* <!--begin::Number--> */}
																<span className="text-gray-800 fw-bold fs-4 me-3">978</span>
																{/* <!--end::Number--> */}
																{/* <!--begin::Info--> */}
																<div className="m-0">
																	{/* <!--begin::Label--> */}
																	<span className="badge badge-light-success fs-base">
																	<i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
																		<span className="path1"></span>
																		<span className="path2"></span>
																	</i>4.1%</span>
																	{/* <!--end::Label--> */}
																</div>
																{/* <!--end::Info--> */}
															</div>
															{/* <!--end::Wrapper--> */}
														</div>
														{/* <!--end::Section--> */}
													</div>
													{/* <!--end::Item--> */}
													{/* <!--begin::Separator--> */}
													<div className="separator separator-dashed my-3"></div>
													{/* <!--end::Separator--> */}
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack">
														{/* <!--begin::Flag--> */}
														<img src="%PUBLIC_URL%/assets/media/svg/brand-logos/instagram-2-1.svg" className="me-4 w-30px s9"  alt="" />
														{/* <!--end::Flag--> */}
														{/* <!--begin::Section--> */}
														<div className="d-flex align-items-center flex-stack flex-wrap flex-row-fluid d-grid gap-2">
															{/* <!--begin::Content--> */}
															<div className="me-5">
																{/* <!--begin::Title--> */}
																<a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">Instagram</a>
																{/* <!--end::Title--> */}
																{/* <!--begin::Desc--> */}
																<span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Social Network</span>
																{/* <!--end::Desc--> */}
															</div>
															{/* <!--end::Content--> */}
															{/* <!--begin::Wrapper--> */}
															<div className="d-flex align-items-center">
																{/* <!--begin::Number--> */}
																<span className="text-gray-800 fw-bold fs-4 me-3">1,458</span>
																{/* <!--end::Number--> */}
																{/* <!--begin::Info--> */}
																<div className="m-0">
																	{/* <!--begin::Label--> */}
																	<span className="badge badge-light-success fs-base">
																	<i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
																		<span className="path1"></span>
																		<span className="path2"></span>
																	</i>8.3%</span>
																	{/* <!--end::Label--> */}
																</div>
																{/* <!--end::Info--> */}
															</div>
															{/* <!--end::Wrapper--> */}
														</div>
														{/* <!--end::Section--> */}
													</div>
													{/* <!--end::Item--> */}
												</div>
												{/* <!--end::Body--> */}
											</div>
											{/* <!--end::List widget 9--> */}
										</div>
										{/* <!--end::Col--> */}
										{/* <!--begin::Col--> */}
										<div className="col-xxl-4 mb-5 mb-xl-10">
											{/* <!--begin::Engage widget 11--> */}
											<div className="card card-flush h-xl-100 s10"  data-bs-theme="light">
												{/* <!--begin::Body--> */}
												<div className="card-body d-flex flex-column justify-content-between mt-6 bgi-no-repeat bgi-size-cover bgi-position-x-center">
													{/* <!--begin::Wrapper--> */}
													<div className="mb-10">
														{/* <!--begin::Title--> */}
														<div className="fs-1 fw-bold text-white text-center mb-9">
														<span className="me-2">Analyse Your
														<br />
														<span className="position-relative d-inline-block">
															<a href="../../demo1/dist/pages/user-profile/overview.html" className="text-success opacity-75-hover">Infrastructure</a>
															{/* <!--begin::Separator--> */}
															<span className="position-absolute opacity-25 bottom-0 start-0 border-4 border-success border-bottom w-100"></span>
															{/* <!--end::Separator--> */}
														</span></span>with Keen</div>
														{/* <!--end::Title--> */}
														{/* <!--begin::Action--> */}
														<div className="text-center">
															<a href='#' className="btn btn-sm btn-color-white bg-body bg-opacity-15 bg-hover-opacity-25 fw-bold fs-7" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">Get Started</a>
														</div>
														{/* <!--begin::Action--> */}
													</div>
													{/* <!--begin::Wrapper--> */}
													{/* <!--begin::Illustration--> */}
													<img className="mx-auto h-150px h-lg-200px mb-11" src="%PUBLIC_URL%/assets/media/svg/illustrations/sigma/illustration-realestate.svg" alt="" />
													{/* <!--end::Illustration--> */}
												</div>
												{/* <!--end::Body--> */}
											</div>
											{/* <!--end::Engage widget 11--> */}
										</div>
										{/* <!--end::Col--> */}
									</div>
									{/* <!--end::Row--> */}
									{/* <!--begin::Row--> */}
									<div className="row g-5 g-xl-10 mb-5 mb-xl-10">
										{/* <!--begin::Col--> */}
										<div className="col-xl-4">
											{/* <!--begin::Chart Widget 35--> */}
											<div className="card card-flush h-md-100">
												{/* <!--begin::Header--> */}
												<div className="card-header pt-5 mb-6">
													{/* <!--begin::Title--> */}
													<h3 className="card-title align-items-start flex-column">
														{/* <!--begin::Statistics--> */}
														<div className="d-flex align-items-center mb-2">
															{/* <!--begin::Currency--> */}
															<span className="fs-3 fw-semibold text-gray-400 align-self-start me-1">$</span>
															{/* <!--end::Currency--> */}
															{/* <!--begin::Value--> */}
															<span className="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">3,274.94</span>
															{/* <!--end::Value--> */}
															{/* <!--begin::Label--> */}
															<span className="badge badge-light-success fs-base">
															<i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
																<span className="path1"></span>
																<span className="path2"></span>
															</i>9.2%</span>
															{/* <!--end::Label--> */}
														</div>
														{/* <!--end::Statistics--> */}
														{/* <!--begin::Description--> */}
														<span className="fs-6 fw-semibold text-gray-400">Avg. Agent Earnings</span>
														{/* <!--end::Description--> */}
													</h3>
													{/* <!--end::Title--> */}
													{/* <!--begin::Toolbar--> */}
													<div className="card-toolbar">
														{/* <!--begin::Menu--> */}
														<button className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
															<i className="ki-duotone ki-dots-square fs-1 text-gray-400 me-n1">
																<span className="path1"></span>
																<span className="path2"></span>
																<span className="path3"></span>
																<span className="path4"></span>
															</i>
														</button>
														{/* <!--begin::Menu 2--> */}
														<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
															{/* <!--begin::Menu item--> */}
															<div className="menu-item px-3">
																<div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
															</div>
															{/* <!--end::Menu item--> */}
															{/* <!--begin::Menu separator--> */}
															<div className="separator mb-3 opacity-75"></div>
															{/* <!--end::Menu separator--> */}
															{/* <!--begin::Menu item--> */}
															<div className="menu-item px-3">
																<a href="#" className="menu-link px-3">New Ticket</a>
															</div>
															{/* <!--end::Menu item--> */}
															{/* <!--begin::Menu item--> */}
															<div className="menu-item px-3">
																<a href="#" className="menu-link px-3">New Customer</a>
															</div>
															{/* <!--end::Menu item--> */}
															{/* <!--begin::Menu item--> */}
															<div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
																{/* <!--begin::Menu item--> */}
																<a href="#" className="menu-link px-3">
																	<span className="menu-title">New Group</span>
																	<span className="menu-arrow"></span>
																</a>
																{/* <!--end::Menu item--> */}
																{/* <!--begin::Menu sub--> */}
																<div className="menu-sub menu-sub-dropdown w-175px py-4">
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3">Admin Group</a>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3">Staff Group</a>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3">Member Group</a>
																	</div>
																	{/* <!--end::Menu item--> */}
																</div>
																{/* <!--end::Menu sub--> */}
															</div>
															{/* <!--end::Menu item--> */}
															{/* <!--begin::Menu item--> */}
															<div className="menu-item px-3">
																<a href="#" className="menu-link px-3">New Contact</a>
															</div>
															{/* <!--end::Menu item--> */}
															{/* <!--begin::Menu separator--> */}
															<div className="separator mt-3 opacity-75"></div>
															{/* <!--end::Menu separator--> */}
															{/* <!--begin::Menu item--> */}
															<div className="menu-item px-3">
																<div className="menu-content px-3 py-3">
																	<a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
																</div>
															</div>
															{/* <!--end::Menu item--> */}
														</div>
														{/* <!--end::Menu 2--> */}
														{/* <!--end::Menu--> */}
													</div>
													{/* <!--end::Toolbar--> */}
												</div>
												{/* <!--end::Header--> */}
												{/* <!--begin::Body--> */}
												<div className="card-body py-0 px-0">
													{/* <!--begin::Nav--> */}
													<ul className="nav d-flex justify-content-between mb-3 mx-9">
														{/* <!--begin::Item--> */}
														<li className="nav-item mb-3">
															{/* <!--begin::Link--> */}
															<a className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px active" data-bs-toggle="tab" id="kt_charts_widget_35_tab_1" href="#kt_charts_widget_35_tab_content_1">1d</a>
															{/* <!--end::Link--> */}
														</li>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<li className="nav-item mb-3">
															{/* <!--begin::Link--> */}
															<a className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px" data-bs-toggle="tab" id="kt_charts_widget_35_tab_2" href="#kt_charts_widget_35_tab_content_2">5d</a>
															{/* <!--end::Link--> */}
														</li>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<li className="nav-item mb-3">
															{/* <!--begin::Link--> */}
															<a className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px" data-bs-toggle="tab" id="kt_charts_widget_35_tab_3" href="#kt_charts_widget_35_tab_content_3">1m</a>
															{/* <!--end::Link--> */}
														</li>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<li className="nav-item mb-3">
															{/* <!--begin::Link--> */}
															<a className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px" data-bs-toggle="tab" id="kt_charts_widget_35_tab_4" href="#kt_charts_widget_35_tab_content_4">6m</a>
															{/* <!--end::Link--> */}
														</li>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<li className="nav-item mb-3">
															{/* <!--begin::Link--> */}
															<a className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px" data-bs-toggle="tab" id="kt_charts_widget_35_tab_5" href="#kt_charts_widget_35_tab_content_5">1y</a>
															{/* <!--end::Link--> */}
														</li>
														{/* <!--end::Item--> */}
													</ul>
													{/* <!--end::Nav--> */}
													{/* <!--begin::Tab Content--> */}
													<div className="tab-content mt-n6">
														{/* <!--begin::Tap pane--> */}
														<div className="tab-pane fade active show" id="kt_charts_widget_35_tab_content_1">
															{/* <!--begin::Chart--> */}
															<div id="kt_charts_widget_35_chart_1" data-kt-chart-color="primary" className="min-h-auto h-200px ps-3 pe-6"></div>
															{/* <!--end::Chart--> */}
															{/* <!--begin::Table container--> */}
															<div className="table-responsive mx-9 mt-n6">
																{/* <!--begin::Table--> */}
																<table className="table align-middle gs-0 gy-4">
																	{/* <!--begin::Table head--> */}
																	<thead>
																		<tr>
																			<th className="min-w-100px"></th>
																			<th className="min-w-100px text-end pe-0"></th>
																			<th className="text-end min-w-50px"></th>
																		</tr>
																	</thead>
																	{/* <!--end::Table head--> */}
																	{/* <!--begin::Table body--> */}
																	<tbody>
																		<tr>
																			<td>
																				<a href="#" className="text-gray-600 fw-bold fs-6">2:30 PM</a>
																			</td>
																			<td className="pe-0 text-end">
																				<span className="text-gray-800 fw-bold fs-6 me-1">$2,756.26</span>
																			</td>
																			<td className="pe-0 text-end">
																				<span className="fw-bold fs-6 text-danger">-139.34</span>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<a href="#" className="text-gray-600 fw-bold fs-6">3:10 PM</a>
																			</td>
																			<td className="pe-0 text-end">
																				<span className="text-gray-800 fw-bold fs-6 me-1">$3,207.03</span>
																			</td>
																			<td className="pe-0 text-end">
																				<span className="fw-bold fs-6 text-success">+576.24</span>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<a href="#" className="text-gray-600 fw-bold fs-6">3:55 PM</a>
																			</td>
																			<td className="pe-0 text-end">
																				<span className="text-gray-800 fw-bold fs-6 me-1">$3,274.94</span>
																			</td>
																			<td className="pe-0 text-end">
																				<span className="fw-bold fs-6 text-success">+124.03</span>
																			</td>
																		</tr>
																	</tbody>
																	{/* <!--end::Table body--> */}
																</table>
																{/* <!--end::Table--> */}
															</div>
															{/* <!--end::Table container--> */}
														</div>
														{/* <!--end::Tap pane--> */}
														{/* <!--begin::Tap pane--> */}
														<div className="tab-pane fade" id="kt_charts_widget_35_tab_content_2">
															{/* <!--begin::Chart--> */}
															<div id="kt_charts_widget_35_chart_2" data-kt-chart-color="primary" className="min-h-auto h-200px ps-3 pe-6"></div>
															{/* <!--end::Chart--> */}
															{/* <!--begin::Table container--> */}
															<div className="table-responsive mx-9 mt-n6">
																{/* <!--begin::Table--> */}
																<table className="table align-middle gs-0 gy-4">
																	{/* <!--begin::Table head--> */}
																	<thead>
																		<tr>
																			<th className="min-w-100px"></th>
																			<th className="min-w-100px text-end pe-0"></th>
																			<th className="text-end min-w-50px"></th>
																		</tr>
																	</thead>
																	{/* <!--end::Table head--> */}
																	{/* <!--begin::Table body--> */}
																	<tbody>
																		<tr>
																			<td>
																				<a href="#" className="text-gray-600 fw-bold fs-6">4:30 PM</a>
																			</td>
																			<td className="pe-0 text-end">
																				<span className="text-gray-800 fw-bold fs-6 me-1">$2,345.45</span>
																			</td>
																			<td className="pe-0 text-end">
																				<span className="fw-bold fs-6 text-success">+134.02</span>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<a href="#" className="text-gray-600 fw-bold fs-6">11:35 AM</a>
																			</td>
																			<td className="pe-0 text-end">
																				<span className="text-gray-800 fw-bold fs-6 me-1">$756.26</span>
																			</td>
																			<td className="pe-0 text-end">
																				<span className="fw-bold fs-6 text-primary">-124.03</span>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<a href="#" className="text-gray-600 fw-bold fs-6">3:30 PM</a>
																			</td>
																			<td className="pe-0 text-end">
																				<span className="text-gray-800 fw-bold fs-6 me-1">$1,756.26</span>
																			</td>
																			<td className="pe-0 text-end">
																				<span className="fw-bold fs-6 text-danger">+144.04</span>
																			</td>
																		</tr>
																	</tbody>
																	{/* <!--end::Table body--> */}
																</table>
																{/* <!--end::Table--> */}
															</div>
															{/* <!--end::Table container--> */}
														</div>
														{/* <!--end::Tap pane--> */}
														{/* <!--begin::Tap pane--> */}
														<div className="tab-pane fade" id="kt_charts_widget_35_tab_content_3">
															{/* <!--begin::Chart--> */}
															<div id="kt_charts_widget_35_chart_3" data-kt-chart-color="primary" className="min-h-auto h-200px ps-3 pe-6"></div>
															{/* <!--end::Chart--> */}
															{/* <!--begin::Table container--> */}
															<div className="table-responsive mx-9 mt-n6">
																{/* <!--begin::Table--> */}
																<table className="table align-middle gs-0 gy-4">
																	{/* <!--begin::Table head--> */}
																	<thead>
																		<tr>
																			<th className="min-w-100px"></th>
																			<th className="min-w-100px text-end pe-0"></th>
																			<th className="text-end min-w-50px"></th>
																		</tr>
																	</thead>
																	{/* <!--end::Table head--> */}
																	{/* <!--begin::Table body--> */}
																	<tbody>
																		<tr>
																			<td>
																				<a href="#" className="text-gray-600 fw-bold fs-6">3:20 AM</a>
																			</td>
																			<td className="pe-0 text-end">
																				<span className="text-gray-800 fw-bold fs-6 me-1">$3,756.26</span>
																			</td>
																			<td className="pe-0 text-end">
																				<span className="fw-bold fs-6 text-primary">+185.03</span>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<a href="#" className="text-gray-600 fw-bold fs-6">12:30 AM</a>
																			</td>
																			<td className="pe-0 text-end">
																				<span className="text-gray-800 fw-bold fs-6 me-1">$2,756.26</span>
																			</td>
																			<td className="pe-0 text-end">
																				<span className="fw-bold fs-6 text-danger">+124.03</span>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<a href="#" className="text-gray-600 fw-bold fs-6">4:30 PM</a>
																			</td>
																			<td className="pe-0 text-end">
																				<span className="text-gray-800 fw-bold fs-6 me-1">$756.26</span>
																			</td>
																			<td className="pe-0 text-end">
																				<span className="fw-bold fs-6 text-success">-154.03</span>
																			</td>
																		</tr>
																	</tbody>
																	{/* <!--end::Table body--> */}
																</table>
																{/* <!--end::Table--> */}
															</div>
															{/* <!--end::Table container--> */}
														</div>
														{/* <!--end::Tap pane--> */}
														{/* <!--begin::Tap pane--> */}
														<div className="tab-pane fade" id="kt_charts_widget_35_tab_content_4">
															{/* <!--begin::Chart--> */}
															<div id="kt_charts_widget_35_chart_4" data-kt-chart-color="primary" className="min-h-auto h-200px ps-3 pe-6"></div>
															{/* <!--end::Chart--> */}
															{/* <!--begin::Table container--> */}
															<div className="table-responsive mx-9 mt-n6">
																{/* <!--begin::Table--> */}
																<table className="table align-middle gs-0 gy-4">
																	{/* <!--begin::Table head--> */}
																	<thead>
																		<tr>
																			<th className="min-w-100px"></th>
																			<th className="min-w-100px text-end pe-0"></th>
																			<th className="text-end min-w-50px"></th>
																		</tr>
																	</thead>
																	{/* <!--end::Table head--> */}
																	{/* <!--begin::Table body--> */}
																	<tbody>
																		<tr>
																			<td>
																				<a href="#" className="text-gray-600 fw-bold fs-6">2:30 PM</a>
																			</td>
																			<td className="pe-0 text-end">
																				<span className="text-gray-800 fw-bold fs-6 me-1">$2,756.26</span>
																			</td>
																			<td className="pe-0 text-end">
																				<span className="fw-bold fs-6 text-warning">+124.03</span>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<a href="#" className="text-gray-600 fw-bold fs-6">5:30 AM</a>
																			</td>
																			<td className="pe-0 text-end">
																				<span className="text-gray-800 fw-bold fs-6 me-1">$1,756.26</span>
																			</td>
																			<td className="pe-0 text-end">
																				<span className="fw-bold fs-6 text-info">+144.65</span>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<a href="#" className="text-gray-600 fw-bold fs-6">4:30 PM</a>
																			</td>
																			<td className="pe-0 text-end">
																				<span className="text-gray-800 fw-bold fs-6 me-1">$2,085.25</span>
																			</td>
																			<td className="pe-0 text-end">
																				<span className="fw-bold fs-6 text-primary">+154.06</span>
																			</td>
																		</tr>
																	</tbody>
																	{/* <!--end::Table body--> */}
																</table>
																{/* <!--end::Table--> */}
															</div>
															{/* <!--end::Table container--> */}
														</div>
														{/* <!--end::Tap pane--> */}
														{/* <!--begin::Tap pane--> */}
														<div className="tab-pane fade" id="kt_charts_widget_35_tab_content_5">
															{/* <!--begin::Chart--> */}
															<div id="kt_charts_widget_35_chart_5" data-kt-chart-color="primary" className="min-h-auto h-200px ps-3 pe-6"></div>
															{/* <!--end::Chart--> */}
															{/* <!--begin::Table container--> */}
															<div className="table-responsive mx-9 mt-n6">
																{/* <!--begin::Table--> */}
																<table className="table align-middle gs-0 gy-4">
																	{/* <!--begin::Table head--> */}
																	<thead>
																		<tr>
																			<th className="min-w-100px"></th>
																			<th className="min-w-100px text-end pe-0"></th>
																			<th className="text-end min-w-50px"></th>
																		</tr>
																	</thead>
																	{/* <!--end::Table head--> */}
																	{/* <!--begin::Table body--> */}
																	<tbody>
																		<tr>
																			<td>
																				<a href="#" className="text-gray-600 fw-bold fs-6">2:30 PM</a>
																			</td>
																			<td className="pe-0 text-end">
																				<span className="text-gray-800 fw-bold fs-6 me-1">$2,045.04</span>
																			</td>
																			<td className="pe-0 text-end">
																				<span className="fw-bold fs-6 text-warning">+114.03</span>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<a href="#" className="text-gray-600 fw-bold fs-6">3:30 AM</a>
																			</td>
																			<td className="pe-0 text-end">
																				<span className="text-gray-800 fw-bold fs-6 me-1">$756.26</span>
																			</td>
																			<td className="pe-0 text-end">
																				<span className="fw-bold fs-6 text-primary">-124.03</span>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<a href="#" className="text-gray-600 fw-bold fs-6">10:30 PM</a>
																			</td>
																			<td className="pe-0 text-end">
																				<span className="text-gray-800 fw-bold fs-6 me-1">$1.756.26</span>
																			</td>
																			<td className="pe-0 text-end">
																				<span className="fw-bold fs-6 text-info">+165.86</span>
																			</td>
																		</tr>
																	</tbody>
																	{/* <!--end::Table body--> */}
																</table>
																{/* <!--end::Table--> */}
															</div>
															{/* <!--end::Table container--> */}
														</div>
														{/* <!--end::Tap pane--> */}
													</div>
													{/* <!--end::Tab Content--> */}
												</div>
												{/* <!--end::Body--> */}
											</div>
											{/* <!--end::Chart Widget 35--> */}
										</div>
										{/* <!--end::Col--> */}
										{/* <!--begin::Col--> */}
										<div className="col-xl-8">
											{/* <!--begin::Table widget 14--> */}
											<div className="card card-flush h-md-100">
												{/* <!--begin::Header--> */}
												<div className="card-header pt-7">
													{/* <!--begin::Title--> */}
													<h3 className="card-title align-items-start flex-column">
														<span className="card-label fw-bold text-gray-800">Projects Stats</span>
														<span className="text-gray-400 mt-1 fw-semibold fs-6">Updated 37 minutes ago</span>
													</h3>
													{/* <!--end::Title--> */}
													{/* <!--begin::Toolbar--> */}
													<div className="card-toolbar">
														<a href="../../demo1/dist/apps/ecommerce/catalog/add-product.html" className="btn btn-sm btn-light">History</a>
													</div>
													{/* <!--end::Toolbar--> */}
												</div>
												{/* <!--end::Header--> */}
												{/* <!--begin::Body--> */}
												<div className="card-body pt-6">
													{/* <!--begin::Table container--> */}
													<div className="table-responsive">
														{/* <!--begin::Table--> */}
														<table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
															{/* <!--begin::Table head--> */}
															<thead>
																<tr className="fs-7 fw-bold text-gray-400 border-bottom-0">
																	<th className="p-0 pb-3 min-w-175px text-start">ITEM</th>
																	<th className="p-0 pb-3 min-w-100px text-end">BUDGET</th>
																	<th className="p-0 pb-3 min-w-100px text-end">PROGRESS</th>
																	<th className="p-0 pb-3 min-w-175px text-end pe-12">STATUS</th>
																	<th className="p-0 pb-3 w-125px text-end pe-7">CHART</th>
																	<th className="p-0 pb-3 w-50px text-end">VIEW</th>
																</tr>
															</thead>
															{/* <!--end::Table head--> */}
															{/* <!--begin::Table body--> */}
															<tbody>
																<tr>
																	<td>
																		<div className="d-flex align-items-center">
																			<div className="symbol symbol-50px me-3">
																				<img src="%PUBLIC_URL%/assets/media/stock/600x600/img-49.jpg" className="" alt="" />
																			</div>
																			<div className="d-flex justify-content-start flex-column">
																				<a href="#" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Mivy App</a>
																				<span className="text-gray-400 fw-semibold d-block fs-7">Jane Cooper</span>
																			</div>
																		</div>
																	</td>
																	<td className="text-end pe-0">
																		<span className="text-gray-600 fw-bold fs-6">$32,400</span>
																	</td>
																	<td className="text-end pe-0">
																		{/* <!--begin::Label--> */}
																		<span className="badge badge-light-success fs-base">
																		<i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
																			<span className="path1"></span>
																			<span className="path2"></span>
																		</i>9.2%</span>
																		{/* <!--end::Label--> */}
																	</td>
																	<td className="text-end pe-12">
																		<span className="badge py-3 px-4 fs-7 badge-light-primary">In Process</span>
																	</td>
																	<td className="text-end pe-0">
																		<div id="kt_table_widget_14_chart_1" className="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
																	</td>
																	<td className="text-end">
																		<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
																			<i className="ki-duotone ki-black-right fs-2 text-gray-500"></i>
																		</a>
																	</td>
																</tr>
																<tr>
																	<td>
																		<div className="d-flex align-items-center">
																			<div className="symbol symbol-50px me-3">
																				<img src="%PUBLIC_URL%/assets/media/stock/600x600/img-40.jpg" className="" alt="" />
																			</div>
																			<div className="d-flex justify-content-start flex-column">
																				<a href="#" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Avionica</a>
																				<span className="text-gray-400 fw-semibold d-block fs-7">Esther Howard</span>
																			</div>
																		</div>
																	</td>
																	<td className="text-end pe-0">
																		<span className="text-gray-600 fw-bold fs-6">$256,910</span>
																	</td>
																	<td className="text-end pe-0">
																		{/* <!--begin::Label--> */}
																		<span className="badge badge-light-danger fs-base">
																		<i className="ki-duotone ki-arrow-down fs-5 text-danger ms-n1">
																			<span className="path1"></span>
																			<span className="path2"></span>
																		</i>0.4%</span>
																		{/* <!--end::Label--> */}
																	</td>
																	<td className="text-end pe-12">
																		<span className="badge py-3 px-4 fs-7 badge-light-warning">On Hold</span>
																	</td>
																	<td className="text-end pe-0">
																		<div id="kt_table_widget_14_chart_2" className="h-50px mt-n8 pe-7" data-kt-chart-color="danger"></div>
																	</td>
																	<td className="text-end">
																		<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
																			<i className="ki-duotone ki-black-right fs-2 text-gray-500"></i>
																		</a>
																	</td>
																</tr>
																<tr>
																	<td>
																		<div className="d-flex align-items-center">
																			<div className="symbol symbol-50px me-3">
																				<img src="%PUBLIC_URL%/assets/media/stock/600x600/img-39.jpg" className="" alt="" />
																			</div>
																			<div className="d-flex justify-content-start flex-column">
																				<a href="#" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Charto CRM</a>
																				<span className="text-gray-400 fw-semibold d-block fs-7">Jenny Wilson</span>
																			</div>
																		</div>
																	</td>
																	<td className="text-end pe-0">
																		<span className="text-gray-600 fw-bold fs-6">$8,220</span>
																	</td>
																	<td className="text-end pe-0">
																		{/* <!--begin::Label--> */}
																		<span className="badge badge-light-success fs-base">
																		<i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
																			<span className="path1"></span>
																			<span className="path2"></span>
																		</i>9.2%</span>
																		{/* <!--end::Label--> */}
																	</td>
																	<td className="text-end pe-12">
																		<span className="badge py-3 px-4 fs-7 badge-light-primary">In Process</span>
																	</td>
																	<td className="text-end pe-0">
																		<div id="kt_table_widget_14_chart_3" className="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
																	</td>
																	<td className="text-end">
																		<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
																			<i className="ki-duotone ki-black-right fs-2 text-gray-500"></i>
																		</a>
																	</td>
																</tr>
																<tr>
																	<td>
																		<div className="d-flex align-items-center">
																			<div className="symbol symbol-50px me-3">
																				<img src="%PUBLIC_URL%/assets/media/stock/600x600/img-47.jpg" className="" alt="" />
																			</div>
																			<div className="d-flex justify-content-start flex-column">
																				<a href="#" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Tower Hill</a>
																				<span className="text-gray-400 fw-semibold d-block fs-7">Cody Fisher</span>
																			</div>
																		</div>
																	</td>
																	<td className="text-end pe-0">
																		<span className="text-gray-600 fw-bold fs-6">$74,000</span>
																	</td>
																	<td className="text-end pe-0">
																		{/* <!--begin::Label--> */}
																		<span className="badge badge-light-success fs-base">
																		<i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
																			<span className="path1"></span>
																			<span className="path2"></span>
																		</i>9.2%</span>
																		{/* <!--end::Label--> */}
																	</td>
																	<td className="text-end pe-12">
																		<span className="badge py-3 px-4 fs-7 badge-light-success">Complated</span>
																	</td>
																	<td className="text-end pe-0">
																		<div id="kt_table_widget_14_chart_4" className="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
																	</td>
																	<td className="text-end">
																		<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
																			<i className="ki-duotone ki-black-right fs-2 text-gray-500"></i>
																		</a>
																	</td>
																</tr>
																<tr>
																	<td>
																		<div className="d-flex align-items-center">
																			<div className="symbol symbol-50px me-3">
																				<img src="%PUBLIC_URL%/assets/media/stock/600x600/img-48.jpg" className="" alt="" />
																			</div>
																			<div className="d-flex justify-content-start flex-column">
																				<a href="#" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">9 Degree</a>
																				<span className="text-gray-400 fw-semibold d-block fs-7">Savannah Nguyen</span>
																			</div>
																		</div>
																	</td>
																	<td className="text-end pe-0">
																		<span className="text-gray-600 fw-bold fs-6">$183,300</span>
																	</td>
																	<td className="text-end pe-0">
																		{/* <!--begin::Label--> */}
																		<span className="badge badge-light-danger fs-base">
																		<i className="ki-duotone ki-arrow-down fs-5 text-danger ms-n1">
																			<span className="path1"></span>
																			<span className="path2"></span>
																		</i>0.4%</span>
																		{/* <!--end::Label--> */}
																	</td>
																	<td className="text-end pe-12">
																		<span className="badge py-3 px-4 fs-7 badge-light-primary">In Process</span>
																	</td>
																	<td className="text-end pe-0">
																		<div id="kt_table_widget_14_chart_5" className="h-50px mt-n8 pe-7" data-kt-chart-color="danger"></div>
																	</td>
																	<td className="text-end">
																		<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
																			<i className="ki-duotone ki-black-right fs-2 text-gray-500"></i>
																		</a>
																	</td>
																</tr>
															</tbody>
															{/* <!--end::Table body--> */}
														</table>
													</div>
													{/* <!--end::Table--> */}
												</div>
												{/* <!--end: Card Body--> */}
											</div>
											{/* <!--end::Table widget 14--> */}
										</div>
										{/* <!--end::Col--> */}
									</div>
									{/* <!--end::Row--> */}
								</div>
								{/* <!--end::Content container--> */}
							</div>
							{/* <!--end::Content--> */}
						</div>
						{/* <!--end::Content wrapper--> */}
						{/* <!--begin::Footer--> */}
						<div id="kt_app_footer" className="app-footer">
							{/* <!--begin::Footer container--> */}
							<div className="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
								{/* <!--begin::Copyright--> */}
								<div className="text-dark order-2 order-md-1">
									<span className="text-muted fw-semibold me-1">2023&copy;</span>
									<a href="https://keenthemes.com" target="_blank" className="text-gray-800 text-hover-primary">Keenthemes</a>
								</div>
								{/* <!--end::Copyright--> */}
								{/* <!--begin::Menu--> */}
								<ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
									<li className="menu-item">
										<a href="https://keenthemes.com" target="_blank" className="menu-link px-2">About</a>
									</li>
									<li className="menu-item">
										<a href="https://devs.keenthemes.com" target="_blank" className="menu-link px-2">Support</a>
									</li>
									<li className="menu-item">
										<a href="https://themes.getbootstrap.com/product/keen-the-ultimate-bootstrap-admin-theme/" target="_blank" className="menu-link px-2">Purchase</a>
									</li>
								</ul>
								{/* <!--end::Menu--> */}
							</div>
							{/* <!--end::Footer container--> */}
						</div>
						{/* <!--end::Footer--> */}
					</div>
					{/* <!--end:::Main--> */}
				</div>
				{/* <!--end::Wrapper--> */}
			</div>
			{/* <!--end::Page--> */}
		</div>
		{/* <!--end::App--> */}
		
		{/* <!--begin::Drawers--> */}
		{/* <!--begin::Activities drawer--> */}
		<div id="kt_activities" className="bg-body" data-kt-drawer="true" data-kt-drawer-name="activities" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'lg': '900px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_activities_toggle" data-kt-drawer-close="#kt_activities_close">
			<div className="card shadow-none border-0 rounded-0">
				{/* <!--begin::Header--> */}
				<div className="card-header" id="kt_activities_header">
					<h3 className="card-title fw-bold text-dark">Activity Logs</h3>
					<div className="card-toolbar">
						<button type="button" className="btn btn-sm btn-icon btn-active-light-primary me-n5" id="kt_activities_close">
							<i className="ki-duotone ki-cross fs-1">
								<span className="path1"></span>
								<span className="path2"></span>
							</i>
						</button>
					</div>
				</div>
				{/* <!--end::Header--> */}
				{/* <!--begin::Body--> */}
				<div className="card-body position-relative" id="kt_activities_body">
					{/* <!--begin::Content--> */}
					<div id="kt_activities_scroll" className="position-relative scroll-y me-n5 pe-5" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-wrappers="#kt_activities_body" data-kt-scroll-dependencies="#kt_activities_header, #kt_activities_footer" data-kt-scroll-offset="5px">
						{/* <!--begin::Timeline items--> */}
						<div className="timeline">
							{/* <!--begin::Timeline item--> */}
							<div className="timeline-item">
								{/* <!--begin::Timeline line--> */}
								<div className="timeline-line w-40px"></div>
								{/* <!--end::Timeline line--> */}
								{/* <!--begin::Timeline icon--> */}
								<div className="timeline-icon symbol symbol-circle symbol-40px me-4">
									<div className="symbol-label bg-light">
										<i className="ki-duotone ki-message-text-2 fs-2 text-gray-500">
											<span className="path1"></span>
											<span className="path2"></span>
											<span className="path3"></span>
										</i>
									</div>
								</div>
								{/* <!--end::Timeline icon--> */}
								{/* <!--begin::Timeline content--> */}
								<div className="timeline-content mb-10 mt-n1">
									{/* <!--begin::Timeline heading--> */}
									<div className="pe-3 mb-5">
										{/* <!--begin::Title--> */}
										<div className="fs-5 fw-semibold mb-2">There are 2 new tasks for you in “AirPlus Mobile App” project:</div>
										{/* <!--end::Title--> */}
										{/* <!--begin::Description--> */}
										<div className="d-flex align-items-center mt-1 fs-6">
											{/* <!--begin::Info--> */}
											<div className="text-muted me-2 fs-7">Added at 4:23 PM by</div>
											{/* <!--end::Info--> */}
											{/* <!--begin::User--> */}
											<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
												<img src="%PUBLIC_URL%/assets/media/avatars/300-14.jpg" alt="img" />
											</div>
											{/* <!--end::User--> */}
										</div>
										{/* <!--end::Description--> */}
									</div>
									{/* <!--end::Timeline heading--> */}
									{/* <!--begin::Timeline details--> */}
									<div className="overflow-auto pb-5">
										{/* <!--begin::Record--> */}
										<div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">
											{/* <!--begin::Title--> */}
											<a href="../../demo1/dist/apps/projects/project.html" className="fs-5 text-dark text-hover-primary fw-semibold w-375px min-w-200px">Meeting with customer</a>
											{/* <!--end::Title--> */}
											{/* <!--begin::Label--> */}
											<div className="min-w-175px pe-2">
												<span className="badge badge-light text-muted">Application Design</span>
											</div>
											{/* <!--end::Label--> */}
											{/* <!--begin::Users--> */}
											<div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2">
												{/* <!--begin::User--> */}
												<div className="symbol symbol-circle symbol-25px">
													<img src="%PUBLIC_URL%/assets/media/avatars/300-2.jpg" alt="img" />
												</div>
												{/* <!--end::User--> */}
												{/* <!--begin::User--> */}
												<div className="symbol symbol-circle symbol-25px">
													<img src="%PUBLIC_URL%/assets/media/avatars/300-14.jpg" alt="img" />
												</div>
												{/* <!--end::User--> */}
												{/* <!--begin::User--> */}
												<div className="symbol symbol-circle symbol-25px">
													<div className="symbol-label fs-8 fw-semibold bg-primary text-inverse-primary">A</div>
												</div>
												{/* <!--end::User--> */}
											</div>
											{/* <!--end::Users--> */}
											{/* <!--begin::Progress--> */}
											<div className="min-w-125px pe-2">
												<span className="badge badge-light-primary">In Progress</span>
											</div>
											{/* <!--end::Progress--> */}
											{/* <!--begin::Action--> */}
											<a href="../../demo1/dist/apps/projects/project.html" className="btn btn-sm btn-light btn-active-light-primary">View</a>
											{/* <!--end::Action--> */}
										</div>
										{/* <!--end::Record--> */}
										{/* <!--begin::Record--> */}
										<div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-0">
											{/* <!--begin::Title--> */}
											<a href="../../demo1/dist/apps/projects/project.html" className="fs-5 text-dark text-hover-primary fw-semibold w-375px min-w-200px">Project Delivery Preparation</a>
											{/* <!--end::Title--> */}
											{/* <!--begin::Label--> */}
											<div className="min-w-175px">
												<span className="badge badge-light text-muted">CRM System Development</span>
											</div>
											{/* <!--end::Label--> */}
											{/* <!--begin::Users--> */}
											<div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px">
												{/* <!--begin::User--> */}
												<div className="symbol symbol-circle symbol-25px">
													<img src="%PUBLIC_URL%/assets/media/avatars/300-20.jpg" alt="img" />
												</div>
												{/* <!--end::User--> */}
												{/* <!--begin::User--> */}
												<div className="symbol symbol-circle symbol-25px">
													<div className="symbol-label fs-8 fw-semibold bg-success text-inverse-primary">B</div>
												</div>
												{/* <!--end::User--> */}
											</div>
											{/* <!--end::Users--> */}
											{/* <!--begin::Progress--> */}
											<div className="min-w-125px">
												<span className="badge badge-light-success">Completed</span>
											</div>
											{/* <!--end::Progress--> */}
											{/* <!--begin::Action--> */}
											<a href="../../demo1/dist/apps/projects/project.html" className="btn btn-sm btn-light btn-active-light-primary">View</a>
											{/* <!--end::Action--> */}
										</div>
										{/* <!--end::Record--> */}
									</div>
									{/* <!--end::Timeline details--> */}
								</div>
								{/* <!--end::Timeline content--> */}
							</div>
							{/* <!--end::Timeline item--> */}
							{/* <!--begin::Timeline item--> */}
							<div className="timeline-item">
								{/* <!--begin::Timeline line--> */}
								<div className="timeline-line w-40px"></div>
								{/* <!--end::Timeline line--> */}
								{/* <!--begin::Timeline icon--> */}
								<div className="timeline-icon symbol symbol-circle symbol-40px">
									<div className="symbol-label bg-light">
										<i className="ki-duotone ki-flag fs-2 text-gray-500">
											<span className="path1"></span>
											<span className="path2"></span>
										</i>
									</div>
								</div>
								{/* <!--end::Timeline icon--> */}
								{/* <!--begin::Timeline content--> */}
								<div className="timeline-content mb-10 mt-n2">
									{/* <!--begin::Timeline heading--> */}
									<div className="overflow-auto pe-3">
										{/* <!--begin::Title--> */}
										<div className="fs-5 fw-semibold mb-2">Invitation for crafting engaging designs that speak human workshop</div>
										{/* <!--end::Title--> */}
										{/* <!--begin::Description--> */}
										<div className="d-flex align-items-center mt-1 fs-6">
											{/* <!--begin::Info--> */}
											<div className="text-muted me-2 fs-7">Sent at 4:23 PM by</div>
											{/* <!--end::Info--> */}
											{/* <!--begin::User--> */}
											<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Alan Nilson">
												<img src="%PUBLIC_URL%/assets/media/avatars/300-1.jpg" alt="img" />
											</div>
											{/* <!--end::User--> */}
										</div>
										{/* <!--end::Description--> */}
									</div>
									{/* <!--end::Timeline heading--> */}
								</div>
								{/* <!--end::Timeline content--> */}
							</div>
							{/* <!--end::Timeline item--> */}
							{/* <!--begin::Timeline item--> */}
							<div className="timeline-item">
								{/* <!--begin::Timeline line--> */}
								<div className="timeline-line w-40px"></div>
								{/* <!--end::Timeline line--> */}
								{/* <!--begin::Timeline icon--> */}
								<div className="timeline-icon symbol symbol-circle symbol-40px">
									<div className="symbol-label bg-light">
										<i className="ki-duotone ki-disconnect fs-2 text-gray-500">
											<span className="path1"></span>
											<span className="path2"></span>
											<span className="path3"></span>
											<span className="path4"></span>
											<span className="path5"></span>
										</i>
									</div>
								</div>
								{/* <!--end::Timeline icon--> */}
								{/* <!--begin::Timeline content--> */}
								<div className="timeline-content mb-10 mt-n1">
									{/* <!--begin::Timeline heading--> */}
									<div className="mb-5 pe-3">
										{/* <!--begin::Title--> */}
										<a href="#" className="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2">3 New Incoming Project Files:</a>
										{/* <!--end::Title--> */}
										{/* <!--begin::Description--> */}
										<div className="d-flex align-items-center mt-1 fs-6">
											{/* <!--begin::Info--> */}
											<div className="text-muted me-2 fs-7">Sent at 10:30 PM by</div>
											{/* <!--end::Info--> */}
											{/* <!--begin::User--> */}
											<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Jan Hummer">
												<img src="%PUBLIC_URL%/assets/media/avatars/300-23.jpg" alt="img" />
											</div>
											{/* <!--end::User--> */}
										</div>
										{/* <!--end::Description--> */}
									</div>
									{/* <!--end::Timeline heading--> */}
									{/* <!--begin::Timeline details--> */}
									<div className="overflow-auto pb-5">
										<div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
											{/* <!--begin::Item--> */}
											<div className="d-flex flex-aligns-center pe-10 pe-lg-20">
												{/* <!--begin::Icon--> */}
												<img alt="" className="w-30px me-3" src="%PUBLIC_URL%/assets/media/svg/files/pdf.svg" />
												{/* <!--end::Icon--> */}
												{/* <!--begin::Info--> */}
												<div className="ms-1 fw-semibold">
													{/* <!--begin::Desc--> */}
													<a href="../../demo1/dist/apps/projects/project.html" className="fs-6 text-hover-primary fw-bold">Finance KPI App Guidelines</a>
													{/* <!--end::Desc--> */}
													{/* <!--begin::Number--> */}
													<div className="text-gray-400">1.9mb</div>
													{/* <!--end::Number--> */}
												</div>
												{/* <!--begin::Info--> */}
											</div>
											{/* <!--end::Item--> */}
											{/* <!--begin::Item--> */}
											<div className="d-flex flex-aligns-center pe-10 pe-lg-20">
												{/* <!--begin::Icon--> */}
												<img alt="../../demo1/dist/apps/projects/project.html" className="w-30px me-3" src="%PUBLIC_URL%/assets/media/svg/files/doc.svg" />
												{/* <!--end::Icon--> */}
												{/* <!--begin::Info--> */}
												<div className="ms-1 fw-semibold">
													{/* <!--begin::Desc--> */}
													<a href="#" className="fs-6 text-hover-primary fw-bold">Client UAT Testing Results</a>
													{/* <!--end::Desc--> */}
													{/* <!--begin::Number--> */}
													<div className="text-gray-400">18kb</div>
													{/* <!--end::Number--> */}
												</div>
												{/* <!--end::Info--> */}
											</div>
											{/* <!--end::Item--> */}
											{/* <!--begin::Item--> */}
											<div className="d-flex flex-aligns-center">
												{/* <!--begin::Icon--> */}
												<img alt="../../demo1/dist/apps/projects/project.html" className="w-30px me-3" src="%PUBLIC_URL%/assets/media/svg/files/css.svg" />
												{/* <!--end::Icon--> */}
												{/* <!--begin::Info--> */}
												<div className="ms-1 fw-semibold">
													{/* <!--begin::Desc--> */}
													<a href="#" className="fs-6 text-hover-primary fw-bold">Finance Reports</a>
													{/* <!--end::Desc--> */}
													{/* <!--begin::Number--> */}
													<div className="text-gray-400">20mb</div>
													{/* <!--end::Number--> */}
												</div>
												{/* <!--end::Icon--> */}
											</div>
											{/* <!--end::Item--> */}
										</div>
									</div>
									{/* <!--end::Timeline details--> */}
								</div>
								{/* <!--end::Timeline content--> */}
							</div>
							{/* <!--end::Timeline item--> */}
							{/* <!--begin::Timeline item--> */}
							<div className="timeline-item">
								{/* <!--begin::Timeline line--> */}
								<div className="timeline-line w-40px"></div>
								{/* <!--end::Timeline line--> */}
								{/* <!--begin::Timeline icon--> */}
								<div className="timeline-icon symbol symbol-circle symbol-40px">
									<div className="symbol-label bg-light">
										<i className="ki-duotone ki-abstract-26 fs-2 text-gray-500">
											<span className="path1"></span>
											<span className="path2"></span>
										</i>
									</div>
								</div>
								{/* <!--end::Timeline icon--> */}
								{/* <!--begin::Timeline content--> */}
								<div className="timeline-content mb-10 mt-n1">
									{/* <!--begin::Timeline heading--> */}
									<div className="pe-3 mb-5">
										{/* <!--begin::Title--> */}
										<div className="fs-5 fw-semibold mb-2">Task
										<a href="#" className="text-primary fw-bold me-1">#45890</a>merged with
										<a href="#" className="text-primary fw-bold me-1">#45890</a>in “Ads Pro Admin Dashboard project:</div>
										{/* <!--end::Title--> */}
										{/* <!--begin::Description--> */}
										<div className="d-flex align-items-center mt-1 fs-6">
											{/* <!--begin::Info--> */}
											<div className="text-muted me-2 fs-7">Initiated at 4:23 PM by</div>
											{/* <!--end::Info--> */}
											{/* <!--begin::User--> */}
											<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
												<img src="%PUBLIC_URL%/assets/media/avatars/300-14.jpg" alt="img" />
											</div>
											{/* <!--end::User--> */}
										</div>
										{/* <!--end::Description--> */}
									</div>
									{/* <!--end::Timeline heading--> */}
								</div>
								{/* <!--end::Timeline content--> */}
							</div>
							{/* <!--end::Timeline item--> */}
							{/* <!--begin::Timeline item--> */}
							<div className="timeline-item">
								{/* <!--begin::Timeline line--> */}
								<div className="timeline-line w-40px"></div>
								{/* <!--end::Timeline line--> */}
								{/* <!--begin::Timeline icon--> */}
								<div className="timeline-icon symbol symbol-circle symbol-40px">
									<div className="symbol-label bg-light">
										<i className="ki-duotone ki-pencil fs-2 text-gray-500">
											<span className="path1"></span>
											<span className="path2"></span>
										</i>
									</div>
								</div>
								{/* <!--end::Timeline icon--> */}
								{/* <!--begin::Timeline content--> */}
								<div className="timeline-content mb-10 mt-n1">
									{/* <!--begin::Timeline heading--> */}
									<div className="pe-3 mb-5">
										{/* <!--begin::Title--> */}
										<div className="fs-5 fw-semibold mb-2">3 new application design concepts added:</div>
										{/* <!--end::Title--> */}
										{/* <!--begin::Description--> */}
										<div className="d-flex align-items-center mt-1 fs-6">
											{/* <!--begin::Info--> */}
											<div className="text-muted me-2 fs-7">Created at 4:23 PM by</div>
											{/* <!--end::Info--> */}
											{/* <!--begin::User--> */}
											<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Marcus Dotson">
												<img src="%PUBLIC_URL%/assets/media/avatars/300-2.jpg" alt="img" />
											</div>
											{/* <!--end::User--> */}
										</div>
										{/* <!--end::Description--> */}
									</div>
									{/* <!--end::Timeline heading--> */}
									{/* <!--begin::Timeline details--> */}
									<div className="overflow-auto pb-5">
										<div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
											{/* <!--begin::Item--> */}
											<div className="overlay me-10">
												{/* <!--begin::Image--> */}
												<div className="overlay-wrapper">
													<img alt="img" className="rounded w-150px" src="%PUBLIC_URL%/assets/media/stock/600x400/img-29.jpg" />
												</div>
												{/* <!--end::Image--> */}
												{/* <!--begin::Link--> */}
												<div className="overlay-layer bg-dark bg-opacity-10 rounded">
													<a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>
												</div>
												{/* <!--end::Link--> */}
											</div>
											{/* <!--end::Item--> */}
											{/* <!--begin::Item--> */}
											<div className="overlay me-10">
												{/* <!--begin::Image--> */}
												<div className="overlay-wrapper">
													<img alt="img" className="rounded w-150px" src="%PUBLIC_URL%/assets/media/stock/600x400/img-31.jpg" />
												</div>
												{/* <!--end::Image--> */}
												{/* <!--begin::Link--> */}
												<div className="overlay-layer bg-dark bg-opacity-10 rounded">
													<a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>
												</div>
												{/* <!--end::Link--> */}
											</div>
											{/* <!--end::Item--> */}
											{/* <!--begin::Item--> */}
											<div className="overlay">
												{/* <!--begin::Image--> */}
												<div className="overlay-wrapper">
													<img alt="img" className="rounded w-150px" src="%PUBLIC_URL%/assets/media/stock/600x400/img-40.jpg" />
												</div>
												{/* <!--end::Image--> */}
												{/* <!--begin::Link--> */}
												<div className="overlay-layer bg-dark bg-opacity-10 rounded">
													<a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>
												</div>
												{/* <!--end::Link--> */}
											</div>
											{/* <!--end::Item--> */}
										</div>
									</div>
									{/* <!--end::Timeline details--> */}
								</div>
								{/* <!--end::Timeline content--> */}
							</div>
							{/* <!--end::Timeline item--> */}
							{/* <!--begin::Timeline item--> */}
							<div className="timeline-item">
								{/* <!--begin::Timeline line--> */}
								<div className="timeline-line w-40px"></div>
								{/* <!--end::Timeline line--> */}
								{/* <!--begin::Timeline icon--> */}
								<div className="timeline-icon symbol symbol-circle symbol-40px">
									<div className="symbol-label bg-light">
										<i className="ki-duotone ki-sms fs-2 text-gray-500">
											<span className="path1"></span>
											<span className="path2"></span>
										</i>
									</div>
								</div>
								{/* <!--end::Timeline icon--> */}
								{/* <!--begin::Timeline content--> */}
								<div className="timeline-content mb-10 mt-n1">
									{/* <!--begin::Timeline heading--> */}
									<div className="pe-3 mb-5">
										{/* <!--begin::Title--> */}
										<div className="fs-5 fw-semibold mb-2">New case
										<a href="#" className="text-primary fw-bold me-1">#67890</a>is assigned to you in Multi-platform Database Design project</div>
										{/* <!--end::Title--> */}
										{/* <!--begin::Description--> */}
										<div className="overflow-auto pb-5">
											{/* <!--begin::Wrapper--> */}
											<div className="d-flex align-items-center mt-1 fs-6">
												{/* <!--begin::Info--> */}
												<div className="text-muted me-2 fs-7">Added at 4:23 PM by</div>
												{/* <!--end::Info--> */}
												{/* <!--begin::User--> */}
												<a href="#" className="text-primary fw-bold me-1">Alice Tan</a>
												{/* <!--end::User--> */}
											</div>
											{/* <!--end::Wrapper--> */}
										</div>
										{/* <!--end::Description--> */}
									</div>
									{/* <!--end::Timeline heading--> */}
								</div>
								{/* <!--end::Timeline content--> */}
							</div>
							{/* <!--end::Timeline item--> */}
							{/* <!--begin::Timeline item--> */}
							<div className="timeline-item">
								{/* <!--begin::Timeline line--> */}
								<div className="timeline-line w-40px"></div>
								{/* <!--end::Timeline line--> */}
								{/* <!--begin::Timeline icon--> */}
								<div className="timeline-icon symbol symbol-circle symbol-40px">
									<div className="symbol-label bg-light">
										<i className="ki-duotone ki-pencil fs-2 text-gray-500">
											<span className="path1"></span>
											<span className="path2"></span>
										</i>
									</div>
								</div>
								{/* <!--end::Timeline icon--> */}
								{/* <!--begin::Timeline content--> */}
								<div className="timeline-content mb-10 mt-n1">
									{/* <!--begin::Timeline heading--> */}
									<div className="pe-3 mb-5">
										{/* <!--begin::Title--> */}
										<div className="fs-5 fw-semibold mb-2">You have received a new order:</div>
										{/* <!--end::Title--> */}
										{/* <!--begin::Description--> */}
										<div className="d-flex align-items-center mt-1 fs-6">
											{/* <!--begin::Info--> */}
											<div className="text-muted me-2 fs-7">Placed at 5:05 AM by</div>
											{/* <!--end::Info--> */}
											{/* <!--begin::User--> */}
											<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Robert Rich">
												<img src="%PUBLIC_URL%/assets/media/avatars/300-4.jpg" alt="img" />
											</div>
											{/* <!--end::User--> */}
										</div>
										{/* <!--end::Description--> */}
									</div>
									{/* <!--end::Timeline heading--> */}
									{/* <!--begin::Timeline details--> */}
									<div className="overflow-auto pb-5">
										{/* <!--begin::Notice--> */}
										<div className="notice d-flex bg-light-primary rounded border-primary border border-dashed min-w-lg-600px flex-shrink-0 p-6">
											{/* <!--begin::Icon--> */}
											<i className="ki-duotone ki-devices-2 fs-2tx text-primary me-4">
												<span className="path1"></span>
												<span className="path2"></span>
												<span className="path3"></span>
											</i>
											{/* <!--end::Icon--> */}
											{/* <!--begin::Wrapper--> */}
											<div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
												{/* <!--begin::Content--> */}
												<div className="mb-3 mb-md-0 fw-semibold">
													<h4 className="text-gray-900 fw-bold">Database Backup Process Completed!</h4>
													<div className="fs-6 text-gray-700 pe-7">Login into Admin Dashboard to make sure the data integrity is OK</div>
												</div>
												{/* <!--end::Content--> */}
												{/* <!--begin::Action--> */}
												<a href="#" className="btn btn-primary px-6 align-self-center text-nowrap">Proceed</a>
												{/* <!--end::Action--> */}
											</div>
											{/* <!--end::Wrapper--> */}
										</div>
										{/* <!--end::Notice--> */}
									</div>
									{/* <!--end::Timeline details--> */}
								</div>
								{/* <!--end::Timeline content--> */}
							</div>
							{/* <!--end::Timeline item--> */}
							{/* <!--begin::Timeline item--> */}
							<div className="timeline-item">
								{/* <!--begin::Timeline line--> */}
								<div className="timeline-line w-40px"></div>
								{/* <!--end::Timeline line--> */}
								{/* <!--begin::Timeline icon--> */}
								<div className="timeline-icon symbol symbol-circle symbol-40px">
									<div className="symbol-label bg-light">
										<i className="ki-duotone ki-basket fs-2 text-gray-500">
											<span className="path1"></span>
											<span className="path2"></span>
											<span className="path3"></span>
											<span className="path4"></span>
										</i>
									</div>
								</div>
								{/* <!--end::Timeline icon--> */}
								{/* <!--begin::Timeline content--> */}
								<div className="timeline-content mt-n1">
									{/* <!--begin::Timeline heading--> */}
									<div className="pe-3 mb-5">
										{/* <!--begin::Title--> */}
										<div className="fs-5 fw-semibold mb-2">New order
										<a href="#" className="text-primary fw-bold me-1">#67890</a>is placed for Workshow Planning & Budget Estimation</div>
										{/* <!--end::Title--> */}
										{/* <!--begin::Description--> */}
										<div className="d-flex align-items-center mt-1 fs-6">
											{/* <!--begin::Info--> */}
											<div className="text-muted me-2 fs-7">Placed at 4:23 PM by</div>
											{/* <!--end::Info--> */}
											{/* <!--begin::User--> */}
											<a href="#" className="text-primary fw-bold me-1">Jimmy Bold</a>
											{/* <!--end::User--> */}
										</div>
										{/* <!--end::Description--> */}
									</div>
									{/* <!--end::Timeline heading--> */}
								</div>
								{/* <!--end::Timeline content--> */}
							</div>
							{/* <!--end::Timeline item--> */}
						</div>
						{/* <!--end::Timeline items--> */}
					</div>
					{/* <!--end::Content--> */}
				</div>
				{/* <!--end::Body--> */}
				{/* <!--begin::Footer--> */}
				<div className="card-footer py-5 text-center" id="kt_activities_footer">
					<a href="../../demo1/dist/pages/user-profile/activity.html" className="btn btn-bg-body text-primary">View All Activities
					<i className="ki-duotone ki-arrow-right fs-3 text-primary">
						<span className="path1"></span>
						<span className="path2"></span>
					</i></a>
				</div>
				{/* <!--end::Footer--> */}
			</div>
		</div>
		{/* <!--end::Activities drawer--> */}
		{/* <!--begin::Chat drawer--> */}
		<div id="kt_drawer_chat" className="bg-body" data-kt-drawer="true" data-kt-drawer-name="chat" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'md': '500px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_drawer_chat_toggle" data-kt-drawer-close="#kt_drawer_chat_close">
			{/* <!--begin::Messenger--> */}
			<div className="card w-100 border-0 rounded-0" id="kt_drawer_chat_messenger">
				{/* <!--begin::Card header--> */}
				<div className="card-header pe-5" id="kt_drawer_chat_messenger_header">
					{/* <!--begin::Title--> */}
					<div className="card-title">
						{/* <!--begin::User--> */}
						<div className="d-flex justify-content-center flex-column me-3">
							<a href="#" className="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1">Brian Cox</a>
							{/* <!--begin::Info--> */}
							<div className="mb-0 lh-1">
								<span className="badge badge-success badge-circle w-10px h-10px me-1"></span>
								<span className="fs-7 fw-semibold text-muted">Active</span>
							</div>
							{/* <!--end::Info--> */}
						</div>
						{/* <!--end::User--> */}
					</div>
					{/* <!--end::Title--> */}
					{/* <!--begin::Card toolbar--> */}
					<div className="card-toolbar">
						{/* <!--begin::Menu--> */}
						<div className="me-0">
							<button className="btn btn-sm btn-icon btn-active-color-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
								<i className="ki-duotone ki-dots-square fs-2">
									<span className="path1"></span>
									<span className="path2"></span>
									<span className="path3"></span>
									<span className="path4"></span>
								</i>
							</button>
							{/* <!--begin::Menu 3--> */}
							<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
								{/* <!--begin::Heading--> */}
								<div className="menu-item px-3">
									<div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Contacts</div>
								</div>
								{/* <!--end::Heading--> */}
								{/* <!--begin::Menu item--> */}
								<div className="menu-item px-3">
									<a href="#" className="menu-link px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_users_search">Add Contact</a>
								</div>
								{/* <!--end::Menu item--> */}
								{/* <!--begin::Menu item--> */}
								<div className="menu-item px-3">
									<a href="#" className="menu-link flex-stack px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">Invite Contacts
									<span className="ms-2" data-bs-toggle="tooltip" title="Specify a contact email to send an invitation">
										<i className="ki-duotone ki-information fs-7">
											<span className="path1"></span>
											<span className="path2"></span>
											<span className="path3"></span>
										</i>
									</span></a>
								</div>
								{/* <!--end::Menu item--> */}
								{/* <!--begin::Menu item--> */}
								<div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
									<a href="#" className="menu-link px-3">
										<span className="menu-title">Groups</span>
										<span className="menu-arrow"></span>
									</a>
									{/* <!--begin::Menu sub--> */}
									<div className="menu-sub menu-sub-dropdown w-175px py-4">
										{/* <!--begin::Menu item--> */}
										<div className="menu-item px-3">
											<a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Create Group</a>
										</div>
										{/* <!--end::Menu item--> */}
										{/* <!--begin::Menu item--> */}
										<div className="menu-item px-3">
											<a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Invite Members</a>
										</div>
										{/* <!--end::Menu item--> */}
										{/* <!--begin::Menu item--> */}
										<div className="menu-item px-3">
											<a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Settings</a>
										</div>
										{/* <!--end::Menu item--> */}
									</div>
									{/* <!--end::Menu sub--> */}
								</div>
								{/* <!--end::Menu item--> */}
								{/* <!--begin::Menu item--> */}
								<div className="menu-item px-3 my-1">
									<a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Settings</a>
								</div>
								{/* <!--end::Menu item--> */}
							</div>
							{/* <!--end::Menu 3--> */}
						</div>
						{/* <!--end::Menu--> */}
						{/* <!--begin::Close--> */}
						<div className="btn btn-sm btn-icon btn-active-color-primary" id="kt_drawer_chat_close">
							<i className="ki-duotone ki-cross-square fs-2">
								<span className="path1"></span>
								<span className="path2"></span>
							</i>
						</div>
						{/* <!--end::Close--> */}
					</div>
					{/* <!--end::Card toolbar--> */}
				</div>
				{/* <!--end::Card header--> */}
				{/* <!--begin::Card body--> */}
				<div className="card-body" id="kt_drawer_chat_messenger_body">
					{/* <!--begin::Messages--> */}
					<div className="scroll-y me-n5 pe-5" data-kt-element="messages" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer" data-kt-scroll-wrappers="#kt_drawer_chat_messenger_body" data-kt-scroll-offset="0px">
						{/* <!--begin::Message(in)--> */}
						<div className="d-flex justify-content-start mb-10">
							{/* <!--begin::Wrapper--> */}
							<div className="d-flex flex-column align-items-start">
								{/* <!--begin::User--> */}
								<div className="d-flex align-items-center mb-2">
									{/* <!--begin::Avatar--> */}
									<div className="symbol symbol-35px symbol-circle">
										<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-25.jpg" />
									</div>
									{/* <!--end::Avatar--> */}
									{/* <!--begin::Details--> */}
									<div className="ms-3">
										<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
										<span className="text-muted fs-7 mb-1">2 mins</span>
									</div>
									{/* <!--end::Details--> */}
								</div>
								{/* <!--end::User--> */}
								{/* <!--begin::Text--> */}
								<div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">How likely are you to recommend our company to your friends and family ?</div>
								{/* <!--end::Text--> */}
							</div>
							{/* <!--end::Wrapper--> */}
						</div>
						{/* <!--end::Message(in)--> */}
						{/* <!--begin::Message(out)--> */}
						<div className="d-flex justify-content-end mb-10">
							{/* <!--begin::Wrapper--> */}
							<div className="d-flex flex-column align-items-end">
								{/* <!--begin::User--> */}
								<div className="d-flex align-items-center mb-2">
									{/* <!--begin::Details--> */}
									<div className="me-3">
										<span className="text-muted fs-7 mb-1">5 mins</span>
										<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
									</div>
									{/* <!--end::Details--> */}
									{/* <!--begin::Avatar--> */}
									<div className="symbol symbol-35px symbol-circle">
										<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-1.jpg" />
									</div>
									{/* <!--end::Avatar--> */}
								</div>
								{/* <!--end::User--> */}
								{/* <!--begin::Text--> */}
								<div className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.</div>
								{/* <!--end::Text--> */}
							</div>
							{/* <!--end::Wrapper--> */}
						</div>
						{/* <!--end::Message(out)--> */}
						{/* <!--begin::Message(in)--> */}
						<div className="d-flex justify-content-start mb-10">
							{/* <!--begin::Wrapper--> */}
							<div className="d-flex flex-column align-items-start">
								{/* <!--begin::User--> */}
								<div className="d-flex align-items-center mb-2">
									{/* <!--begin::Avatar--> */}
									<div className="symbol symbol-35px symbol-circle">
										<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-25.jpg" />
									</div>
									{/* <!--end::Avatar--> */}
									{/* <!--begin::Details--> */}
									<div className="ms-3">
										<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
										<span className="text-muted fs-7 mb-1">1 Hour</span>
									</div>
									{/* <!--end::Details--> */}
								</div>
								{/* <!--end::User--> */}
								{/* <!--begin::Text--> */}
								<div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">Ok, Understood!</div>
								{/* <!--end::Text--> */}
							</div>
							{/* <!--end::Wrapper--> */}
						</div>
						{/* <!--end::Message(in)--> */}
						{/* <!--begin::Message(out)--> */}
						<div className="d-flex justify-content-end mb-10">
							{/* <!--begin::Wrapper--> */}
							<div className="d-flex flex-column align-items-end">
								{/* <!--begin::User--> */}
								<div className="d-flex align-items-center mb-2">
									{/* <!--begin::Details--> */}
									<div className="me-3">
										<span className="text-muted fs-7 mb-1">2 Hours</span>
										<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
									</div>
									{/* <!--end::Details--> */}
									{/* <!--begin::Avatar--> */}
									<div className="symbol symbol-35px symbol-circle">
										<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-1.jpg" />
									</div>
									{/* <!--end::Avatar--> */}
								</div>
								{/* <!--end::User--> */}
								{/* <!--begin::Text--> */}
								<div className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">You’ll receive notifications for all issues, pull requests!</div>
								{/* <!--end::Text--> */}
							</div>
							{/* <!--end::Wrapper--> */}
						</div>
						{/* <!--end::Message(out)--> */}
						{/* <!--begin::Message(in)--> */}
						<div className="d-flex justify-content-start mb-10">
							{/* <!--begin::Wrapper--> */}
							<div className="d-flex flex-column align-items-start">
								{/* <!--begin::User--> */}
								<div className="d-flex align-items-center mb-2">
									{/* <!--begin::Avatar--> */}
									<div className="symbol symbol-35px symbol-circle">
										<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-25.jpg" />
									</div>
									{/* <!--end::Avatar--> */}
									{/* <!--begin::Details--> */}
									<div className="ms-3">
										<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
										<span className="text-muted fs-7 mb-1">3 Hours</span>
									</div>
									{/* <!--end::Details--> */}
								</div>
								{/* <!--end::User--> */}
								{/* <!--begin::Text--> */}
								<div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">You can unwatch this repository immediately by clicking here:
								<a href="https://keenthemes.com">Keenthemes.com</a></div>
								{/* <!--end::Text--> */}
							</div>
							{/* <!--end::Wrapper--> */}
						</div>
						{/* <!--end::Message(in)--> */}
						{/* <!--begin::Message(out)--> */}
						<div className="d-flex justify-content-end mb-10">
							{/* <!--begin::Wrapper--> */}
							<div className="d-flex flex-column align-items-end">
								{/* <!--begin::User--> */}
								<div className="d-flex align-items-center mb-2">
									{/* <!--begin::Details--> */}
									<div className="me-3">
										<span className="text-muted fs-7 mb-1">4 Hours</span>
										<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
									</div>
									{/* <!--end::Details--> */}
									{/* <!--begin::Avatar--> */}
									<div className="symbol symbol-35px symbol-circle">
										<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-1.jpg" />
									</div>
									{/* <!--end::Avatar--> */}
								</div>
								{/* <!--end::User--> */}
								{/* <!--begin::Text--> */}
								<div className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">Most purchased Business courses during this sale!</div>
								{/* <!--end::Text--> */}
							</div>
							{/* <!--end::Wrapper--> */}
						</div>
						{/* <!--end::Message(out)--> */}
						{/* <!--begin::Message(in)--> */}
						<div className="d-flex justify-content-start mb-10">
							{/* <!--begin::Wrapper--> */}
							<div className="d-flex flex-column align-items-start">
								{/* <!--begin::User--> */}
								<div className="d-flex align-items-center mb-2">
									{/* <!--begin::Avatar--> */}
									<div className="symbol symbol-35px symbol-circle">
										<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-25.jpg" />
									</div>
									{/* <!--end::Avatar--> */}
									{/* <!--begin::Details--> */}
									<div className="ms-3">
										<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
										<span className="text-muted fs-7 mb-1">5 Hours</span>
									</div>
									{/* <!--end::Details--> */}
								</div>
								{/* <!--end::User--> */}
								{/* <!--begin::Text--> */}
								<div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">Company BBQ to celebrate the last quater achievements and goals. Food and drinks provided</div>
								{/* <!--end::Text--> */}
							</div>
							{/* <!--end::Wrapper--> */}
						</div>
						{/* <!--end::Message(in)--> */}
						{/* <!--begin::Message(template for out)--> */}
						<div className="d-flex justify-content-end mb-10 d-none" data-kt-element="template-out">
							{/* <!--begin::Wrapper--> */}
							<div className="d-flex flex-column align-items-end">
								{/* <!--begin::User--> */}
								<div className="d-flex align-items-center mb-2">
									{/* <!--begin::Details--> */}
									<div className="me-3">
										<span className="text-muted fs-7 mb-1">Just now</span>
										<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
									</div>
									{/* <!--end::Details--> */}
									{/* <!--begin::Avatar--> */}
									<div className="symbol symbol-35px symbol-circle">
										<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-1.jpg" />
									</div>
									{/* <!--end::Avatar--> */}
								</div>
								{/* <!--end::User--> */}
								{/* <!--begin::Text--> */}
								<div className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text"></div>
								{/* <!--end::Text--> */}
							</div>
							{/* <!--end::Wrapper--> */}
						</div>
						{/* <!--end::Message(template for out)--> */}
						{/* <!--begin::Message(template for in)--> */}
						<div className="d-flex justify-content-start mb-10 d-none" data-kt-element="template-in">
							{/* <!--begin::Wrapper--> */}
							<div className="d-flex flex-column align-items-start">
								{/* <!--begin::User--> */}
								<div className="d-flex align-items-center mb-2">
									{/* <!--begin::Avatar--> */}
									<div className="symbol symbol-35px symbol-circle">
										<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-25.jpg" />
									</div>
									{/* <!--end::Avatar--> */}
									{/* <!--begin::Details--> */}
									<div className="ms-3">
										<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
										<span className="text-muted fs-7 mb-1">Just now</span>
									</div>
									{/* <!--end::Details--> */}
								</div>
								{/* <!--end::User--> */}
								{/* <!--begin::Text--> */}
								<div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">Right before vacation season we have the next Big Deal for you.</div>
								{/* <!--end::Text--> */}
							</div>
							{/* <!--end::Wrapper--> */}
						</div>
						{/* <!--end::Message(template for in)--> */}
					</div>
					{/* <!--end::Messages--> */}
				</div>
				{/* <!--end::Card body--> */}
				{/* <!--begin::Card footer--> */}
				<div className="card-footer pt-4" id="kt_drawer_chat_messenger_footer">
					{/* <!--begin::Input--> */}
					<textarea className="form-control form-control-flush mb-3" rows="1" data-kt-element="input" placeholder="Type a message"></textarea>
					{/* <!--end::Input--> */}
					{/* <!--begin:Toolbar--> */}
					<div className="d-flex flex-stack">
						{/* <!--begin::Actions--> */}
						<div className="d-flex align-items-center me-2">
							<button className="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" title="Coming soon">
								<i className="ki-duotone ki-paper-clip fs-3"></i>
							</button>
							<button className="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" title="Coming soon">
								<i className="ki-duotone ki-cloud-add fs-3">
									<span className="path1"></span>
									<span className="path2"></span>
								</i>
							</button>
						</div>
						{/* <!--end::Actions--> */}
						{/* <!--begin::Send--> */}
						<button className="btn btn-primary" type="button" data-kt-element="send">Send</button>
						{/* <!--end::Send--> */}
					</div>
					{/* <!--end::Toolbar--> */}
				</div>
				{/* <!--end::Card footer--> */}
			</div>
			{/* <!--end::Messenger--> */}
		</div>
		{/* <!--end::Chat drawer--> */}
		{/* <!--begin::Chat drawer--> */}
		<div id="kt_shopping_cart" className="bg-body" data-kt-drawer="true" data-kt-drawer-name="cart" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'md': '500px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_drawer_shopping_cart_toggle" data-kt-drawer-close="#kt_drawer_shopping_cart_close">
			{/* <!--begin::Messenger--> */}
			<div className="card card-flush w-100 rounded-0">
				{/* <!--begin::Card header--> */}
				<div className="card-header">
					{/* <!--begin::Title--> */}
					<h3 className="card-title text-gray-900 fw-bold">Shopping Cart</h3>
					{/* <!--end::Title--> */}
					{/* <!--begin::Card toolbar--> */}
					<div className="card-toolbar">
						{/* <!--begin::Close--> */}
						<div className="btn btn-sm btn-icon btn-active-light-primary" id="kt_drawer_shopping_cart_close">
							<i className="ki-duotone ki-cross fs-2">
								<span className="path1"></span>
								<span className="path2"></span>
							</i>
						</div>
						{/* <!--end::Close--> */}
					</div>
					{/* <!--end::Card toolbar--> */}
				</div>
				{/* <!--end::Card header--> */}
				{/* <!--begin::Card body--> */}
				<div className="card-body hover-scroll-overlay-y h-400px pt-5">
					{/* <!--begin::Item--> */}
					<div className="d-flex flex-stack">
						{/* <!--begin::Wrapper--> */}
						<div className="d-flex flex-column me-3">
							{/* <!--begin::Section--> */}
							<div className="mb-3">
								<a href="../../demo1/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">Iblender</a>
								<span className="text-gray-400 fw-semibold d-block">The best kitchen gadget in 2022</span>
							</div>
							{/* <!--end::Section--> */}
							{/* <!--begin::Section--> */}
							<div className="d-flex align-items-center">
								<span className="fw-bold text-gray-800 fs-5">$ 350</span>
								<span className="text-muted mx-2">for</span>
								<span className="fw-bold text-gray-800 fs-5 me-3">5</span>
								<a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
									<i className="ki-duotone ki-minus fs-4"></i>
								</a>
								<a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
									<i className="ki-duotone ki-plus fs-4"></i>
								</a>
							</div>
							{/* <!--end::Wrapper--> */}
						</div>
						{/* <!--end::Wrapper--> */}
						{/* <!--begin::Pic--> */}
						<div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
							<img src="%PUBLIC_URL%/assets/media/stock/600x400/img-1.jpg" alt="" />
						</div>
						{/* <!--end::Pic--> */}
					</div>
					{/* <!--end::Item--> */}
					{/* <!--begin::Separator--> */}
					<div className="separator separator-dashed my-6"></div>
					{/* <!--end::Separator--> */}
					{/* <!--begin::Item--> */}
					<div className="d-flex flex-stack">
						{/* <!--begin::Wrapper--> */}
						<div className="d-flex flex-column me-3">
							{/* <!--begin::Section--> */}
							<div className="mb-3">
								<a href="../../demo1/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">SmartCleaner</a>
								<span className="text-gray-400 fw-semibold d-block">Smart tool for cooking</span>
							</div>
							{/* <!--end::Section--> */}
							{/* <!--begin::Section--> */}
							<div className="d-flex align-items-center">
								<span className="fw-bold text-gray-800 fs-5">$ 650</span>
								<span className="text-muted mx-2">for</span>
								<span className="fw-bold text-gray-800 fs-5 me-3">4</span>
								<a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
									<i className="ki-duotone ki-minus fs-4"></i>
								</a>
								<a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
									<i className="ki-duotone ki-plus fs-4"></i>
								</a>
							</div>
							{/* <!--end::Wrapper--> */}
						</div>
						{/* <!--end::Wrapper--> */}
						{/* <!--begin::Pic--> */}
						<div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
							<img src="%PUBLIC_URL%/assets/media/stock/600x400/img-3.jpg" alt="" />
						</div>
						{/* <!--end::Pic--> */}
					</div>
					{/* <!--end::Item--> */}
					{/* <!--begin::Separator--> */}
					<div className="separator separator-dashed my-6"></div>
					{/* <!--end::Separator--> */}
					{/* <!--begin::Item--> */}
					<div className="d-flex flex-stack">
						{/* <!--begin::Wrapper--> */}
						<div className="d-flex flex-column me-3">
							{/* <!--begin::Section--> */}
							<div className="mb-3">
								<a href="../../demo1/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">CameraMaxr</a>
								<span className="text-gray-400 fw-semibold d-block">Professional camera for edge</span>
							</div>
							{/* <!--end::Section--> */}
							{/* <!--begin::Section--> */}
							<div className="d-flex align-items-center">
								<span className="fw-bold text-gray-800 fs-5">$ 150</span>
								<span className="text-muted mx-2">for</span>
								<span className="fw-bold text-gray-800 fs-5 me-3">3</span>
								<a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
									<i className="ki-duotone ki-minus fs-4"></i>
								</a>
								<a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
									<i className="ki-duotone ki-plus fs-4"></i>
								</a>
							</div>
							{/* <!--end::Wrapper--> */}
						</div>
						{/* <!--end::Wrapper--> */}
						{/* <!--begin::Pic--> */}
						<div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
							<img src="%PUBLIC_URL%/assets/media/stock/600x400/img-8.jpg" alt="" />
						</div>
						{/* <!--end::Pic--> */}
					</div>
					{/* <!--end::Item--> */}
					{/* <!--begin::Separator--> */}
					<div className="separator separator-dashed my-6"></div>
					{/* <!--end::Separator--> */}
					{/* <!--begin::Item--> */}
					<div className="d-flex flex-stack">
						{/* <!--begin::Wrapper--> */}
						<div className="d-flex flex-column me-3">
							{/* <!--begin::Section--> */}
							<div className="mb-3">
								<a href="../../demo1/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">$D Printer</a>
								<span className="text-gray-400 fw-semibold d-block">Manfactoring unique objekts</span>
							</div>
							{/* <!--end::Section--> */}
							{/* <!--begin::Section--> */}
							<div className="d-flex align-items-center">
								<span className="fw-bold text-gray-800 fs-5">$ 1450</span>
								<span className="text-muted mx-2">for</span>
								<span className="fw-bold text-gray-800 fs-5 me-3">7</span>
								<a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
									<i className="ki-duotone ki-minus fs-4"></i>
								</a>
								<a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
									<i className="ki-duotone ki-plus fs-4"></i>
								</a>
							</div>
							{/* <!--end::Wrapper--> */}
						</div>
						{/* <!--end::Wrapper--> */}
						{/* <!--begin::Pic--> */}
						<div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
							<img src="%PUBLIC_URL%/assets/media/stock/600x400/img-26.jpg" alt="" />
						</div>
						{/* <!--end::Pic--> */}
					</div>
					{/* <!--end::Item--> */}
					{/* <!--begin::Separator--> */}
					<div className="separator separator-dashed my-6"></div>
					{/* <!--end::Separator--> */}
					{/* <!--begin::Item--> */}
					<div className="d-flex flex-stack">
						{/* <!--begin::Wrapper--> */}
						<div className="d-flex flex-column me-3">
							{/* <!--begin::Section--> */}
							<div className="mb-3">
								<a href="../../demo1/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">MotionWire</a>
								<span className="text-gray-400 fw-semibold d-block">Perfect animation tool</span>
							</div>
							{/* <!--end::Section--> */}
							{/* <!--begin::Section--> */}
							<div className="d-flex align-items-center">
								<span className="fw-bold text-gray-800 fs-5">$ 650</span>
								<span className="text-muted mx-2">for</span>
								<span className="fw-bold text-gray-800 fs-5 me-3">7</span>
								<a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
									<i className="ki-duotone ki-minus fs-4"></i>
								</a>
								<a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
									<i className="ki-duotone ki-plus fs-4"></i>
								</a>
							</div>
							{/* <!--end::Wrapper--> */}
						</div>
						{/* <!--end::Wrapper--> */}
						{/* <!--begin::Pic--> */}
						<div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
							<img src="%PUBLIC_URL%/assets/media/stock/600x400/img-21.jpg" alt="" />
						</div>
						{/* <!--end::Pic--> */}
					</div>
					{/* <!--end::Item--> */}
					{/* <!--begin::Separator--> */}
					<div className="separator separator-dashed my-6"></div>
					{/* <!--end::Separator--> */}
					{/* <!--begin::Item--> */}
					<div className="d-flex flex-stack">
						{/* <!--begin::Wrapper--> */}
						<div className="d-flex flex-column me-3">
							{/* <!--begin::Section--> */}
							<div className="mb-3">
								<a href="../../demo1/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">Samsung</a>
								<span className="text-gray-400 fw-semibold d-block">Profile info,Timeline etc</span>
							</div>
							{/* <!--end::Section--> */}
							{/* <!--begin::Section--> */}
							<div className="d-flex align-items-center">
								<span className="fw-bold text-gray-800 fs-5">$ 720</span>
								<span className="text-muted mx-2">for</span>
								<span className="fw-bold text-gray-800 fs-5 me-3">6</span>
								<a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
									<i className="ki-duotone ki-minus fs-4"></i>
								</a>
								<a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
									<i className="ki-duotone ki-plus fs-4"></i>
								</a>
							</div>
							{/* <!--end::Wrapper--> */}
						</div>
						{/* <!--end::Wrapper--> */}
						{/* <!--begin::Pic--> */}
						<div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
							<img src="%PUBLIC_URL%/assets/media/stock/600x400/img-34.jpg" alt="" />
						</div>
						{/* <!--end::Pic--> */}
					</div>
					{/* <!--end::Item--> */}
					{/* <!--begin::Separator--> */}
					<div className="separator separator-dashed my-6"></div>
					{/* <!--end::Separator--> */}
					{/* <!--begin::Item--> */}
					<div className="d-flex flex-stack">
						{/* <!--begin::Wrapper--> */}
						<div className="d-flex flex-column me-3">
							{/* <!--begin::Section--> */}
							<div className="mb-3">
								<a href="../../demo1/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">$D Printer</a>
								<span className="text-gray-400 fw-semibold d-block">Manfactoring unique objekts</span>
							</div>
							{/* <!--end::Section--> */}
							{/* <!--begin::Section--> */}
							<div className="d-flex align-items-center">
								<span className="fw-bold text-gray-800 fs-5">$ 430</span>
								<span className="text-muted mx-2">for</span>
								<span className="fw-bold text-gray-800 fs-5 me-3">8</span>
								<a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
									<i className="ki-duotone ki-minus fs-4"></i>
								</a>
								<a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
									<i className="ki-duotone ki-plus fs-4"></i>
								</a>
							</div>
							{/* <!--end::Wrapper--> */}
						</div>
						{/* <!--end::Wrapper--> */}
						{/* <!--begin::Pic--> */}
						<div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
							<img src="%PUBLIC_URL%/assets/media/stock/600x400/img-27.jpg" alt="" />
						</div>
						{/* <!--end::Pic--> */}
					</div>
					{/* <!--end::Item--> */}
				</div>
				{/* <!--end::Card body--> */}
				{/* <!--begin::Card footer--> */}
				<div className="card-footer">
					{/* <!--begin::Item--> */}
					<div className="d-flex flex-stack">
						<span className="fw-bold text-gray-600">Total</span>
						<span className="text-gray-800 fw-bolder fs-5">$ 1840.00</span>
					</div>
					{/* <!--end::Item--> */}
					{/* <!--begin::Item--> */}
					<div className="d-flex flex-stack">
						<span className="fw-bold text-gray-600">Sub total</span>
						<span className="text-primary fw-bolder fs-5">$ 246.35</span>
					</div>
					{/* <!--end::Item--> */}
					{/* <!--end::Action--> */}
					<div className="d-flex justify-content-end mt-9">
						<a href="#" className="btn btn-primary d-flex justify-content-end">Pleace Order</a>
					</div>
					{/* <!--end::Action--> */}
				</div>
				{/* <!--end::Card footer--> */}
			</div>
			{/* <!--end::Messenger--> */}
		</div>
		{/* <!--end::Chat drawer--> */}
		{/* <!--end::Drawers--> */}
		{/* <!--begin::Scrolltop--> */}
		<div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
			<i className="ki-duotone ki-arrow-up">
				<span className="path1"></span>
				<span className="path2"></span>
			</i>
		</div>
		{/* <!--end::Scrolltop--> */}
		{/* <!--begin::Modals--> */}
		{/* <!--begin::Modal - Upgrade plan--> */}
		<div className="modal fade" id="kt_modal_upgrade_plan" tabindex="-1" aria-hidden="true">
			{/* <!--begin::Modal dialog--> */}
			<div className="modal-dialog modal-xl">
				{/* <!--begin::Modal content--> */}
				<div className="modal-content rounded">
					{/* <!--begin::Modal header--> */}
					<div className="modal-header justify-content-end border-0 pb-0">
						{/* <!--begin::Close--> */}
						<div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
							<i className="ki-duotone ki-cross fs-1">
								<span className="path1"></span>
								<span className="path2"></span>
							</i>
						</div>
						{/* <!--end::Close--> */}
					</div>
					{/* <!--end::Modal header--> */}
					{/* <!--begin::Modal body--> */}
					<div className="modal-body pt-0 pb-15 px-5 px-xl-20">
						{/* <!--begin::Heading--> */}
						<div className="mb-13 text-center">
							<h1 className="mb-3">Upgrade a Plan</h1>
							<div className="text-muted fw-semibold fs-5">If you need more info, please check
							<a href="#" className="link-primary fw-bold">Pricing Guidelines</a>.</div>
						</div>
						{/* <!--end::Heading--> */}
						{/* <!--begin::Plans--> */}
						<div className="d-flex flex-column">
							{/* <!--begin::Nav group--> */}
							<div className="nav-group nav-group-outline mx-auto" data-kt-buttons="true">
								<button className="btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3 me-2 active" data-kt-plan="month">Monthly</button>
								<button className="btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3" data-kt-plan="annual">Annual</button>
							</div>
							{/* <!--end::Nav group--> */}
							{/* <!--begin::Row--> */}
							<div className="row mt-10">
								{/* <!--begin::Col--> */}
								<div className="col-lg-6 mb-10 mb-lg-0">
									{/* <!--begin::Tabs--> */}
									<div className="nav flex-column">
										{/* <!--begin::Tab link--> */}
										<label className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 active mb-6" data-bs-toggle="tab" data-bs-target="#kt_upgrade_plan_startup">
											{/* <!--end::Description--> */}
											<div className="d-flex align-items-center me-2">
												{/* <!--begin::Radio--> */}
												<div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
													<input className="form-check-input" type="radio" name="plan" checked="checked" value="startup" />
												</div>
												{/* <!--end::Radio--> */}
												{/* <!--begin::Info--> */}
												<div className="flex-grow-1">
													<div className="d-flex align-items-center fs-2 fw-bold flex-wrap">Startup</div>
													<div className="fw-semibold opacity-75">Best for startups</div>
												</div>
												{/* <!--end::Info--> */}
											</div>
											{/* <!--end::Description--> */}
											{/* <!--begin::Price--> */}
											<div className="ms-5">
												<span className="mb-2">$</span>
												<span className="fs-3x fw-bold" data-kt-plan-price-month="39" data-kt-plan-price-annual="399">39</span>
												<span className="fs-7 opacity-50">/
												<span data-kt-element="period">Mon</span></span>
											</div>
											{/* <!--end::Price--> */}
										</label>
										{/* <!--end::Tab link--> */}
										{/* <!--begin::Tab link--> */}
										<label className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6" data-bs-toggle="tab" data-bs-target="#kt_upgrade_plan_advanced">
											{/* <!--end::Description--> */}
											<div className="d-flex align-items-center me-2">
												{/* <!--begin::Radio--> */}
												<div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
													<input className="form-check-input" type="radio" name="plan" value="advanced" />
												</div>
												{/* <!--end::Radio--> */}
												{/* <!--begin::Info--> */}
												<div className="flex-grow-1">
													<div className="d-flex align-items-center fs-2 fw-bold flex-wrap">Advanced</div>
													<div className="fw-semibold opacity-75">Best for 100+ team size</div>
												</div>
												{/* <!--end::Info--> */}
											</div>
											{/* <!--end::Description--> */}
											{/* <!--begin::Price--> */}
											<div className="ms-5">
												<span className="mb-2">$</span>
												<span className="fs-3x fw-bold" data-kt-plan-price-month="339" data-kt-plan-price-annual="3399">339</span>
												<span className="fs-7 opacity-50">/
												<span data-kt-element="period">Mon</span></span>
											</div>
											{/* <!--end::Price--> */}
										</label>
										{/* <!--end::Tab link--> */}
										{/* <!--begin::Tab link--> */}
										<label className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6" data-bs-toggle="tab" data-bs-target="#kt_upgrade_plan_enterprise">
											{/* <!--end::Description--> */}
											<div className="d-flex align-items-center me-2">
												{/* <!--begin::Radio--> */}
												<div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
													<input className="form-check-input" type="radio" name="plan" value="enterprise" />
												</div>
												{/* <!--end::Radio--> */}
												{/* <!--begin::Info--> */}
												<div className="flex-grow-1">
													<div className="d-flex align-items-center fs-2 fw-bold flex-wrap">Enterprise
													<span className="badge badge-light-success ms-2 py-2 px-3 fs-7">Popular</span></div>
													<div className="fw-semibold opacity-75">Best value for 1000+ team</div>
												</div>
												{/* <!--end::Info--> */}
											</div>
											{/* <!--end::Description--> */}
											{/* <!--begin::Price--> */}
											<div className="ms-5">
												<span className="mb-2">$</span>
												<span className="fs-3x fw-bold" data-kt-plan-price-month="999" data-kt-plan-price-annual="9999">999</span>
												<span className="fs-7 opacity-50">/
												<span data-kt-element="period">Mon</span></span>
											</div>
											{/* <!--end::Price--> */}
										</label>
										{/* <!--end::Tab link--> */}
										{/* <!--begin::Tab link--> */}
										<label className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6" data-bs-toggle="tab" data-bs-target="#kt_upgrade_plan_custom">
											{/* <!--end::Description--> */}
											<div className="d-flex align-items-center me-2">
												{/* <!--begin::Radio--> */}
												<div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
													<input className="form-check-input" type="radio" name="plan" value="custom" />
												</div>
												{/* <!--end::Radio--> */}
												{/* <!--begin::Info--> */}
												<div className="flex-grow-1">
													<div className="d-flex align-items-center fs-2 fw-bold flex-wrap">Custom</div>
													<div className="fw-semibold opacity-75">Requet a custom license</div>
												</div>
												{/* <!--end::Info--> */}
											</div>
											{/* <!--end::Description--> */}
											{/* <!--begin::Price--> */}
											<div className="ms-5">
												<a href="#" className="btn btn-sm btn-success">Contact Us</a>
											</div>
											{/* <!--end::Price--> */}
										</label>
										{/* <!--end::Tab link--> */}
									</div>
									{/* <!--end::Tabs--> */}
								</div>
								{/* <!--end::Col--> */}
								{/* <!--begin::Col--> */}
								<div className="col-lg-6">
									{/* <!--begin::Tab content--> */}
									<div className="tab-content rounded h-100 bg-light p-10">
										{/* <!--begin::Tab Pane--> */}
										<div className="tab-pane fade show active" id="kt_upgrade_plan_startup">
											{/* <!--begin::Heading--> */}
											<div className="pb-5">
												<h2 className="fw-bold text-dark">What’s in Startup Plan?</h2>
												<div className="text-muted fw-semibold">Optimal for 10+ team size and new startup</div>
											</div>
											{/* <!--end::Heading--> */}
											{/* <!--begin::Body--> */}
											<div className="pt-1">
												{/* <!--begin::Item--> */}
												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 10 Active Users</span>
													<i className="ki-duotone ki-check-circle fs-1 text-success">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</div>
												{/* <!--end::Item--> */}
												{/* <!--begin::Item--> */}
												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 30 Project Integrations</span>
													<i className="ki-duotone ki-check-circle fs-1 text-success">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</div>
												{/* <!--end::Item--> */}
												{/* <!--begin::Item--> */}
												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Analytics Module</span>
													<i className="ki-duotone ki-check-circle fs-1 text-success">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</div>
												{/* <!--end::Item--> */}
												{/* <!--begin::Item--> */}
												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-muted flex-grow-1">Finance Module</span>
													<i className="ki-duotone ki-cross-circle fs-1">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</div>
												{/* <!--end::Item--> */}
												{/* <!--begin::Item--> */}
												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-muted flex-grow-1">Accounting Module</span>
													<i className="ki-duotone ki-cross-circle fs-1">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</div>
												{/* <!--end::Item--> */}
												{/* <!--begin::Item--> */}
												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-muted flex-grow-1">Network Platform</span>
													<i className="ki-duotone ki-cross-circle fs-1">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</div>
												{/* <!--end::Item--> */}
												{/* <!--begin::Item--> */}
												<div className="d-flex align-items-center">
													<span className="fw-semibold fs-5 text-muted flex-grow-1">Unlimited Cloud Space</span>
													<i className="ki-duotone ki-cross-circle fs-1">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</div>
												{/* <!--end::Item--> */}
											</div>
											{/* <!--end::Body--> */}
										</div>
										{/* <!--end::Tab Pane--> */}
										{/* <!--begin::Tab Pane--> */}
										<div className="tab-pane fade" id="kt_upgrade_plan_advanced">
											{/* <!--begin::Heading--> */}
											<div className="pb-5">
												<h2 className="fw-bold text-dark">What’s in Startup Plan?</h2>
												<div className="text-muted fw-semibold">Optimal for 100+ team size and grown company</div>
											</div>
											{/* <!--end::Heading--> */}
											{/* <!--begin::Body--> */}
											<div className="pt-1">
												{/* <!--begin::Item--> */}
												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 10 Active Users</span>
													<i className="ki-duotone ki-check-circle fs-1 text-success">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</div>
												{/* <!--end::Item--> */}
												{/* <!--begin::Item--> */}
												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 30 Project Integrations</span>
													<i className="ki-duotone ki-check-circle fs-1 text-success">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</div>
												{/* <!--end::Item--> */}
												{/* <!--begin::Item--> */}
												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Analytics Module</span>
													<i className="ki-duotone ki-check-circle fs-1 text-success">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</div>
												{/* <!--end::Item--> */}
												{/* <!--begin::Item--> */}
												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Finance Module</span>
													<i className="ki-duotone ki-check-circle fs-1 text-success">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</div>
												{/* <!--end::Item--> */}
												{/* <!--begin::Item--> */}
												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Accounting Module</span>
													<i className="ki-duotone ki-check-circle fs-1 text-success">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</div>
												{/* <!--end::Item--> */}
												{/* <!--begin::Item--> */}
												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-muted flex-grow-1">Network Platform</span>
													<i className="ki-duotone ki-cross-circle fs-1">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</div>
												{/* <!--end::Item--> */}
												{/* <!--begin::Item--> */}
												<div className="d-flex align-items-center">
													<span className="fw-semibold fs-5 text-muted flex-grow-1">Unlimited Cloud Space</span>
													<i className="ki-duotone ki-cross-circle fs-1">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</div>
												{/* <!--end::Item--> */}
											</div>
											{/* <!--end::Body--> */}
										</div>
										{/* <!--end::Tab Pane--> */}
										{/* <!--begin::Tab Pane--> */}
										<div className="tab-pane fade" id="kt_upgrade_plan_enterprise">
											{/* <!--begin::Heading--> */}
											<div className="pb-5">
												<h2 className="fw-bold text-dark">What’s in Startup Plan?</h2>
												<div className="text-muted fw-semibold">Optimal for 1000+ team and enterpise</div>
											</div>
											{/* <!--end::Heading--> */}
											{/* <!--begin::Body--> */}
											<div className="pt-1">
												{/* <!--begin::Item--> */}
												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 10 Active Users</span>
													<i className="ki-duotone ki-check-circle fs-1 text-success">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</div>
												{/* <!--end::Item--> */}
												{/* <!--begin::Item--> */}
												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 30 Project Integrations</span>
													<i className="ki-duotone ki-check-circle fs-1 text-success">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</div>
												{/* <!--end::Item--> */}
												{/* <!--begin::Item--> */}
												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Analytics Module</span>
													<i className="ki-duotone ki-check-circle fs-1 text-success">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</div>
												{/* <!--end::Item--> */}
												{/* <!--begin::Item--> */}
												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Finance Module</span>
													<i className="ki-duotone ki-check-circle fs-1 text-success">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</div>
												{/* <!--end::Item--> */}
												{/* <!--begin::Item--> */}
												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Accounting Module</span>
													<i className="ki-duotone ki-check-circle fs-1 text-success">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</div>
												{/* <!--end::Item--> */}
												{/* <!--begin::Item--> */}
												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Network Platform</span>
													<i className="ki-duotone ki-check-circle fs-1 text-success">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</div>
												{/* <!--end::Item--> */}
												{/* <!--begin::Item--> */}
												<div className="d-flex align-items-center">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Unlimited Cloud Space</span>
													<i className="ki-duotone ki-check-circle fs-1 text-success">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</div>
												{/* <!--end::Item--> */}
											</div>
											{/* <!--end::Body--> */}
										</div>
										{/* <!--end::Tab Pane--> */}
										{/* <!--begin::Tab Pane--> */}
										<div className="tab-pane fade" id="kt_upgrade_plan_custom">
											{/* <!--begin::Heading--> */}
											<div className="pb-5">
												<h2 className="fw-bold text-dark">What’s in Startup Plan?</h2>
												<div className="text-muted fw-semibold">Optimal for corporations</div>
											</div>
											{/* <!--end::Heading--> */}
											{/* <!--begin::Body--> */}
											<div className="pt-1">
												{/* <!--begin::Item--> */}
												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Unlimited Users</span>
													<i className="ki-duotone ki-check-circle fs-1 text-success">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</div>
												{/* <!--end::Item--> */}
												{/* <!--begin::Item--> */}
												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Unlimited Project Integrations</span>
													<i className="ki-duotone ki-check-circle fs-1 text-success">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</div>
												{/* <!--end::Item--> */}
												{/* <!--begin::Item--> */}
												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Analytics Module</span>
													<i className="ki-duotone ki-check-circle fs-1 text-success">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</div>
												{/* <!--end::Item--> */}
												{/* <!--begin::Item--> */}
												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Finance Module</span>
													<i className="ki-duotone ki-check-circle fs-1 text-success">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</div>
												{/* <!--end::Item--> */}
												{/* <!--begin::Item--> */}
												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Accounting Module</span>
													<i className="ki-duotone ki-check-circle fs-1 text-success">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</div>
												{/* <!--end::Item--> */}
												{/* <!--begin::Item--> */}
												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Network Platform</span>
													<i className="ki-duotone ki-check-circle fs-1 text-success">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</div>
												{/* <!--end::Item--> */}
												{/* <!--begin::Item--> */}
												<div className="d-flex align-items-center">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Unlimited Cloud Space</span>
													<i className="ki-duotone ki-check-circle fs-1 text-success">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</div>
												{/* <!--end::Item--> */}
											</div>
											{/* <!--end::Body--> */}
										</div>
										{/* <!--end::Tab Pane--> */}
									</div>
									{/* <!--end::Tab content--> */}
								</div>
								{/* <!--end::Col--> */}
							</div>
							{/* <!--end::Row--> */}
						</div>
						{/* <!--end::Plans--> */}
						{/* <!--begin::Actions--> */}
						<div className="d-flex flex-center flex-row-fluid pt-12">
							<button type="reset" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</button>
							<button type="submit" className="btn btn-primary" id="kt_modal_upgrade_plan_btn">
								{/* <!--begin::Indicator label--> */}
								<span className="indicator-label">Upgrade Plan</span>
								{/* <!--end::Indicator label--> */}
								{/* <!--begin::Indicator progress--> */}
								<span className="indicator-progress">Please wait...
								<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
								{/* <!--end::Indicator progress--> */}
							</button>
						</div>
						{/* <!--end::Actions--> */}
					</div>
					{/* <!--end::Modal body--> */}
				</div>
				{/* <!--end::Modal content--> */}
			</div>
			{/* <!--end::Modal dialog--> */}
		</div>
		{/* <!--end::Modal - Upgrade plan--> */}
		{/* <!--begin::Modal - Create Campaign--> */}
		<div className="modal fade" id="kt_modal_create_campaign" tabindex="-1" aria-hidden="true">
			{/* <!--begin::Modal dialog--> */}
			<div className="modal-dialog modal-fullscreen p-9">
				{/* <!--begin::Modal content--> */}
				<div className="modal-content modal-rounded">
					{/* <!--begin::Modal header--> */}
					<div className="modal-header py-7 d-flex justify-content-between">
						{/* <!--begin::Modal title--> */}
						<h2>Create Campaign</h2>
						{/* <!--end::Modal title--> */}
						{/* <!--begin::Close--> */}
						<div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
							<i className="ki-duotone ki-cross fs-1">
								<span className="path1"></span>
								<span className="path2"></span>
							</i>
						</div>
						{/* <!--end::Close--> */}
					</div>
					{/* <!--begin::Modal header--> */}
					{/* <!--begin::Modal body--> */}
					<div className="modal-body scroll-y m-5">
						{/* <!--begin::Stepper--> */}
						<div className="stepper stepper-links d-flex flex-column" id="kt_modal_create_campaign_stepper">
							{/* <!--begin::Nav--> */}
							<div className="stepper-nav justify-content-center py-2">
								{/* <!--begin::Step 1--> */}
								<div className="stepper-item me-5 me-md-15 current" data-kt-stepper-element="nav">
									<h3 className="stepper-title">Campaign Details</h3>
								</div>
								{/* <!--end::Step 1--> */}
								{/* <!--begin::Step 2--> */}
								<div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
									<h3 className="stepper-title">Creative Uploads</h3>
								</div>
								{/* <!--end::Step 2--> */}
								{/* <!--begin::Step 3--> */}
								<div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
									<h3 className="stepper-title">Audiences</h3>
								</div>
								{/* <!--end::Step 3--> */}
								{/* <!--begin::Step 4--> */}
								<div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
									<h3 className="stepper-title">Budget Estimates</h3>
								</div>
								{/* <!--end::Step 4--> */}
								{/* <!--begin::Step 5--> */}
								<div className="stepper-item" data-kt-stepper-element="nav">
									<h3 className="stepper-title">Completed</h3>
								</div>
								{/* <!--end::Step 5--> */}
							</div>
							{/* <!--end::Nav--> */}
							{/* <!--begin::Form--> */}
							<form className="mx-auto w-100 mw-600px pt-15 pb-10" novalidate="novalidate" id="kt_modal_create_campaign_stepper_form">
								{/* <!--begin::Step 1--> */}
								<div className="current" data-kt-stepper-element="content">
									{/* <!--begin::Wrapper--> */}
									<div className="w-100">
										{/* <!--begin::Heading--> */}
										<div className="pb-10 pb-lg-15">
											{/* <!--begin::Title--> */}
											<h2 className="fw-bold d-flex align-items-center text-dark">Setup Campaign Details
											<span className="ms-1" data-bs-toggle="tooltip" title="Campaign name will be used as reference within your campaign reports">
												<i className="ki-duotone ki-information-5 text-gray-500 fs-6">
													<span className="path1"></span>
													<span className="path2"></span>
													<span className="path3"></span>
												</i>
											</span></h2>
											{/* <!--end::Title--> */}
											{/* <!--begin::Notice--> */}
											<div className="text-muted fw-semibold fs-6">If you need more info, please check out
											<a href="#" className="link-primary fw-bold">Help Page</a>.</div>
											{/* <!--end::Notice--> */}
										</div>
										{/* <!--end::Heading--> */}
										{/* <!--begin::Input group--> */}
										<div className="mb-10 fv-row">
											{/* <!--begin::Label--> */}
											<label className="required form-label mb-3">Campaign Name</label>
											{/* <!--end::Label--> */}
											{/* <!--begin::Input--> */}
											<input type="text" className="form-control form-control-lg form-control-solid" name="campaign_name" placeholder="" value="" />
											{/* <!--end::Input--> */}
										</div>
										{/* <!--end::Input group--> */}
										{/* <!--begin::Input group--> */}
										<div className="fv-row mb-10">
											{/* <!--begin::Label--> */}
											<label className="d-block fw-semibold fs-6 mb-5">
												<span className="required">Company Logo</span>
												<span className="ms-1" data-bs-toggle="tooltip" title="E.g. Select a logo to represent the company that's running the campaign.">
													<i className="ki-duotone ki-information-5 text-gray-500 fs-6">
														<span className="path1"></span>
														<span className="path2"></span>
														<span className="path3"></span>
													</i>
												</span>
											</label>
											{/* <!--end::Label--> */}
											{/* <!--begin::Image input placeholder--> */}

											{/* arreglar*/}
											{/*<style>.image-input-placeholder { background-image: url('%PUBLIC_URL%/assets/media/svg/files/blank-image.svg'); } [data-bs-theme="dark"] .image-input-placeholder { background-image: url('%PUBLIC_URL%/assets/media/svg/files/blank-image-dark.svg'); }</style>
											{/* <!--end::Image input placeholder--> */}
											{/* <!--begin::Image input--> */}
											<div className="image-input image-input-empty image-input-outline image-input-placeholder" data-kt-image-input="true">
												{/* <!--begin::Preview existing avatar--> */}
												<div className="image-input-wrapper w-125px h-125px"></div>
												{/* <!--end::Preview existing avatar--> */}
												{/* <!--begin::Label--> */}
												<label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
													<i className="ki-duotone ki-pencil fs-7">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
													{/* <!--begin::Inputs--> */}
													<input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
													<input type="hidden" name="avatar_remove" />
													{/* <!--end::Inputs--> */}
												</label>
												{/* <!--end::Label--> */}
												{/* <!--begin::Cancel--> */}
												<span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
													<i className="ki-duotone ki-cross fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</span>
												{/* <!--end::Cancel--> */}
												{/* <!--begin::Remove--> */}
												<span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
													<i className="ki-duotone ki-cross fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</span>
												{/* <!--end::Remove--> */}
											</div>
											{/* <!--end::Image input--> */}
											{/* <!--begin::Hint--> */}
											<div className="form-text">Allowed file types: png, jpg, jpeg.</div>
											{/* <!--end::Hint--> */}
										</div>
										{/* <!--end::Input group--> */}
										{/* <!--begin::Input group--> */}
										<div className="mb-10">
											{/* <!--begin::Label--> */}
											<label className="required fw-semibold fs-6 mb-5">Campaign Goal</label>
											{/* <!--end::Label--> */}
											{/* <!--begin::Roles--> */}
											{/* <!--begin::Input row--> */}
											<div className="d-flex fv-row">
												{/* <!--begin::Radio--> */}
												<div className="form-check form-check-custom form-check-solid">
													{/* <!--begin::Input--> */}
													<input className="form-check-input me-3" name="user_role" type="radio" value="0" id="kt_modal_update_role_option_0" checked='checked' />
													{/* <!--end::Input--> */}
													{/* <!--begin::Label--> */}
													<label className="form-check-label" for="kt_modal_update_role_option_0">
														<div className="fw-bold text-gray-800">Get more visitors</div>
														<div className="text-gray-600">Increase impression traffic onto the platform</div>
													</label>
													{/* <!--end::Label--> */}
												</div>
												{/* <!--end::Radio--> */}
											</div>
											{/* <!--end::Input row--> */}
											<div className='separator separator-dashed my-5'></div>
											{/* <!--begin::Input row--> */}
											<div className="d-flex fv-row">
												{/* <!--begin::Radio--> */}
												<div className="form-check form-check-custom form-check-solid">
													{/* <!--begin::Input--> */}
													<input className="form-check-input me-3" name="user_role" type="radio" value="1" id="kt_modal_update_role_option_1" />
													{/* <!--end::Input--> */}
													{/* <!--begin::Label--> */}
													<label className="form-check-label" for="kt_modal_update_role_option_1">
														<div className="fw-bold text-gray-800">Get more messages on chat</div>
														<div className="text-gray-600">Increase community interaction and communication</div>
													</label>
													{/* <!--end::Label--> */}
												</div>
												{/* <!--end::Radio--> */}
											</div>
											{/* <!--end::Input row--> */}
											<div className='separator separator-dashed my-5'></div>
											{/* <!--begin::Input row--> */}
											<div className="d-flex fv-row">
												{/* <!--begin::Radio--> */}
												<div className="form-check form-check-custom form-check-solid">
													{/* <!--begin::Input--> */}
													<input className="form-check-input me-3" name="user_role" type="radio" value="2" id="kt_modal_update_role_option_2" />
													{/* <!--end::Input--> */}
													{/* <!--begin::Label--> */}
													<label className="form-check-label" for="kt_modal_update_role_option_2">
														<div className="fw-bold text-gray-800">Get more calls</div>
														<div className="text-gray-600">Boost telecommunication feedback to provide precise and accurate information</div>
													</label>
													{/* <!--end::Label--> */}
												</div>
												{/* <!--end::Radio--> */}
											</div>
											{/* <!--end::Input row--> */}
											<div className='separator separator-dashed my-5'></div>
											{/* <!--begin::Input row--> */}
											<div className="d-flex fv-row">
												{/* <!--begin::Radio--> */}
												<div className="form-check form-check-custom form-check-solid">
													{/* <!--begin::Input--> */}
													<input className="form-check-input me-3" name="user_role" type="radio" value="3" id="kt_modal_update_role_option_3" />
													{/* <!--end::Input--> */}
													{/* <!--begin::Label--> */}
													<label className="form-check-label" for="kt_modal_update_role_option_3">
														<div className="fw-bold text-gray-800">Get more likes</div>
														<div className="text-gray-600">Increase positive interactivity on social media platforms</div>
													</label>
													{/* <!--end::Label--> */}
												</div>
												{/* <!--end::Radio--> */}
											</div>
											{/* <!--end::Input row--> */}
											<div className='separator separator-dashed my-5'></div>
											{/* <!--begin::Input row--> */}
											<div className="d-flex fv-row">
												{/* <!--begin::Radio--> */}
												<div className="form-check form-check-custom form-check-solid">
													{/* <!--begin::Input--> */}
													<input className="form-check-input me-3" name="user_role" type="radio" value="4" id="kt_modal_update_role_option_4" />
													{/* <!--end::Input--> */}
													{/* <!--begin::Label--> */}
													<label className="form-check-label" for="kt_modal_update_role_option_4">
														<div className="fw-bold text-gray-800">Lead generation</div>
														<div className="text-gray-600">Collect contact information for potential customers</div>
													</label>
													{/* <!--end::Label--> */}
												</div>
												{/* <!--end::Radio--> */}
											</div>
											{/* <!--end::Input row--> */}
											{/* <!--end::Roles--> */}
										</div>
										{/* <!--end::Input group--> */}
									</div>
									{/* <!--end::Wrapper--> */}
								</div>
								{/* <!--end::Step 1--> */}
								{/* <!--begin::Step 2--> */}
								<div data-kt-stepper-element="content">
									{/* <!--begin::Wrapper--> */}
									<div className="w-100">
										{/* <!--begin::Heading--> */}
										<div className="pb-10 pb-lg-12">
											{/* <!--begin::Title--> */}
											<h1 className="fw-bold text-dark">Upload Files</h1>
											{/* <!--end::Title--> */}
											{/* <!--begin::Description--> */}
											<div className="text-muted fw-semibold fs-4">If you need more info, please check
											<a href="#" className="link-primary">Campaign Guidelines</a></div>
											{/* <!--end::Description--> */}
										</div>
										{/* <!--end::Heading--> */}
										{/* <!--begin::Input group--> */}
										<div className="fv-row mb-10">
											{/* <!--begin::Dropzone--> */}
											<div className="dropzone" id="kt_modal_create_campaign_files_upload">
												{/* <!--begin::Message--> */}
												<div className="dz-message needsclick">
													{/* <!--begin::Icon--> */}
													<i className="ki-duotone ki-file-up fs-3hx text-primary">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
													{/* <!--end::Icon--> */}
													{/* <!--begin::Info--> */}
													<div className="ms-4">
														<h3 className="dfs-3 fw-bold text-gray-900 mb-1">Drop campaign files here or click to upload.</h3>
														<span className="fw-semibold fs-4 text-muted">Upload up to 10 files</span>
													</div>
													{/* <!--end::Info--> */}
												</div>
											</div>
											{/* <!--end::Dropzone--> */}
										</div>
										{/* <!--end::Input group--> */}
										{/* <!--begin::Input group--> */}
										<div className="mb-10">
											{/* <!--begin::Label--> */}
											<label className="fs-6 fw-semibold mb-2">Uploaded File</label>
											{/* <!--End::Label--> */}
											{/* <!--begin::Files--> */}
											<div className="mh-300px scroll-y me-n7 pe-7">
												{/* <!--begin::File--> */}
												<div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
													<div className="d-flex align-items-center">
														{/* <!--begin::Avatar--> */}
														<div className="symbol symbol-35px">
															<img src="%PUBLIC_URL%/assets/media/svg/files/pdf.svg" alt="icon" />
														</div>
														{/* <!--end::Avatar--> */}
														{/* <!--begin::Details--> */}
														<div className="ms-6">
															<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Product Specifications</a>
															<div className="fw-semibold text-muted">230kb</div>
														</div>
														{/* <!--end::Details--> */}
													</div>
													{/* <!--begin::Menu--> */}
													<div className="min-w-100px">
														<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
															<option></option>
															<option value="1">Remove</option>
															<option value="2">Modify</option>
															<option value="3">Select</option>
														</select>
													</div>
													{/* <!--end::Menu--> */}
												</div>
												{/* <!--end::File--> */}
												{/* <!--begin::File--> */}
												<div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
													<div className="d-flex align-items-center">
														{/* <!--begin::Avatar--> */}
														<div className="symbol symbol-35px">
															<img src="%PUBLIC_URL%/assets/media/svg/files/tif.svg" alt="icon" />
														</div>
														{/* <!--end::Avatar--> */}
														{/* <!--begin::Details--> */}
														<div className="ms-6">
															<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Campaign Creative Poster</a>
															<div className="fw-semibold text-muted">2.4mb</div>
														</div>
														{/* <!--end::Details--> */}
													</div>
													{/* <!--begin::Menu--> */}
													<div className="min-w-100px">
														<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
															<option></option>
															<option value="1">Remove</option>
															<option value="2">Modify</option>
															<option value="3">Select</option>
														</select>
													</div>
													{/* <!--end::Menu--> */}
												</div>
												{/* <!--end::File--> */}
												{/* <!--begin::File--> */}
												<div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
													<div className="d-flex align-items-center">
														{/* <!--begin::Avatar--> */}
														<div className="symbol symbol-35px">
															<img src="%PUBLIC_URL%/assets/media/svg/files/folder-document.svg" alt="icon" />
														</div>
														{/* <!--end::Avatar--> */}
														{/* <!--begin::Details--> */}
														<div className="ms-6">
															<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Campaign Landing Page Source</a>
															<div className="fw-semibold text-muted">1.12mb</div>
														</div>
														{/* <!--end::Details--> */}
													</div>
													{/* <!--begin::Menu--> */}
													<div className="min-w-100px">
														<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
															<option></option>
															<option value="1">Remove</option>
															<option value="2">Modify</option>
															<option value="3">Select</option>
														</select>
													</div>
													{/* <!--end::Menu--> */}
												</div>
												{/* <!--end::File--> */}
												{/* <!--begin::File--> */}
												<div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
													<div className="d-flex align-items-center">
														{/* <!--begin::Avatar--> */}
														<div className="symbol symbol-35px">
															<img src="%PUBLIC_URL%/assets/media/svg/files/css.svg" alt="icon" />
														</div>
														{/* <!--end::Avatar--> */}
														{/* <!--begin::Details--> */}
														<div className="ms-6">
															<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Landing Page Styling</a>
															<div className="fw-semibold text-muted">85kb</div>
														</div>
														{/* <!--end::Details--> */}
													</div>
													{/* <!--begin::Menu--> */}
													<div className="min-w-100px">
														<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
															<option></option>
															<option value="1">Remove</option>
															<option value="2">Modify</option>
															<option value="3">Select</option>
														</select>
													</div>
													{/* <!--end::Menu--> */}
												</div>
												{/* <!--end::File--> */}
												{/* <!--begin::File--> */}
												<div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
													<div className="d-flex align-items-center">
														{/* <!--begin::Avatar--> */}
														<div className="symbol symbol-35px">
															<img src="%PUBLIC_URL%/assets/media/svg/files/ai.svg" alt="icon" />
														</div>
														{/* <!--end::Avatar--> */}
														{/* <!--begin::Details--> */}
														<div className="ms-6">
															<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Design Source Files</a>
															<div className="fw-semibold text-muted">48mb</div>
														</div>
														{/* <!--end::Details--> */}
													</div>
													{/* <!--begin::Menu--> */}
													<div className="min-w-100px">
														<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
															<option></option>
															<option value="1">Remove</option>
															<option value="2">Modify</option>
															<option value="3">Select</option>
														</select>
													</div>
													{/* <!--end::Menu--> */}
												</div>
												{/* <!--end::File--> */}
												{/* <!--begin::File--> */}
												<div className="d-flex flex-stack py-4">
													<div className="d-flex align-items-center">
														{/* <!--begin::Avatar--> */}
														<div className="symbol symbol-35px">
															<img src="%PUBLIC_URL%/assets/media/svg/files/doc.svg" alt="icon" />
														</div>
														{/* <!--end::Avatar--> */}
														{/* <!--begin::Details--> */}
														<div className="ms-6">
															<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Campaign Plan Document</a>
															<div className="fw-semibold text-muted">27kb</div>
														</div>
														{/* <!--end::Details--> */}
													</div>
													{/* <!--begin::Menu--> */}
													<div className="min-w-100px">
														<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
															<option></option>
															<option value="1">Remove</option>
															<option value="2">Modify</option>
															<option value="3">Select</option>
														</select>
													</div>
													{/* <!--end::Menu--> */}
												</div>
												{/* <!--end::File--> */}
											</div>
											{/* <!--end::Files--> */}
										</div>
										{/* <!--end::Input group--> */}
									</div>
									{/* <!--end::Wrapper--> */}
								</div>
								{/* <!--end::Step 2--> */}
								{/* <!--begin::Step 3--> */}
								<div data-kt-stepper-element="content">
									{/* <!--begin::Wrapper--> */}
									<div className="w-100">
										{/* <!--begin::Heading--> */}
										<div className="pb-10 pb-lg-12">
											{/* <!--begin::Title--> */}
											<h1 className="fw-bold text-dark">Configure Audiences</h1>
											{/* <!--end::Title--> */}
											{/* <!--begin::Description--> */}
											<div className="text-muted fw-semibold fs-4">If you need more info, please check
											<a href="#" className="link-primary">Campaign Guidelines</a></div>
											{/* <!--end::Description--> */}
										</div>
										{/* <!--end::Heading--> */}
										{/* <!--begin::Input group--> */}
										<div className="fv-row mb-10">
											{/* <!--begin::Label--> */}
											<label className="fs-6 fw-semibold mb-2">Gender
											<span className="ms-1" data-bs-toggle="tooltip" title="Show your ads to either men or women, or select 'All' for both">
												<i className="ki-duotone ki-information-5 text-gray-500 fs-6">
													<span className="path1"></span>
													<span className="path2"></span>
													<span className="path3"></span>
												</i>
											</span></label>
											{/* <!--End::Label--> */}
											{/* <!--begin::Row--> */}
											<div className="row g-9" data-kt-buttons="true" data-kt-buttons-target="[data-kt-button='true']">
												{/* <!--begin::Col--> */}
												<div className="col">
													{/* <!--begin::Option--> */}
													<label className="btn btn-outline btn-outline-dashed btn-active-light-primary active d-flex text-start p-6" data-kt-button="true">
														{/* <!--begin::Radio--> */}
														<span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
															<input className="form-check-input" type="radio" name="campaign_gender" value="1" checked="checked" />
														</span>
														{/* <!--end::Radio--> */}
														{/* <!--begin::Info--> */}
														<span className="ms-5">
															<span className="fs-4 fw-bold text-gray-800 d-block">All</span>
														</span>
														{/* <!--end::Info--> */}
													</label>
													{/* <!--end::Option--> */}
												</div>
												{/* <!--end::Col--> */}
												{/* <!--begin::Col--> */}
												<div className="col">
													{/* <!--begin::Option--> */}
													<label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6" data-kt-button="true">
														{/* <!--begin::Radio--> */}
														<span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
															<input className="form-check-input" type="radio" name="campaign_gender" value="2" />
														</span>
														{/* <!--end::Radio--> */}
														{/* <!--begin::Info--> */}
														<span className="ms-5">
															<span className="fs-4 fw-bold text-gray-800 d-block">Male</span>
														</span>
														{/* <!--end::Info--> */}
													</label>
													{/* <!--end::Option--> */}
												</div>
												{/* <!--end::Col--> */}
												{/* <!--begin::Col--> */}
												<div className="col">
													{/* <!--begin::Option--> */}
													<label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6" data-kt-button="true">
														{/* <!--begin::Radio--> */}
														<span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
															<input className="form-check-input" type="radio" name="campaign_gender" value="3" />
														</span>
														{/* <!--end::Radio--> */}
														{/* <!--begin::Info--> */}
														<span className="ms-5">
															<span className="fs-4 fw-bold text-gray-800 d-block">Female</span>
														</span>
														{/* <!--end::Info--> */}
													</label>
													{/* <!--end::Option--> */}
												</div>
												{/* <!--end::Col--> */}
											</div>
											{/* <!--end::Row--> */}
										</div>
										{/* <!--end::Input group--> */}
										{/* <!--begin::Input group--> */}
										<div className="fv-row mb-10">
											{/* <!--begin::Label--> */}
											<label className="fs-6 fw-semibold mb-2">Age
											<span className="ms-1" data-bs-toggle="tooltip" title="Select the minimum and maximum age of the people who will find your ad relevant.">
												<i className="ki-duotone ki-information-5 text-gray-500 fs-6">
													<span className="path1"></span>
													<span className="path2"></span>
													<span className="path3"></span>
												</i>
											</span></label>
											{/* <!--End::Label--> */}
											{/* <!--begin::Slider--> */}
											<div className="d-flex flex-stack">
												<div id="kt_modal_create_campaign_age_min" className="fs-7 fw-semibold text-muted"></div>
												<div id="kt_modal_create_campaign_age_slider" className="noUi-sm w-100 ms-5 me-8"></div>
												<div id="kt_modal_create_campaign_age_max" className="fs-7 fw-semibold text-muted"></div>
											</div>
											{/* <!--end::Slider--> */}
										</div>
										{/* <!--end::Input group--> */}
										{/* <!--begin::Input group--> */}
										<div className="fv-row mb-10">
											{/* <!--begin::Label--> */}
											<label className="fs-6 fw-semibold mb-2">Location
											<span className="ms-1" data-bs-toggle="tooltip" title="Enter one or more location points for more specific targeting.">
												<i className="ki-duotone ki-information-5 text-gray-500 fs-6">
													<span className="path1"></span>
													<span className="path2"></span>
													<span className="path3"></span>
												</i>
											</span></label>
											{/* <!--End::Label--> */}
											{/* <!--begin::Tagify--> */}
											<input className="form-control d-flex align-items-center" value="" id="kt_modal_create_campaign_location" data-kt-flags-path="%PUBLIC_URL%/assets/media/flags/" />
											{/* <!--end::Tagify--> */}
										</div>
										{/* <!--end::Input group--> */}
									</div>
									{/* <!--end::Wrapper--> */}
								</div>
								{/* <!--end::Step 3--> */}
								{/* <!--begin::Step 4--> */}
								<div data-kt-stepper-element="content">
									{/* <!--begin::Wrapper--> */}
									<div className="w-100">
										{/* <!--begin::Heading--> */}
										<div className="pb-10 pb-lg-12">
											{/* <!--begin::Title--> */}
											<h1 className="fw-bold text-dark">Budget Estimates</h1>
											{/* <!--end::Title--> */}
											{/* <!--begin::Description--> */}
											<div className="text-muted fw-semibold fs-4">If you need more info, please check
											<a href="#" className="link-primary">Campaign Guidelines</a></div>
											{/* <!--end::Description--> */}
										</div>
										{/* <!--end::Heading--> */}
										{/* <!--begin::Input group--> */}
										<div className="fv-row mb-10">
											{/* <!--begin::Label--> */}
											<label className="fs-6 fw-semibold mb-2">Campaign Duration
											<span className="ms-1" data-bs-toggle="tooltip" title="Choose how long you want your ad to run for">
												<i className="ki-duotone ki-information-5 text-gray-500 fs-6">
													<span className="path1"></span>
													<span className="path2"></span>
													<span className="path3"></span>
												</i>
											</span></label>
											{/* <!--end::Label--> */}
											{/* <!--begin::Duration option--> */}
											<div className="d-flex gap-9 mb-7">
												{/* <!--begin::Button--> */}
												<button type="button" className="btn btn-outline btn-outline-dashed btn-active-light-primary active" id="kt_modal_create_campaign_duration_all">Continuous duration
												<br />
												<span className="fs-7">Your ad will run continuously for a daily budget.</span></button>
												{/* <!--end::Button--> */}
												{/* <!--begin::Button--> */}
												<button type="button" className="btn btn-outline btn-outline-dashed btn-active-light-primary btn-outline-default" id="kt_modal_create_campaign_duration_fixed">Fixed duration
												<br />
												<span className="fs-7">Your ad will run on the specified dates only.</span></button>
												{/* <!--end::Button--> */}
											</div>
											{/* <!--end::Duration option--> */}
											{/* <!--begin::Datepicker--> */}
											<input className="form-control form-control-solid d-none" placeholder="Pick date & time" id="kt_modal_create_campaign_datepicker" />
											{/* <!--end::Datepicker--> */}
										</div>
										{/* <!--end::Input group--> */}
										{/* <!--begin::Input group--> */}
										<div className="fv-row mb-10">
											{/* <!--begin::Label--> */}
											<label className="fs-6 fw-semibold mb-2">Daily Budget
											<span className="ms-1" data-bs-toggle="tooltip" title="Choose the budget allocated for each day. Higher budget will generate better results">
												<i className="ki-duotone ki-information-5 text-gray-500 fs-6">
													<span className="path1"></span>
													<span className="path2"></span>
													<span className="path3"></span>
												</i>
											</span></label>
											{/* <!--end::Label--> */}
											{/* <!--begin::Slider--> */}
											<div className="d-flex flex-column text-center">
												<div className="d-flex align-items-start justify-content-center mb-7">
													<span className="fw-bold fs-4 mt-1 me-2">$</span>
													<span className="fw-bold fs-3x" id="kt_modal_create_campaign_budget_label"></span>
													<span className="fw-bold fs-3x">.00</span>
												</div>
												<div id="kt_modal_create_campaign_budget_slider" className="noUi-sm"></div>
											</div>
											{/* <!--end::Slider--> */}
										</div>
										{/* <!--end::Input group--> */}
									</div>
									{/* <!--end::Wrapper--> */}
								</div>
								{/* <!--end::Step 4--> */}
								{/* <!--begin::Step 5--> */}
								<div data-kt-stepper-element="content">
									{/* <!--begin::Wrapper--> */}
									<div className="w-100">
										{/* <!--begin::Heading--> */}
										<div className="pb-12 text-center">
											{/* <!--begin::Title--> */}
											<h1 className="fw-bold text-dark">Campaign Created!</h1>
											{/* <!--end::Title--> */}
											{/* <!--begin::Description--> */}
											<div className="fw-semibold text-muted fs-4">You will receive an email with with the summary of your newly created campaign!</div>
											{/* <!--end::Description--> */}
										</div>
										{/* <!--end::Heading--> */}
										{/* <!--begin::Actions--> */}
										<div className="d-flex flex-center pb-20">
											<button id="kt_modal_create_campaign_create_new" type="button" className="btn btn-lg btn-light me-3" data-kt-element="complete-start">Create New Campaign</button>
											<a href="" className="btn btn-lg btn-primary" data-bs-toggle="tooltip" title="Coming Soon">View Campaign</a>
										</div>
										{/* <!--end::Actions--> */}
										{/* <!--begin::Illustration--> */}
										<div className="text-center px-4">
											<img src="%PUBLIC_URL%/assets/media/illustrations/sketchy-1/9.png" alt="" className="mww-100 mh-350px" />
										</div>
										{/* <!--end::Illustration--> */}
									</div>
								</div>
								{/* <!--end::Step 5--> */}
								{/* <!--begin::Actions--> */}
								<div className="d-flex flex-stack pt-10">
									{/* <!--begin::Wrapper--> */}
									<div className="me-2">
										<button type="button" className="btn btn-lg btn-light-primary me-3" data-kt-stepper-action="previous">
										<i className="ki-duotone ki-arrow-left fs-3 me-1">
											<span className="path1"></span>
											<span className="path2"></span>
										</i>Back</button>
									</div>
									{/* <!--end::Wrapper--> */}
									{/* <!--begin::Wrapper--> */}
									<div>
										<button type="button" className="btn btn-lg btn-primary" data-kt-stepper-action="submit">
											<span className="indicator-label">Submit
											<i className="ki-duotone ki-arrow-right fs-3 ms-2 me-0">
												<span className="path1"></span>
												<span className="path2"></span>
											</i></span>
											<span className="indicator-progress">Please wait...
											<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
										</button>
										<button type="button" className="btn btn-lg btn-primary" data-kt-stepper-action="next">Continue
										<i className="ki-duotone ki-arrow-right fs-3 ms-1 me-0">
											<span className="path1"></span>
											<span className="path2"></span>
										</i></button>
									</div>
									{/* <!--end::Wrapper--> */}
								</div>
								{/* <!--end::Actions--> */}
							</form>
							{/* <!--end::Form--> */}
						</div>
						{/* <!--end::Stepper--> */}
					</div>
					{/* <!--begin::Modal body--> */}
				</div>
			</div>
		</div>
		{/* <!--end::Modal - Create Campaign--> */}
		{/* <!--begin::Modal - Users Search--> */}
		<div className="modal fade" id="kt_modal_users_search" tabindex="-1" aria-hidden="true">
			{/* <!--begin::Modal dialog--> */}
			<div className="modal-dialog modal-dialog-centered mw-650px">
				{/* <!--begin::Modal content--> */}
				<div className="modal-content">
					{/* <!--begin::Modal header--> */}
					<div className="modal-header pb-0 border-0 justify-content-end">
						{/* <!--begin::Close--> */}
						<div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
							<i className="ki-duotone ki-cross fs-1">
								<span className="path1"></span>
								<span className="path2"></span>
							</i>
						</div>
						{/* <!--end::Close--> */}
					</div>
					{/* <!--begin::Modal header--> */}
					{/* <!--begin::Modal body--> */}
					<div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
						{/* <!--begin::Content--> */}
						<div className="text-center mb-13">
							<h1 className="mb-3">Search Users</h1>
							<div className="text-muted fw-semibold fs-5">Invite Collaborators To Your Project</div>
						</div>
						{/* <!--end::Content--> */}
						{/* <!--begin::Search--> */}
						<div id="kt_modal_users_search_handler" data-kt-search-keypress="true" data-kt-search-min-length="2" data-kt-search-enter="enter" data-kt-search-layout="inline">
							{/* <!--begin::Form--> */}
							<form data-kt-search-element="form" className="w-100 position-relative mb-5" autocomplete="off">
								{/* <!--begin::Hidden input(Added to disable form autocomplete)--> */}
								<input type="hidden" />
								{/* <!--end::Hidden input--> */}
								{/* <!--begin::Icon--> */}
								<i className="ki-duotone ki-magnifier fs-2 fs-lg-1 text-gray-500 position-absolute top-50 ms-5 translate-middle-y">
									<span className="path1"></span>
									<span className="path2"></span>
								</i>
								{/* <!--end::Icon--> */}
								{/* <!--begin::Input--> */}
								<input type="text" className="form-control form-control-lg form-control-solid px-15" name="search" value="" placeholder="Search by username, full name or email..." data-kt-search-element="input" />
								{/* <!--end::Input--> */}
								{/* <!--begin::Spinner--> */}
								<span className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5" data-kt-search-element="spinner">
									<span className="spinner-border h-15px w-15px align-middle text-muted"></span>
								</span>
								{/* <!--end::Spinner--> */}
								{/* <!--begin::Reset--> */}
								<span className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-5 d-none" data-kt-search-element="clear">
									<i className="ki-duotone ki-cross fs-2 fs-lg-1 me-0">
										<span className="path1"></span>
										<span className="path2"></span>
									</i>
								</span>
								{/* <!--end::Reset--> */}
							</form>
							{/* <!--end::Form--> */}
							{/* <!--begin::Wrapper--> */}
							<div className="py-5">
								{/* <!--begin::Suggestions--> */}
								<div data-kt-search-element="suggestions">
									{/* <!--begin::Heading--> */}
									<h3 className="fw-semibold mb-5">Recently searched:</h3>
									{/* <!--end::Heading--> */}
									{/* <!--begin::Users--> */}
									<div className="mh-375px scroll-y me-n7 pe-7">
										{/* <!--begin::User--> */}
										<a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
											{/* <!--begin::Avatar--> */}
											<div className="symbol symbol-35px symbol-circle me-5">
												<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-6.jpg" />
											</div>
											{/* <!--end::Avatar--> */}
											{/* <!--begin::Info--> */}
											<div className="fw-semibold">
												<span className="fs-6 text-gray-800 me-2">Emma Smith</span>
												<span className="badge badge-light">Art Director</span>
											</div>
											{/* <!--end::Info--> */}
										</a>
										{/* <!--end::User--> */}
										{/* <!--begin::User--> */}
										<a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
											{/* <!--begin::Avatar--> */}
											<div className="symbol symbol-35px symbol-circle me-5">
												<span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
											</div>
											{/* <!--end::Avatar--> */}
											{/* <!--begin::Info--> */}
											<div className="fw-semibold">
												<span className="fs-6 text-gray-800 me-2">Melody Macy</span>
												<span className="badge badge-light">Marketing Analytic</span>
											</div>
											{/* <!--end::Info--> */}
										</a>
										{/* <!--end::User--> */}
										{/* <!--begin::User--> */}
										<a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
											{/* <!--begin::Avatar--> */}
											<div className="symbol symbol-35px symbol-circle me-5">
												<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-1.jpg" />
											</div>
											{/* <!--end::Avatar--> */}
											{/* <!--begin::Info--> */}
											<div className="fw-semibold">
												<span className="fs-6 text-gray-800 me-2">Max Smith</span>
												<span className="badge badge-light">Software Enginer</span>
											</div>
											{/* <!--end::Info--> */}
										</a>
										{/* <!--end::User--> */}
										{/* <!--begin::User--> */}
										<a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
											{/* <!--begin::Avatar--> */}
											<div className="symbol symbol-35px symbol-circle me-5">
												<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-5.jpg" />
											</div>
											{/* <!--end::Avatar--> */}
											{/* <!--begin::Info--> */}
											<div className="fw-semibold">
												<span className="fs-6 text-gray-800 me-2">Sean Bean</span>
												<span className="badge badge-light">Web Developer</span>
											</div>
											{/* <!--end::Info--> */}
										</a>
										{/* <!--end::User--> */}
										{/* <!--begin::User--> */}
										<a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
											{/* <!--begin::Avatar--> */}
											<div className="symbol symbol-35px symbol-circle me-5">
												<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-25.jpg" />
											</div>
											{/* <!--end::Avatar--> */}
											{/* <!--begin::Info--> */}
											<div className="fw-semibold">
												<span className="fs-6 text-gray-800 me-2">Brian Cox</span>
												<span className="badge badge-light">UI/UX Designer</span>
											</div>
											{/* <!--end::Info--> */}
										</a>
										{/* <!--end::User--> */}
									</div>
									{/* <!--end::Users--> */}
								</div>
								{/* <!--end::Suggestions--> */}
								{/* <!--begin::Results(add d-none to below element to hide the users list by default)--> */}
								<div data-kt-search-element="results" className="d-none">
									{/* <!--begin::Users--> */}
									<div className="mh-375px scroll-y me-n7 pe-7">
										{/* <!--begin::User--> */}
										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="0">
											{/* <!--begin::Details--> */}
											<div className="d-flex align-items-center">
												{/* <!--begin::Checkbox--> */}
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='0']" value="0" />
												</label>
												{/* <!--end::Checkbox--> */}
												{/* <!--begin::Avatar--> */}
												<div className="symbol symbol-35px symbol-circle">
													<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-6.jpg" />
												</div>
												{/* <!--end::Avatar--> */}
												{/* <!--begin::Details--> */}
												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Smith</a>
													<div className="fw-semibold text-muted">smith@kpmg.com</div>
												</div>
												{/* <!--end::Details--> */}
											</div>
											{/* <!--end::Details--> */}
											{/* <!--begin::Access menu--> */}
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1">Guest</option>
													<option value="2" selected="selected">Owner</option>
													<option value="3">Can Edit</option>
												</select>
											</div>
											{/* <!--end::Access menu--> */}
										</div>
										{/* <!--end::User--> */}
										{/* <!--begin::Separator--> */}
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										{/* <!--end::Separator--> */}
										{/* <!--begin::User--> */}
										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="1">
											{/* <!--begin::Details--> */}
											<div className="d-flex align-items-center">
												{/* <!--begin::Checkbox--> */}
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='1']" value="1" />
												</label>
												{/* <!--end::Checkbox--> */}
												{/* <!--begin::Avatar--> */}
												<div className="symbol symbol-35px symbol-circle">
													<span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
												</div>
												{/* <!--end::Avatar--> */}
												{/* <!--begin::Details--> */}
												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Melody Macy</a>
													<div className="fw-semibold text-muted">melody@altbox.com</div>
												</div>
												{/* <!--end::Details--> */}
											</div>
											{/* <!--end::Details--> */}
											{/* <!--begin::Access menu--> */}
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1" selected="selected">Guest</option>
													<option value="2">Owner</option>
													<option value="3">Can Edit</option>
												</select>
											</div>
											{/* <!--end::Access menu--> */}
										</div>
										{/* <!--end::User--> */}
										{/* <!--begin::Separator--> */}
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										{/* <!--end::Separator--> */}
										{/* <!--begin::User--> */}
										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="2">
											{/* <!--begin::Details--> */}
											<div className="d-flex align-items-center">
												{/* <!--begin::Checkbox--> */}
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='2']" value="2" />
												</label>
												{/* <!--end::Checkbox--> */}
												{/* <!--begin::Avatar--> */}
												<div className="symbol symbol-35px symbol-circle">
													<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-1.jpg" />
												</div>
												{/* <!--end::Avatar--> */}
												{/* <!--begin::Details--> */}
												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Max Smith</a>
													<div className="fw-semibold text-muted">max@kt.com</div>
												</div>
												{/* <!--end::Details--> */}
											</div>
											{/* <!--end::Details--> */}
											{/* <!--begin::Access menu--> */}
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1">Guest</option>
													<option value="2">Owner</option>
													<option value="3" selected="selected">Can Edit</option>
												</select>
											</div>
											{/* <!--end::Access menu--> */}
										</div>
										{/* <!--end::User--> */}
										{/* <!--begin::Separator--> */}
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										{/* <!--end::Separator--> */}
										{/* <!--begin::User--> */}
										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="3">
											{/* <!--begin::Details--> */}
											<div className="d-flex align-items-center">
												{/* <!--begin::Checkbox--> */}
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='3']" value="3" />
												</label>
												{/* <!--end::Checkbox--> */}
												{/* <!--begin::Avatar--> */}
												<div className="symbol symbol-35px symbol-circle">
													<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-5.jpg" />
												</div>
												{/* <!--end::Avatar--> */}
												{/* <!--begin::Details--> */}
												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Sean Bean</a>
													<div className="fw-semibold text-muted">sean@dellito.com</div>
												</div>
												{/* <!--end::Details--> */}
											</div>
											{/* <!--end::Details--> */}
											{/* <!--begin::Access menu--> */}
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1">Guest</option>
													<option value="2" selected="selected">Owner</option>
													<option value="3">Can Edit</option>
												</select>
											</div>
											{/* <!--end::Access menu--> */}
										</div>
										{/* <!--end::User--> */}
										{/* <!--begin::Separator--> */}
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										{/* <!--end::Separator--> */}
										{/* <!--begin::User--> */}
										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="4">
											{/* <!--begin::Details--> */}
											<div className="d-flex align-items-center">
												{/* <!--begin::Checkbox--> */}
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='4']" value="4" />
												</label>
												{/* <!--end::Checkbox--> */}
												{/* <!--begin::Avatar--> */}
												<div className="symbol symbol-35px symbol-circle">
													<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-25.jpg" />
												</div>
												{/* <!--end::Avatar--> */}
												{/* <!--begin::Details--> */}
												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Brian Cox</a>
													<div className="fw-semibold text-muted">brian@exchange.com</div>
												</div>
												{/* <!--end::Details--> */}
											</div>
											{/* <!--end::Details--> */}
											{/* <!--begin::Access menu--> */}
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1">Guest</option>
													<option value="2">Owner</option>
													<option value="3" selected="selected">Can Edit</option>
												</select>
											</div>
											{/* <!--end::Access menu--> */}
										</div>
										{/* <!--end::User--> */}
										{/* <!--begin::Separator--> */}
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										{/* <!--end::Separator--> */}
										{/* <!--begin::User--> */}
										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="5">
											{/* <!--begin::Details--> */}
											<div className="d-flex align-items-center">
												{/* <!--begin::Checkbox--> */}
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='5']" value="5" />
												</label>
												{/* <!--end::Checkbox--> */}
												{/* <!--begin::Avatar--> */}
												<div className="symbol symbol-35px symbol-circle">
													<span className="symbol-label bg-light-warning text-warning fw-semibold">C</span>
												</div>
												{/* <!--end::Avatar--> */}
												{/* <!--begin::Details--> */}
												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Mikaela Collins</a>
													<div className="fw-semibold text-muted">mik@pex.com</div>
												</div>
												{/* <!--end::Details--> */}
											</div>
											{/* <!--end::Details--> */}
											{/* <!--begin::Access menu--> */}
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1">Guest</option>
													<option value="2" selected="selected">Owner</option>
													<option value="3">Can Edit</option>
												</select>
											</div>
											{/* <!--end::Access menu--> */}
										</div>
										{/* <!--end::User--> */}
										{/* <!--begin::Separator--> */}
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										{/* <!--end::Separator--> */}
										{/* <!--begin::User--> */}
										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="6">
											{/* <!--begin::Details--> */}
											<div className="d-flex align-items-center">
												{/* <!--begin::Checkbox--> */}
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='6']" value="6" />
												</label>
												{/* <!--end::Checkbox--> */}
												{/* <!--begin::Avatar--> */}
												<div className="symbol symbol-35px symbol-circle">
													<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-9.jpg" />
												</div>
												{/* <!--end::Avatar--> */}
												{/* <!--begin::Details--> */}
												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Francis Mitcham</a>
													<div className="fw-semibold text-muted">f.mit@kpmg.com</div>
												</div>
												{/* <!--end::Details--> */}
											</div>
											{/* <!--end::Details--> */}
											{/* <!--begin::Access menu--> */}
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1">Guest</option>
													<option value="2">Owner</option>
													<option value="3" selected="selected">Can Edit</option>
												</select>
											</div>
											{/* <!--end::Access menu--> */}
										</div>
										{/* <!--end::User--> */}
										{/* <!--begin::Separator--> */}
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										{/* <!--end::Separator--> */}
										{/* <!--begin::User--> */}
										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="7">
											{/* <!--begin::Details--> */}
											<div className="d-flex align-items-center">
												{/* <!--begin::Checkbox--> */}
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='7']" value="7" />
												</label>
												{/* <!--end::Checkbox--> */}
												{/* <!--begin::Avatar--> */}
												<div className="symbol symbol-35px symbol-circle">
													<span className="symbol-label bg-light-danger text-danger fw-semibold">O</span>
												</div>
												{/* <!--end::Avatar--> */}
												{/* <!--begin::Details--> */}
												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Olivia Wild</a>
													<div className="fw-semibold text-muted">olivia@corpmail.com</div>
												</div>
												{/* <!--end::Details--> */}
											</div>
											{/* <!--end::Details--> */}
											{/* <!--begin::Access menu--> */}
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1">Guest</option>
													<option value="2" selected="selected">Owner</option>
													<option value="3">Can Edit</option>
												</select>
											</div>
											{/* <!--end::Access menu--> */}
										</div>
										{/* <!--end::User--> */}
										{/* <!--begin::Separator--> */}
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										{/* <!--end::Separator--> */}
										{/* <!--begin::User--> */}
										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="8">
											{/* <!--begin::Details--> */}
											<div className="d-flex align-items-center">
												{/* <!--begin::Checkbox--> */}
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='8']" value="8" />
												</label>
												{/* <!--end::Checkbox--> */}
												{/* <!--begin::Avatar--> */}
												<div className="symbol symbol-35px symbol-circle">
													<span className="symbol-label bg-light-primary text-primary fw-semibold">N</span>
												</div>
												{/* <!--end::Avatar--> */}
												{/* <!--begin::Details--> */}
												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Neil Owen</a>
													<div className="fw-semibold text-muted">owen.neil@gmail.com</div>
												</div>
												{/* <!--end::Details--> */}
											</div>
											{/* <!--end::Details--> */}
											{/* <!--begin::Access menu--> */}
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1" selected="selected">Guest</option>
													<option value="2">Owner</option>
													<option value="3">Can Edit</option>
												</select>
											</div>
											{/* <!--end::Access menu--> */}
										</div>
										{/* <!--end::User--> */}
										{/* <!--begin::Separator--> */}
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										{/* <!--end::Separator--> */}
										{/* <!--begin::User--> */}
										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="9">
											{/* <!--begin::Details--> */}
											<div className="d-flex align-items-center">
												{/* <!--begin::Checkbox--> */}
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='9']" value="9" />
												</label>
												{/* <!--end::Checkbox--> */}
												{/* <!--begin::Avatar--> */}
												<div className="symbol symbol-35px symbol-circle">
													<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-23.jpg" />
												</div>
												{/* <!--end::Avatar--> */}
												{/* <!--begin::Details--> */}
												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Dan Wilson</a>
													<div className="fw-semibold text-muted">dam@consilting.com</div>
												</div>
												{/* <!--end::Details--> */}
											</div>
											{/* <!--end::Details--> */}
											{/* <!--begin::Access menu--> */}
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1">Guest</option>
													<option value="2">Owner</option>
													<option value="3" selected="selected">Can Edit</option>
												</select>
											</div>
											{/* <!--end::Access menu--> */}
										</div>
										{/* <!--end::User--> */}
										{/* <!--begin::Separator--> */}
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										{/* <!--end::Separator--> */}
										{/* <!--begin::User--> */}
										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="10">
											{/* <!--begin::Details--> */}
											<div className="d-flex align-items-center">
												{/* <!--begin::Checkbox--> */}
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='10']" value="10" />
												</label>
												{/* <!--end::Checkbox--> */}
												{/* <!--begin::Avatar--> */}
												<div className="symbol symbol-35px symbol-circle">
													<span className="symbol-label bg-light-danger text-danger fw-semibold">E</span>
												</div>
												{/* <!--end::Avatar--> */}
												{/* <!--begin::Details--> */}
												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Bold</a>
													<div className="fw-semibold text-muted">emma@intenso.com</div>
												</div>
												{/* <!--end::Details--> */}
											</div>
											{/* <!--end::Details--> */}
											{/* <!--begin::Access menu--> */}
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1">Guest</option>
													<option value="2" selected="selected">Owner</option>
													<option value="3">Can Edit</option>
												</select>
											</div>
											{/* <!--end::Access menu--> */}
										</div>
										{/* <!--end::User--> */}
										{/* <!--begin::Separator--> */}
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										{/* <!--end::Separator--> */}
										{/* <!--begin::User--> */}
										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="11">
											{/* <!--begin::Details--> */}
											<div className="d-flex align-items-center">
												{/* <!--begin::Checkbox--> */}
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='11']" value="11" />
												</label>
												{/* <!--end::Checkbox--> */}
												{/* <!--begin::Avatar--> */}
												<div className="symbol symbol-35px symbol-circle">
													<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-12.jpg" />
												</div>
												{/* <!--end::Avatar--> */}
												{/* <!--begin::Details--> */}
												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ana Crown</a>
													<div className="fw-semibold text-muted">ana.cf@limtel.com</div>
												</div>
												{/* <!--end::Details--> */}
											</div>
											{/* <!--end::Details--> */}
											{/* <!--begin::Access menu--> */}
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1" selected="selected">Guest</option>
													<option value="2">Owner</option>
													<option value="3">Can Edit</option>
												</select>
											</div>
											{/* <!--end::Access menu--> */}
										</div>
										{/* <!--end::User--> */}
										{/* <!--begin::Separator--> */}
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										{/* <!--end::Separator--> */}
										{/* <!--begin::User--> */}
										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="12">
											{/* <!--begin::Details--> */}
											<div className="d-flex align-items-center">
												{/* <!--begin::Checkbox--> */}
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='12']" value="12" />
												</label>
												{/* <!--end::Checkbox--> */}
												{/* <!--begin::Avatar--> */}
												<div className="symbol symbol-35px symbol-circle">
													<span className="symbol-label bg-light-info text-info fw-semibold">A</span>
												</div>
												{/* <!--end::Avatar--> */}
												{/* <!--begin::Details--> */}
												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Robert Doe</a>
													<div className="fw-semibold text-muted">robert@benko.com</div>
												</div>
												{/* <!--end::Details--> */}
											</div>
											{/* <!--end::Details--> */}
											{/* <!--begin::Access menu--> */}
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1">Guest</option>
													<option value="2">Owner</option>
													<option value="3" selected="selected">Can Edit</option>
												</select>
											</div>
											{/* <!--end::Access menu--> */}
										</div>
										{/* <!--end::User--> */}
										{/* <!--begin::Separator--> */}
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										{/* <!--end::Separator--> */}
										{/* <!--begin::User--> */}
										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="13">
											{/* <!--begin::Details--> */}
											<div className="d-flex align-items-center">
												{/* <!--begin::Checkbox--> */}
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='13']" value="13" />
												</label>
												{/* <!--end::Checkbox--> */}
												{/* <!--begin::Avatar--> */}
												<div className="symbol symbol-35px symbol-circle">
													<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-13.jpg" />
												</div>
												{/* <!--end::Avatar--> */}
												{/* <!--begin::Details--> */}
												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">John Miller</a>
													<div className="fw-semibold text-muted">miller@mapple.com</div>
												</div>
												{/* <!--end::Details--> */}
											</div>
											{/* <!--end::Details--> */}
											{/* <!--begin::Access menu--> */}
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1">Guest</option>
													<option value="2">Owner</option>
													<option value="3" selected="selected">Can Edit</option>
												</select>
											</div>
											{/* <!--end::Access menu--> */}
										</div>
										{/* <!--end::User--> */}
										{/* <!--begin::Separator--> */}
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										{/* <!--end::Separator--> */}
										{/* <!--begin::User--> */}
										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="14">
											{/* <!--begin::Details--> */}
											<div className="d-flex align-items-center">
												{/* <!--begin::Checkbox--> */}
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='14']" value="14" />
												</label>
												{/* <!--end::Checkbox--> */}
												{/* <!--begin::Avatar--> */}
												<div className="symbol symbol-35px symbol-circle">
													<span className="symbol-label bg-light-success text-success fw-semibold">L</span>
												</div>
												{/* <!--end::Avatar--> */}
												{/* <!--begin::Details--> */}
												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Lucy Kunic</a>
													<div className="fw-semibold text-muted">lucy.m@fentech.com</div>
												</div>
												{/* <!--end::Details--> */}
											</div>
											{/* <!--end::Details--> */}
											{/* <!--begin::Access menu--> */}
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1">Guest</option>
													<option value="2" selected="selected">Owner</option>
													<option value="3">Can Edit</option>
												</select>
											</div>
											{/* <!--end::Access menu--> */}
										</div>
										{/* <!--end::User--> */}
										{/* <!--begin::Separator--> */}
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										{/* <!--end::Separator--> */}
										{/* <!--begin::User--> */}
										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="15">
											{/* <!--begin::Details--> */}
											<div className="d-flex align-items-center">
												{/* <!--begin::Checkbox--> */}
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='15']" value="15" />
												</label>
												{/* <!--end::Checkbox--> */}
												{/* <!--begin::Avatar--> */}
												<div className="symbol symbol-35px symbol-circle">
													<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-21.jpg" />
												</div>
												{/* <!--end::Avatar--> */}
												{/* <!--begin::Details--> */}
												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ethan Wilder</a>
													<div className="fw-semibold text-muted">ethan@loop.com.au</div>
												</div>
												{/* <!--end::Details--> */}
											</div>
											{/* <!--end::Details--> */}
											{/* <!--begin::Access menu--> */}
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1" selected="selected">Guest</option>
													<option value="2">Owner</option>
													<option value="3">Can Edit</option>
												</select>
											</div>
											{/* <!--end::Access menu--> */}
										</div>
										{/* <!--end::User--> */}
										{/* <!--begin::Separator--> */}
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										{/* <!--end::Separator--> */}
										{/* <!--begin::User--> */}
										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="16">
											{/* <!--begin::Details--> */}
											<div className="d-flex align-items-center">
												{/* <!--begin::Checkbox--> */}
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='16']" value="16" />
												</label>
												{/* <!--end::Checkbox--> */}
												{/* <!--begin::Avatar--> */}
												<div className="symbol symbol-35px symbol-circle">
													<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-1.jpg" />
												</div>
												{/* <!--end::Avatar--> */}
												{/* <!--begin::Details--> */}
												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Max Smith</a>
													<div className="fw-semibold text-muted">max@kt.com</div>
												</div>
												{/* <!--end::Details--> */}
											</div>
											{/* <!--end::Details--> */}
											{/* <!--begin::Access menu--> */}
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1">Guest</option>
													<option value="2">Owner</option>
													<option value="3" selected="selected">Can Edit</option>
												</select>
											</div>
											{/* <!--end::Access menu--> */}
										</div>
										{/* <!--end::User--> */}
									</div>
									{/* <!--end::Users--> */}
									{/* <!--begin::Actions--> */}
									<div className="d-flex flex-center mt-15">
										<button type="reset" id="kt_modal_users_search_reset" data-bs-dismiss="modal" className="btn btn-active-light me-3">Cancel</button>
										<button type="submit" id="kt_modal_users_search_submit" className="btn btn-primary">Add Selected Users</button>
									</div>
									{/* <!--end::Actions--> */}
								</div>
								{/* <!--end::Results--> */}
								{/* <!--begin::Empty--> */}
								<div data-kt-search-element="empty" className="text-center d-none">
									{/* <!--begin::Message--> */}
									<div className="fw-semibold py-10">
										<div className="text-gray-600 fs-3 mb-2">No users found</div>
										<div className="text-muted fs-6">Try to search by username, full name or email...</div>
									</div>
									{/* <!--end::Message--> */}
									{/* <!--begin::Illustration--> */}
									<div className="text-center px-5">
										<img src="%PUBLIC_URL%/assets/media/illustrations/sketchy-1/1.png" alt="" className="w-100 h-200px h-sm-325px" />
									</div>
									{/* <!--end::Illustration--> */}
								</div>
								{/* <!--end::Empty--> */}
							</div>
							{/* <!--end::Wrapper--> */}
						</div>
						{/* <!--end::Search--> */}
					</div>
					{/* <!--end::Modal body--> */}
				</div>
				{/* <!--end::Modal content--> */}
			</div>
			{/* <!--end::Modal dialog--> */}
		</div>
		{/* <!--end::Modal - Users Search--> */}
		{/* <!--begin::Modal - Invite Friends--> */}
		<div className="modal fade" id="kt_modal_invite_friends" tabindex="-1" aria-hidden="true">
			{/* <!--begin::Modal dialog--> */}
			<div className="modal-dialog mw-650px">
				{/* <!--begin::Modal content--> */}
				<div className="modal-content">
					{/* <!--begin::Modal header--> */}
					<div className="modal-header pb-0 border-0 justify-content-end">
						{/* <!--begin::Close--> */}
						<div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
							<i className="ki-duotone ki-cross fs-1">
								<span className="path1"></span>
								<span className="path2"></span>
							</i>
						</div>
						{/* <!--end::Close--> */}
					</div>
					{/* <!--begin::Modal header--> */}
					{/* <!--begin::Modal body--> */}
					<div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
						{/* <!--begin::Heading--> */}
						<div className="text-center mb-13">
							{/* <!--begin::Title--> */}
							<h1 className="mb-3">Invite a Friend</h1>
							{/* <!--end::Title--> */}
							{/* <!--begin::Description--> */}
							<div className="text-muted fw-semibold fs-5">If you need more info, please check out
							<a href="#" className="link-primary fw-bold">FAQ Page</a>.</div>
							{/* <!--end::Description--> */}
						</div>
						{/* <!--end::Heading--> */}
						{/* <!--begin::Google Contacts Invite--> */}
						<div className="btn btn-light-primary fw-bold w-100 mb-8">
						<img alt="Logo" src="%PUBLIC_URL%/assets/media/svg/brand-logos/google-icon.svg" className="h-20px me-3" />Invite Gmail Contacts</div>
						{/* <!--end::Google Contacts Invite--> */}
						{/* <!--begin::Separator--> */}
						<div className="separator d-flex flex-center mb-8">
							<span className="text-uppercase bg-body fs-7 fw-semibold text-muted px-3">or</span>
						</div>
						{/* <!--end::Separator--> */}
						{/* <!--begin::Textarea--> */}
						<textarea className="form-control form-control-solid mb-8" rows="3" placeholder="Type or paste emails here"></textarea>
						{/* <!--end::Textarea--> */}
						{/* <!--begin::Users--> */}
						<div className="mb-10">
							{/* <!--begin::Heading--> */}
							<div className="fs-6 fw-semibold mb-2">Your Invitations</div>
							{/* <!--end::Heading--> */}
							{/* <!--begin::List--> */}
							<div className="mh-300px scroll-y me-n7 pe-7">
								{/* <!--begin::User--> */}
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
									{/* <!--begin::Details--> */}
									<div className="d-flex align-items-center">
										{/* <!--begin::Avatar--> */}
										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-6.jpg" />
										</div>
										{/* <!--end::Avatar--> */}
										{/* <!--begin::Details--> */}
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Smith</a>
											<div className="fw-semibold text-muted">smith@kpmg.com</div>
										</div>
										{/* <!--end::Details--> */}
									</div>
									{/* <!--end::Details--> */}
									{/* <!--begin::Access menu--> */}
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2" selected="selected">Owner</option>
											<option value="3">Can Edit</option>
										</select>
									</div>
									{/* <!--end::Access menu--> */}
								</div>
								{/* <!--end::User--> */}
								{/* <!--begin::User--> */}
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
									{/* <!--begin::Details--> */}
									<div className="d-flex align-items-center">
										{/* <!--begin::Avatar--> */}
										<div className="symbol symbol-35px symbol-circle">
											<span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
										</div>
										{/* <!--end::Avatar--> */}
										{/* <!--begin::Details--> */}
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Melody Macy</a>
											<div className="fw-semibold text-muted">melody@altbox.com</div>
										</div>
										{/* <!--end::Details--> */}
									</div>
									{/* <!--end::Details--> */}
									{/* <!--begin::Access menu--> */}
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1" selected="selected">Guest</option>
											<option value="2">Owner</option>
											<option value="3">Can Edit</option>
										</select>
									</div>
									{/* <!--end::Access menu--> */}
								</div>
								{/* <!--end::User--> */}
								{/* <!--begin::User--> */}
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
									{/* <!--begin::Details--> */}
									<div className="d-flex align-items-center">
										{/* <!--begin::Avatar--> */}
										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-1.jpg" />
										</div>
										{/* <!--end::Avatar--> */}
										{/* <!--begin::Details--> */}
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Max Smith</a>
											<div className="fw-semibold text-muted">max@kt.com</div>
										</div>
										{/* <!--end::Details--> */}
									</div>
									{/* <!--end::Details--> */}
									{/* <!--begin::Access menu--> */}
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2">Owner</option>
											<option value="3" selected="selected">Can Edit</option>
										</select>
									</div>
									{/* <!--end::Access menu--> */}
								</div>
								{/* <!--end::User--> */}
								{/* <!--begin::User--> */}
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
									{/* <!--begin::Details--> */}
									<div className="d-flex align-items-center">
										{/* <!--begin::Avatar--> */}
										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-5.jpg" />
										</div>
										{/* <!--end::Avatar--> */}
										{/* <!--begin::Details--> */}
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Sean Bean</a>
											<div className="fw-semibold text-muted">sean@dellito.com</div>
										</div>
										{/* <!--end::Details--> */}
									</div>
									{/* <!--end::Details--> */}
									{/* <!--begin::Access menu--> */}
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2" selected="selected">Owner</option>
											<option value="3">Can Edit</option>
										</select>
									</div>
									{/* <!--end::Access menu--> */}
								</div>
								{/* <!--end::User--> */}
								{/* <!--begin::User--> */}
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
									{/* <!--begin::Details--> */}
									<div className="d-flex align-items-center">
										{/* <!--begin::Avatar--> */}
										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-25.jpg" />
										</div>
										{/* <!--end::Avatar--> */}
										{/* <!--begin::Details--> */}
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Brian Cox</a>
											<div className="fw-semibold text-muted">brian@exchange.com</div>
										</div>
										{/* <!--end::Details--> */}
									</div>
									{/* <!--end::Details--> */}
									{/* <!--begin::Access menu--> */}
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2">Owner</option>
											<option value="3" selected="selected">Can Edit</option>
										</select>
									</div>
									{/* <!--end::Access menu--> */}
								</div>
								{/* <!--end::User--> */}
								{/* <!--begin::User--> */}
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
									{/* <!--begin::Details--> */}
									<div className="d-flex align-items-center">
										{/* <!--begin::Avatar--> */}
										<div className="symbol symbol-35px symbol-circle">
											<span className="symbol-label bg-light-warning text-warning fw-semibold">C</span>
										</div>
										{/* <!--end::Avatar--> */}
										{/* <!--begin::Details--> */}
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Mikaela Collins</a>
											<div className="fw-semibold text-muted">mik@pex.com</div>
										</div>
										{/* <!--end::Details--> */}
									</div>
									{/* <!--end::Details--> */}
									{/* <!--begin::Access menu--> */}
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2" selected="selected">Owner</option>
											<option value="3">Can Edit</option>
										</select>
									</div>
									{/* <!--end::Access menu--> */}
								</div>
								{/* <!--end::User--> */}
								{/* <!--begin::User--> */}
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
									{/* <!--begin::Details--> */}
									<div className="d-flex align-items-center">
										{/* <!--begin::Avatar--> */}
										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-9.jpg" />
										</div>
										{/* <!--end::Avatar--> */}
										{/* <!--begin::Details--> */}
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Francis Mitcham</a>
											<div className="fw-semibold text-muted">f.mit@kpmg.com</div>
										</div>
										{/* <!--end::Details--> */}
									</div>
									{/* <!--end::Details--> */}
									{/* <!--begin::Access menu--> */}
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2">Owner</option>
											<option value="3" selected="selected">Can Edit</option>
										</select>
									</div>
									{/* <!--end::Access menu--> */}
								</div>
								{/* <!--end::User--> */}
								{/* <!--begin::User--> */}
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
									{/* <!--begin::Details--> */}
									<div className="d-flex align-items-center">
										{/* <!--begin::Avatar--> */}
										<div className="symbol symbol-35px symbol-circle">
											<span className="symbol-label bg-light-danger text-danger fw-semibold">O</span>
										</div>
										{/* <!--end::Avatar--> */}
										{/* <!--begin::Details--> */}
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Olivia Wild</a>
											<div className="fw-semibold text-muted">olivia@corpmail.com</div>
										</div>
										{/* <!--end::Details--> */}
									</div>
									{/* <!--end::Details--> */}
									{/* <!--begin::Access menu--> */}
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2" selected="selected">Owner</option>
											<option value="3">Can Edit</option>
										</select>
									</div>
									{/* <!--end::Access menu--> */}
								</div>
								{/* <!--end::User--> */}
								{/* <!--begin::User--> */}
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
									{/* <!--begin::Details--> */}
									<div className="d-flex align-items-center">
										{/* <!--begin::Avatar--> */}
										<div className="symbol symbol-35px symbol-circle">
											<span className="symbol-label bg-light-primary text-primary fw-semibold">N</span>
										</div>
										{/* <!--end::Avatar--> */}
										{/* <!--begin::Details--> */}
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Neil Owen</a>
											<div className="fw-semibold text-muted">owen.neil@gmail.com</div>
										</div>
										{/* <!--end::Details--> */}
									</div>
									{/* <!--end::Details--> */}
									{/* <!--begin::Access menu--> */}
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1" selected="selected">Guest</option>
											<option value="2">Owner</option>
											<option value="3">Can Edit</option>
										</select>
									</div>
									{/* <!--end::Access menu--> */}
								</div>
								{/* <!--end::User--> */}
								{/* <!--begin::User--> */}
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
									{/* <!--begin::Details--> */}
									<div className="d-flex align-items-center">
										{/* <!--begin::Avatar--> */}
										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-23.jpg" />
										</div>
										{/* <!--end::Avatar--> */}
										{/* <!--begin::Details--> */}
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Dan Wilson</a>
											<div className="fw-semibold text-muted">dam@consilting.com</div>
										</div>
										{/* <!--end::Details--> */}
									</div>
									{/* <!--end::Details--> */}
									{/* <!--begin::Access menu--> */}
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2">Owner</option>
											<option value="3" selected="selected">Can Edit</option>
										</select>
									</div>
									{/* <!--end::Access menu--> */}
								</div>
								{/* <!--end::User--> */}
								{/* <!--begin::User--> */}
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
									{/* <!--begin::Details--> */}
									<div className="d-flex align-items-center">
										{/* <!--begin::Avatar--> */}
										<div className="symbol symbol-35px symbol-circle">
											<span className="symbol-label bg-light-danger text-danger fw-semibold">E</span>
										</div>
										{/* <!--end::Avatar--> */}
										{/* <!--begin::Details--> */}
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Bold</a>
											<div className="fw-semibold text-muted">emma@intenso.com</div>
										</div>
										{/* <!--end::Details--> */}
									</div>
									{/* <!--end::Details--> */}
									{/* <!--begin::Access menu--> */}
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2" selected="selected">Owner</option>
											<option value="3">Can Edit</option>
										</select>
									</div>
									{/* <!--end::Access menu--> */}
								</div>
								{/* <!--end::User--> */}
								{/* <!--begin::User--> */}
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
									{/* <!--begin::Details--> */}
									<div className="d-flex align-items-center">
										{/* <!--begin::Avatar--> */}
										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-12.jpg" />
										</div>
										{/* <!--end::Avatar--> */}
										{/* <!--begin::Details--> */}
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ana Crown</a>
											<div className="fw-semibold text-muted">ana.cf@limtel.com</div>
										</div>
										{/* <!--end::Details--> */}
									</div>
									{/* <!--end::Details--> */}
									{/* <!--begin::Access menu--> */}
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1" selected="selected">Guest</option>
											<option value="2">Owner</option>
											<option value="3">Can Edit</option>
										</select>
									</div>
									{/* <!--end::Access menu--> */}
								</div>
								{/* <!--end::User--> */}
								{/* <!--begin::User--> */}
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
									{/* <!--begin::Details--> */}
									<div className="d-flex align-items-center">
										{/* <!--begin::Avatar--> */}
										<div className="symbol symbol-35px symbol-circle">
											<span className="symbol-label bg-light-info text-info fw-semibold">A</span>
										</div>
										{/* <!--end::Avatar--> */}
										{/* <!--begin::Details--> */}
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Robert Doe</a>
											<div className="fw-semibold text-muted">robert@benko.com</div>
										</div>
										{/* <!--end::Details--> */}
									</div>
									{/* <!--end::Details--> */}
									{/* <!--begin::Access menu--> */}
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2">Owner</option>
											<option value="3" selected="selected">Can Edit</option>
										</select>
									</div>
									{/* <!--end::Access menu--> */}
								</div>
								{/* <!--end::User--> */}
								{/* <!--begin::User--> */}
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
									{/* <!--begin::Details--> */}
									<div className="d-flex align-items-center">
										{/* <!--begin::Avatar--> */}
										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-13.jpg" />
										</div>
										{/* <!--end::Avatar--> */}
										{/* <!--begin::Details--> */}
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">John Miller</a>
											<div className="fw-semibold text-muted">miller@mapple.com</div>
										</div>
										{/* <!--end::Details--> */}
									</div>
									{/* <!--end::Details--> */}
									{/* <!--begin::Access menu--> */}
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2">Owner</option>
											<option value="3" selected="selected">Can Edit</option>
										</select>
									</div>
									{/* <!--end::Access menu--> */}
								</div>
								{/* <!--end::User--> */}
								{/* <!--begin::User--> */}
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
									{/* <!--begin::Details--> */}
									<div className="d-flex align-items-center">
										{/* <!--begin::Avatar--> */}
										<div className="symbol symbol-35px symbol-circle">
											<span className="symbol-label bg-light-success text-success fw-semibold">L</span>
										</div>
										{/* <!--end::Avatar--> */}
										{/* <!--begin::Details--> */}
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Lucy Kunic</a>
											<div className="fw-semibold text-muted">lucy.m@fentech.com</div>
										</div>
										{/* <!--end::Details--> */}
									</div>
									{/* <!--end::Details--> */}
									{/* <!--begin::Access menu--> */}
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2" selected="selected">Owner</option>
											<option value="3">Can Edit</option>
										</select>
									</div>
									{/* <!--end::Access menu--> */}
								</div>
								{/* <!--end::User--> */}
								{/* <!--begin::User--> */}
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
									{/* <!--begin::Details--> */}
									<div className="d-flex align-items-center">
										{/* <!--begin::Avatar--> */}
										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-21.jpg" />
										</div>
										{/* <!--end::Avatar--> */}
										{/* <!--begin::Details--> */}
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ethan Wilder</a>
											<div className="fw-semibold text-muted">ethan@loop.com.au</div>
										</div>
										{/* <!--end::Details--> */}
									</div>
									{/* <!--end::Details--> */}
									{/* <!--begin::Access menu--> */}
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1" selected="selected">Guest</option>
											<option value="2">Owner</option>
											<option value="3">Can Edit</option>
										</select>
									</div>
									{/* <!--end::Access menu--> */}
								</div>
								{/* <!--end::User--> */}
								{/* <!--begin::User--> */}
								<div className="d-flex flex-stack py-4">
									{/* <!--begin::Details--> */}
									<div className="d-flex align-items-center">
										{/* <!--begin::Avatar--> */}
										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="%PUBLIC_URL%/assets/media/avatars/300-1.jpg" />
										</div>
										{/* <!--end::Avatar--> */}
										{/* <!--begin::Details--> */}
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Max Smith</a>
											<div className="fw-semibold text-muted">max@kt.com</div>
										</div>
										{/* <!--end::Details--> */}
									</div>
									{/* <!--end::Details--> */}
									{/* <!--begin::Access menu--> */}
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2">Owner</option>
											<option value="3" selected="selected">Can Edit</option>
										</select>
									</div>
									{/* <!--end::Access menu--> */}
								</div>
								{/* <!--end::User--> */}
							</div>
							{/* <!--end::List--> */}
						</div>
						{/* <!--end::Users--> */}
						{/* <!--begin::Notice--> */}
						<div className="d-flex flex-stack">
							{/* <!--begin::Label--> */}
							<div className="me-5 fw-semibold">
								<label className="fs-6">Adding Users by Team Members</label>
								<div className="fs-7 text-muted">If you need more info, please check budget planning</div>
							</div>
							{/* <!--end::Label--> */}
							{/* <!--begin::Switch--> */}
							<label className="form-check form-switch form-check-custom form-check-solid">
								<input className="form-check-input" type="checkbox" value="1" checked="checked" />
								<span className="form-check-label fw-semibold text-muted">Allowed</span>
							</label>
							{/* <!--end::Switch--> */}
						</div>
						{/* <!--end::Notice--> */}
					</div>
					{/* <!--end::Modal body--> */}
				</div>
				{/* <!--end::Modal content--> */}
			</div>
			{/* <!--end::Modal dialog--> */}
		</div>
		{/* <!--end::Modal - Invite Friend--> */}
		{/* <!--end::Modals--> */}		
	</body>
      
    </div>
  )
}

export default Dashboard;
