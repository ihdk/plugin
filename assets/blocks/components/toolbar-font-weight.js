/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { DropdownMenu, Path, SVG } = wp.components;



export default class ToolbarFontWeight extends Component {
	constructor(){
		super( ...arguments );
		this.getIcon = this.getIcon.bind(this);
		
		this.weights = [
			{
				weight: "100",
				title: __("Thin", "citadela-pro"),
				icon: "M4.3,6v7.9H4V6.3L1.9,7.6L1.8,7.4L4.1,6H4.3z M10.9,6.9c0.4,0.7,0.6,1.7,0.6,3.1c0,1.4-0.2,2.4-0.6,3.1c-0.4,0.7-1,1-1.7,1c-0.8,0-1.4-0.3-1.7-1C7,12.3,6.8,11.3,6.8,10c0-1.4,0.2-2.4,0.6-3.1c0.4-0.7,1-1,1.7-1C9.9,5.9,10.5,6.2,10.9,6.9z M7.6,7.1C7.2,7.7,7.1,8.7,7.1,10c0,1.3,0.2,2.2,0.5,2.9s0.9,1,1.5,1c0.7,0,1.2-0.3,1.5-1s0.5-1.6,0.5-2.9c0-2.6-0.7-3.9-2.1-3.9C8.4,6.1,7.9,6.4,7.6,7.1z M17.3,6.9c0.4,0.7,0.6,1.7,0.6,3.1c0,1.4-0.2,2.4-0.6,3.1c-0.4,0.7-1,1-1.7,1c-0.8,0-1.3-0.3-1.7-1c-0.4-0.7-0.6-1.7-0.6-3.1c0-1.4,0.2-2.4,0.6-3.1c0.4-0.7,1-1,1.7-1C16.4,5.9,16.9,6.2,17.3,6.9z M14.1,7.1c-0.4,0.6-0.5,1.6-0.5,2.9c0,1.3,0.2,2.2,0.5,2.9s0.9,1,1.5,1s1.2-0.3,1.5-1s0.5-1.6,0.5-2.9c0-2.6-0.7-3.9-2.1-3.9C14.9,6.1,14.4,6.4,14.1,7.1z"
			},
			{
				weight: "200",
				title: __("Extra-light", "citadela-pro"),
				icon: "M4.8,6.4c0.4,0.4,0.6,0.9,0.6,1.5c0,0.5-0.1,1-0.3,1.5s-0.6,1-1,1.5c-0.5,0.5-1.2,1.4-2.3,2.5h3.8L5.5,14H1.1v-0.5c1.1-1.2,1.9-2.1,2.4-2.7c0.5-0.6,0.8-1.1,1-1.5C4.7,8.9,4.8,8.4,4.8,8c0-0.5-0.1-0.9-0.4-1.2C4.1,6.5,3.7,6.3,3.3,6.3c-0.4,0-0.7,0.1-1,0.2C1.9,6.7,1.7,7,1.4,7.3L1,7c0.3-0.4,0.6-0.7,1-0.8c0.4-0.2,0.8-0.3,1.2-0.3C3.9,5.9,4.5,6,4.8,6.4z M11.4,6.9C11.8,7.6,12,8.6,12,10c0,1.4-0.2,2.4-0.6,3.1c-0.4,0.7-1,1-1.8,1s-1.4-0.3-1.8-1c-0.4-0.7-0.6-1.7-0.6-3.1s0.2-2.4,0.6-3.1c0.4-0.7,1-1,1.8-1C10.4,5.9,11,6.2,11.4,6.9z M8.2,7.2C7.8,7.8,7.7,8.7,7.7,10c0,2.4,0.6,3.6,1.9,3.6c1.2,0,1.9-1.2,1.9-3.6c0-2.4-0.6-3.7-1.9-3.7C9,6.3,8.5,6.6,8.2,7.2z M17.9,6.9c0.4,0.7,0.6,1.7,0.6,3.1c0,1.4-0.2,2.4-0.6,3.1c-0.4,0.7-1,1-1.8,1s-1.4-0.3-1.8-1s-0.6-1.7-0.6-3.1s0.2-2.4,0.6-3.1c0.4-0.7,1-1,1.8-1C16.9,5.9,17.5,6.2,17.9,6.9z M14.7,7.2c-0.3,0.6-0.5,1.5-0.5,2.7c0,2.4,0.6,3.6,1.9,3.6c1.2,0,1.9-1.2,1.9-3.6c0-2.4-0.6-3.7-1.9-3.7C15.5,6.3,15.1,6.6,14.7,7.2z",
			},
			{
				weight: "300",
				title: __("Light", "citadela-pro"),
				icon: "M4.4,6.1C4.7,6.3,5,6.5,5.1,6.8c0.2,0.3,0.3,0.6,0.3,1c0,0.5-0.1,0.9-0.4,1.3C4.7,9.4,4.3,9.6,3.8,9.7c0.5,0,1,0.2,1.3,0.6c0.3,0.3,0.5,0.8,0.5,1.4c0,0.5-0.1,0.9-0.3,1.2c-0.2,0.4-0.5,0.6-0.9,0.8C4,14,3.6,14.1,3.1,14.1c-0.9,0-1.7-0.3-2.3-1l0.4-0.4c0.3,0.3,0.6,0.5,0.8,0.6s0.6,0.2,1,0.2c0.6,0,1-0.2,1.4-0.5s0.5-0.8,0.5-1.3c0-1.1-0.6-1.7-1.8-1.7H2.6l0.1-0.6h0.4c0.5,0,0.8-0.1,1.2-0.4s0.5-0.7,0.5-1.2c0-0.4-0.1-0.8-0.4-1C4,6.6,3.6,6.4,3.2,6.4c-0.3,0-0.6,0.1-0.9,0.2C2,6.7,1.7,6.9,1.4,7.2L1,6.7c0.3-0.3,0.7-0.5,1-0.7c0.4-0.1,0.7-0.2,1.2-0.2C3.6,5.8,4,5.9,4.4,6.1z M11.5,6.9c0.4,0.7,0.6,1.7,0.6,3.1c0,1.3-0.2,2.4-0.6,3.1s-1,1-1.9,1c-0.8,0-1.4-0.3-1.9-1S7.2,11.3,7.2,10s0.2-2.4,0.6-3.1s1-1,1.9-1S11.1,6.2,11.5,6.9z M7.9,10c0,2.4,0.6,3.6,1.8,3.6c0.6,0,1-0.3,1.3-0.9c0.3-0.6,0.5-1.5,0.5-2.7S11.3,7.9,11,7.3s-0.7-0.9-1.3-0.9C8.5,6.4,7.9,7.6,7.9,10z M18.1,6.9c0.4,0.7,0.6,1.7,0.6,3.1c0,1.3-0.2,2.4-0.6,3.1s-1,1-1.9,1c-0.8,0-1.4-0.3-1.9-1s-0.6-1.7-0.6-3.1s0.2-2.4,0.6-3.1s1-1,1.9-1S17.7,6.2,18.1,6.9z M14.5,10c0,2.4,0.6,3.6,1.8,3.6c0.6,0,1-0.3,1.3-0.9c0.3-0.6,0.5-1.5,0.5-2.7s-0.2-2.1-0.5-2.7s-0.7-0.9-1.3-0.9C15.1,6.4,14.5,7.6,14.5,10z",
			},
			{
				weight: "400",
				title: __("Regular", "citadela-pro"),
				icon: "M6.1,11.1V12h-1v2H4v-2H0.6v-0.8L3,5.8l0.9,0.4l-2.2,4.9H4l0.1-2.2h1v2.2H6.1z M11.9,6.9c0.5,0.7,0.7,1.7,0.7,3.1s-0.2,2.4-0.7,3.1s-1.1,1.1-2,1.1c-0.9,0-1.6-0.4-2-1.1s-0.7-1.7-0.7-3.1s0.2-2.4,0.7-3.1s1.1-1.1,2-1.1C10.7,5.8,11.4,6.2,11.9,6.9z M8.7,7.4C8.4,8,8.3,8.8,8.3,9.9s0.1,2,0.4,2.5s0.6,0.8,1.2,0.8c0.5,0,0.9-0.3,1.2-0.8c0.3-0.5,0.4-1.3,0.4-2.5c0-1.1-0.1-2-0.4-2.5c-0.3-0.5-0.6-0.8-1.2-0.8C9.3,6.7,8.9,6.9,8.7,7.4z M18.6,6.9c0.5,0.7,0.7,1.7,0.7,3.1S19,12.3,18.6,13c-0.5,0.7-1.1,1.1-2,1.1c-0.9,0-1.6-0.4-2-1.1c-0.5-0.7-0.7-1.7-0.7-3.1s0.2-2.4,0.7-3.1c0.5-0.7,1.1-1.1,2-1.1C17.4,5.8,18.1,6.2,18.6,6.9z M15.4,7.4C15.1,8,15,8.8,15,9.9s0.1,2,0.4,2.5s0.6,0.8,1.2,0.8c0.5,0,0.9-0.3,1.2-0.8s0.4-1.3,0.4-2.5c0-1.1-0.1-2-0.4-2.5c-0.3-0.5-0.6-0.8-1.2-0.8C16,6.7,15.6,6.9,15.4,7.4z",
			},
			{
				weight: "500",
				title: __("Medium", "citadela-pro"),
				icon: "M5.4,7.1h-3v2c0.4-0.2,0.8-0.3,1.2-0.3c0.4,0,0.8,0.1,1.2,0.3S5.5,9.6,5.7,10c0.2,0.4,0.3,0.9,0.3,1.4c0,0.6-0.1,1-0.4,1.5c-0.2,0.4-0.6,0.8-1.1,1c-0.5,0.2-1,0.4-1.6,0.4c-0.5,0-1-0.1-1.4-0.3c-0.4-0.2-0.8-0.5-1.1-0.8l0.9-0.8c0.5,0.5,1,0.8,1.6,0.8c0.5,0,0.8-0.1,1.1-0.4c0.3-0.3,0.4-0.7,0.4-1.2c0-1-0.4-1.5-1.3-1.5c-0.2,0-0.4,0-0.5,0.1c-0.2,0-0.3,0.1-0.5,0.2H0.9V5.9h4.7L5.4,7.1z M12,6.9c0.5,0.7,0.7,1.8,0.7,3.1c0,1.4-0.2,2.4-0.7,3.1c-0.5,0.7-1.2,1.1-2.2,1.1s-1.7-0.4-2.2-1.1c-0.5-0.7-0.7-1.8-0.7-3.1c0-1.4,0.2-2.4,0.7-3.1c0.5-0.7,1.2-1.1,2.2-1.1S11.5,6.2,12,6.9z M8.8,7.7C8.6,8.1,8.5,8.9,8.5,10c0,1.1,0.1,1.9,0.3,2.4C9,12.8,9.4,13,9.8,13c0.5,0,0.8-0.2,1-0.7c0.2-0.5,0.3-1.2,0.3-2.4c0-1.1-0.1-1.9-0.3-2.3C10.6,7.2,10.3,7,9.8,7C9.4,7,9,7.2,8.8,7.7z M18.9,6.9c0.5,0.7,0.7,1.8,0.7,3.1c0,1.4-0.2,2.4-0.7,3.1c-0.5,0.7-1.2,1.1-2.2,1.1c-0.9,0-1.7-0.4-2.2-1.1c-0.5-0.7-0.7-1.8-0.7-3.1c0-1.4,0.2-2.4,0.7-3.1c0.5-0.7,1.2-1.1,2.2-1.1C17.7,5.8,18.4,6.2,18.9,6.9z M15.7,7.7c-0.2,0.5-0.3,1.2-0.3,2.3c0,1.1,0.1,1.9,0.3,2.4c0.2,0.5,0.5,0.7,1,0.7s0.8-0.2,1-0.7S18,11.1,18,10c0-1.1-0.1-1.9-0.3-2.3S17.2,7,16.7,7S15.9,7.2,15.7,7.7z",
			},
			{
				weight: "600",
				title: __("Semi-bold", "citadela-pro"),
				icon: "M4.9,8.9c0.3,0.2,0.6,0.5,0.8,0.9s0.3,0.9,0.3,1.4s-0.1,1.1-0.4,1.5c-0.2,0.4-0.6,0.8-1,1.1s-0.9,0.4-1.5,0.4c-1,0-1.8-0.3-2.3-1c-0.5-0.7-0.7-1.6-0.7-2.9c0-0.9,0.1-1.7,0.4-2.4s0.7-1.2,1.2-1.6C2.3,6,2.9,5.8,3.6,5.8c0.7,0,1.3,0.2,1.8,0.5l-0.6,1C4.4,7.1,4.1,7,3.7,7C3.2,7,2.8,7.2,2.5,7.7C2.2,8.1,2,8.7,2,9.4c0.5-0.6,1.1-0.8,1.8-0.8C4.2,8.6,4.6,8.7,4.9,8.9z M4.1,12.5c0.2-0.3,0.3-0.7,0.3-1.2c0-0.5-0.1-0.9-0.3-1.1C3.9,9.9,3.6,9.8,3.3,9.8c-0.5,0-0.9,0.2-1.3,0.7c0,0.9,0.1,1.5,0.3,1.9C2.5,12.8,2.8,13,3.2,13C3.6,13,3.9,12.8,4.1,12.5z M12.1,6.9c0.5,0.7,0.8,1.8,0.8,3.1c0,1.4-0.3,2.4-0.8,3.1s-1.2,1.1-2.2,1.1s-1.7-0.4-2.2-1.1S6.9,11.4,6.9,10c0-1.4,0.3-2.4,0.8-3.1c0.5-0.7,1.2-1.1,2.2-1.1C10.8,5.8,11.6,6.1,12.1,6.9z M9.2,7.3C9,7.5,8.9,7.8,8.8,8.3c-0.1,0.4-0.1,1-0.1,1.7c0,0.7,0,1.3,0.1,1.7c0.1,0.4,0.2,0.7,0.4,0.9c0.2,0.2,0.4,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.5,0.4-0.9c0.1-0.4,0.1-1,0.1-1.7c0-0.7,0-1.3-0.1-1.8c-0.1-0.4-0.2-0.7-0.4-0.9c-0.2-0.2-0.4-0.3-0.7-0.3S9.3,7.1,9.2,7.3z M19,6.9c0.5,0.7,0.8,1.8,0.8,3.1c0,1.4-0.3,2.4-0.8,3.1s-1.2,1.1-2.2,1.1s-1.7-0.4-2.2-1.1s-0.8-1.8-0.8-3.1c0-1.4,0.3-2.4,0.8-3.1c0.5-0.7,1.2-1.1,2.2-1.1C17.8,5.8,18.5,6.1,19,6.9z M16.1,7.3c-0.2,0.2-0.3,0.5-0.4,0.9c-0.1,0.4-0.1,1-0.1,1.7c0,0.7,0,1.3,0.1,1.7c0.1,0.4,0.2,0.7,0.4,0.9c0.2,0.2,0.4,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.5,0.4-0.9c0.1-0.4,0.1-1,0.1-1.7c0-0.7,0-1.3-0.1-1.8c-0.1-0.4-0.2-0.7-0.4-0.9c-0.2-0.2-0.4-0.3-0.7-0.3S16.3,7.1,16.1,7.3z",
			},
			{
				weight: "700",
				title: __("Bold", "citadela-pro"),
				icon: "M5.8,5.9v1.3l-3,7l-1.7-0.6l2.7-6.3H0.5V5.9H5.8z M11.7,6.8c0.5,0.7,0.8,1.8,0.8,3.1c0,1.4-0.3,2.4-0.8,3.1s-1.3,1.1-2.3,1.1s-1.8-0.4-2.3-1.1c-0.5-0.7-0.8-1.8-0.8-3.1c0-1.4,0.3-2.4,0.8-3.1c0.5-0.7,1.3-1.1,2.3-1.1S11.1,6.1,11.7,6.8z M8.7,7.4C8.6,7.6,8.5,7.9,8.4,8.3c-0.1,0.4-0.1,1-0.1,1.7c0,0.7,0,1.3,0.1,1.7c0.1,0.4,0.2,0.7,0.4,0.9s0.4,0.3,0.6,0.3s0.5-0.1,0.6-0.3c0.2-0.2,0.3-0.5,0.4-0.9s0.1-1,0.1-1.7s0-1.3-0.1-1.7S10.2,7.6,10,7.4S9.7,7.2,9.4,7.2S8.9,7.2,8.7,7.4z M18.7,6.8c0.5,0.7,0.8,1.8,0.8,3.1c0,1.4-0.3,2.4-0.8,3.1c-0.5,0.7-1.3,1.1-2.3,1.1c-1,0-1.8-0.4-2.3-1.1c-0.5-0.7-0.8-1.8-0.8-3.1c0-1.4,0.3-2.4,0.8-3.1c0.5-0.7,1.3-1.1,2.3-1.1C17.4,5.8,18.2,6.1,18.7,6.8z M15.8,7.4c-0.2,0.2-0.3,0.5-0.4,0.9c-0.1,0.4-0.1,1-0.1,1.7c0,0.7,0,1.3,0.1,1.7c0.1,0.4,0.2,0.7,0.4,0.9s0.4,0.3,0.6,0.3c0.3,0,0.5-0.1,0.6-0.3c0.2-0.2,0.3-0.5,0.4-0.9s0.1-1,0.1-1.7s0-1.3-0.1-1.7s-0.2-0.7-0.4-0.9s-0.4-0.3-0.6-0.3C16.1,7.2,15.9,7.2,15.8,7.4z",
			},
			{
				weight: "800",
				title: __("Extra-bold", "citadela-pro"),
				icon: "M6.1,10.3c0.2,0.3,0.4,0.7,0.4,1.1c0,0.4-0.1,0.8-0.4,1.1c-0.2,0.3-0.6,0.6-1.1,0.8c-0.5,0.2-1,0.3-1.6,0.3c-0.6,0-1.1-0.1-1.6-0.3c-0.5-0.2-0.8-0.5-1-0.8c-0.2-0.3-0.4-0.7-0.4-1.1c0-0.4,0.1-0.8,0.4-1.1C1,10,1.3,9.8,1.8,9.6C1.1,9.1,0.7,8.5,0.7,7.8C0.7,7.4,0.8,7,1,6.7S1.6,6.2,2,6c0.4-0.2,0.9-0.3,1.4-0.3c0.8,0,1.5,0.2,2,0.5c0.5,0.3,0.7,0.8,0.7,1.4C6.1,8,6,8.3,5.8,8.6C5.6,8.9,5.3,9.2,4.9,9.4C5.5,9.7,5.8,9.9,6.1,10.3z M4.2,12c0.2-0.2,0.3-0.4,0.3-0.6c0-0.3-0.1-0.5-0.2-0.6c-0.2-0.2-0.4-0.3-0.8-0.5L3,10.1c-0.4,0.3-0.7,0.7-0.7,1.2c0,0.3,0.1,0.5,0.3,0.7c0.2,0.2,0.4,0.3,0.8,0.3C3.8,12.3,4,12.2,4.2,12z M2.8,7.2C2.7,7.4,2.6,7.6,2.6,7.8c0,0.2,0.1,0.4,0.2,0.6c0.1,0.2,0.3,0.3,0.6,0.4l0.3,0.1C3.9,8.7,4,8.6,4.1,8.4C4.2,8.2,4.2,8,4.2,7.8c0-0.2-0.1-0.4-0.2-0.5C3.9,7.1,3.7,7.1,3.4,7.1S3,7.1,2.8,7.2z M12.2,6.8C12.7,7.4,13,8.4,13,9.7c0,1.3-0.3,2.3-0.8,2.9c-0.5,0.7-1.2,1-2.2,1c-1,0-1.7-0.3-2.2-1C7.3,11.9,7.1,11,7.1,9.7c0-1.3,0.3-2.3,0.8-2.9c0.5-0.7,1.2-1,2.2-1C11,5.7,11.7,6.1,12.2,6.8z M9.5,7.4C9.3,7.6,9.2,7.8,9.2,8.2C9.1,8.5,9.1,9,9.1,9.7c0,0.7,0,1.2,0.1,1.5c0.1,0.4,0.2,0.6,0.3,0.8c0.1,0.2,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.2-0.4,0.3-0.8c0.1-0.4,0.1-0.9,0.1-1.5c0-0.7,0-1.2-0.1-1.5c-0.1-0.4-0.2-0.6-0.3-0.8c-0.1-0.1-0.3-0.2-0.5-0.2C9.8,7.2,9.6,7.3,9.5,7.4z M18.8,6.8c0.5,0.7,0.8,1.7,0.8,2.9c0,1.3-0.3,2.3-0.8,2.9c-0.5,0.7-1.2,1-2.2,1c-1,0-1.7-0.3-2.2-1c-0.5-0.7-0.8-1.7-0.8-2.9c0-1.3,0.3-2.3,0.8-2.9c0.5-0.7,1.2-1,2.2-1C17.6,5.7,18.3,6.1,18.8,6.8z M16.1,7.4c-0.1,0.2-0.2,0.4-0.3,0.8c-0.1,0.4-0.1,0.9-0.1,1.5c0,0.7,0,1.2,0.1,1.5c0.1,0.4,0.2,0.6,0.3,0.8c0.1,0.2,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.2-0.4,0.3-0.8c0.1-0.4,0.1-0.9,0.1-1.5c0-0.7,0-1.2-0.1-1.5c-0.1-0.4-0.2-0.6-0.3-0.8c-0.1-0.1-0.3-0.2-0.5-0.2C16.4,7.2,16.2,7.3,16.1,7.4z",
			},
			{
				weight: "900",
				title: __("Black", "citadela-pro"),
				icon: "M5,6.3c0.5,0.2,0.8,0.6,1,1c0.2,0.4,0.3,0.9,0.3,1.5c0,1-0.2,1.9-0.5,2.6c-0.4,0.7-0.9,1.3-1.7,1.7s-1.7,0.7-2.9,0.9l-0.4-1.5c0.7-0.1,1.2-0.3,1.6-0.5c0.4-0.2,0.7-0.4,1-0.6c0.2-0.2,0.4-0.6,0.6-0.9c-0.2,0.2-0.4,0.4-0.7,0.5c-0.2,0.1-0.5,0.1-0.8,0.1c-0.4,0-0.8-0.1-1.1-0.3c-0.3-0.2-0.6-0.5-0.8-0.9C0.4,9.6,0.3,9.1,0.3,8.6c0-0.5,0.1-1,0.4-1.4C1,6.8,1.3,6.5,1.8,6.3c0.5-0.2,1-0.3,1.6-0.3C4,5.9,4.5,6.1,5,6.3z M3.7,9.5C3.9,9.5,4,9.3,4.1,9.2c0-0.4,0-0.8-0.1-1c0-0.2-0.1-0.4-0.2-0.5C3.7,7.5,3.5,7.5,3.3,7.5c-0.2,0-0.4,0.1-0.6,0.3C2.6,7.9,2.5,8.2,2.5,8.5c0,0.8,0.2,1.1,0.7,1.1C3.4,9.7,3.6,9.6,3.7,9.5z M12.2,7C12.7,7.7,13,8.6,13,9.9s-0.3,2.3-0.8,3c-0.5,0.7-1.3,1-2.3,1s-1.7-0.3-2.3-1c-0.5-0.7-0.8-1.7-0.8-3S7.2,7.7,7.7,7c0.5-0.7,1.3-1,2.3-1S11.7,6.3,12.2,7z M9.5,7.7C9.4,7.9,9.3,8.1,9.2,8.5c0,0.3-0.1,0.8-0.1,1.5c0,0.6,0,1.1,0.1,1.5c0,0.3,0.1,0.6,0.2,0.7c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.2-0.4,0.2-0.7c0-0.3,0.1-0.8,0.1-1.5c0-0.7,0-1.2-0.1-1.5c0-0.3-0.1-0.6-0.2-0.7c-0.1-0.1-0.3-0.2-0.5-0.2C9.7,7.5,9.6,7.6,9.5,7.7z M18.9,7c0.5,0.7,0.8,1.7,0.8,2.9s-0.3,2.3-0.8,3c-0.5,0.7-1.3,1-2.3,1c-1,0-1.7-0.3-2.3-1c-0.5-0.7-0.8-1.7-0.8-3s0.3-2.3,0.8-2.9c0.5-0.7,1.3-1,2.3-1C17.6,5.9,18.4,6.3,18.9,7z M16.2,7.7c-0.1,0.1-0.2,0.4-0.2,0.7c0,0.3-0.1,0.8-0.1,1.5c0,0.6,0,1.1,0.1,1.5c0,0.3,0.1,0.6,0.2,0.7s0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.2-0.4,0.2-0.7c0-0.3,0.1-0.8,0.1-1.5c0-0.7,0-1.2-0.1-1.5c0-0.3-0.1-0.6-0.2-0.7c-0.1-0.1-0.3-0.2-0.5-0.2C16.4,7.5,16.3,7.6,16.2,7.7z",
			},
			{
				weight: "",
				title: __("Use default font weight", "citadela-pro"),
			},
		];
	}

	getIcon( iconPath ) {
		return <SVG
			width="24"
			height="24"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Path d={ iconPath } />
		</SVG>
	}

	render() {
		const { toggleProps, value, onChange, label = __('Select font weight', 'citadela-pro') } = this.props; 

		

		const controls = this.weights.map( ( item ) => {
			return {
				title: item.title,
				icon: item.weight == "" ? "editor-bold" : this.getIcon( item.icon ),
				isActive: value === item.weight,
				onClick: () => { onChange( item.weight ); }
			}
		});

		const toolbarIcon = value == '' 
			? "editor-bold" 
			: this.weights.map( ( item ) => { 
				if( value === item.weight ) {
					return this.getIcon( item.icon ); 
				}
			});

		return(
			<DropdownMenu
				icon={ toolbarIcon }
				label={ label }
				controls={ controls }
				toggleProps={ toggleProps }
			/>
	    );
	}
}
