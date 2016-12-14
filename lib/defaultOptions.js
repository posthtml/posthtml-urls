"use strict";
const HTTP_EQUIV = "http-equiv";
const REFRESH = "refresh";

const isHttpEquiv = ({attrs}) => HTTP_EQUIV in attrs && attrs[HTTP_EQUIV].toLowerCase()===REFRESH;



const DEFAULT_OPTIONS =
{
	filter:
	{
		"*":        { itemtype:true },
		a:          { href:true, ping:true },
		applet:     { archive:true, code:true, codebase:true, object:true, src:true },
		area:       { href:true, ping:true },
		audio:      { src:true },
		base:       { href:true },
		blockquote: { cite:true },
		body:       { background:true },
		button:     { formaction:true },
		del:        { cite:true },
		embed:      { src:true },
		form:       { action:true },
		frame:      { longdesc:true, src:true },
		head:       { profile:true },
		html:       { manifest:true },
		iframe:     { longdesc:true, src:true },
		img:        { longdesc:true, src:true, srcset:true },
		input:      { formaction:true, src:true },
		ins:        { cite:true },
		link:       { href:true },
		menuitem:   { icon:true },
		meta:       { content:isHttpEquiv },
		object:     { codebase:true, data:true },
		q:          { cite:true },
		script:     { src:true },
		source:     { src:true, srcset:true },
		table:      { background:true },
		tbody:      { background:true },
		td:         { background:true },
		tfoot:      { background:true },
		th:         { background:true },
		thead:      { background:true },
		tr:         { background:true },
		track:      { src:true },
		video:      { poster:true, src:true }
	}
};



module.exports = DEFAULT_OPTIONS;
