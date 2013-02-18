/**
 * @copyright   Copyright (C) 2013 mktgexperts.com. All rights reserved.
 * @license     GNU General Public License version 2 or later; see http://www.gnu.org/licenses/gpl-2.0.html
 */

window.addEvent('domready', function(){
	var devInfoPanel = new Element('div',
		{
			id : 'devInfoPanel',
			styles: {background: '#222', color: 'white', position: 'fixed', top: '0', left: '0', cursor: 'pointer'}
		}
	);
	devInfoPanel.inject($(document.body), 'bottom');

	var timer = per.periodical(500);
	var inf = '';
	function per () {
		// container size
		inf = "container : " + $$('.rt-container')[0].getSize().x + "px; ";
		// window size
		inf += "window size : [" + $(window).getSize().x + "px X " + document.window.getSize().y + "px]; ";
		// set output
		devInfoPanel.set('html' , inf);
	}
});
