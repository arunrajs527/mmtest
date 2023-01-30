"use strict";
jQuery.noConflict();
jQuery(document).ready(function ($) {
	// map click show data 
	function dataSwitch(){
		var emptyDiv = $("#emptyData");
		var dataDiv = $("#kasaragodData");
		var trigger = $("#kasaragod");

		trigger.on('click touchstart', function (e) {
			e.preventDefault();
			$(this).toggleClass('active');
			emptyDiv.toggleClass('hide');
			dataDiv.toggleClass('hide');
		});
	}
	dataSwitch();

	$('a[href^="#"]').click( function(e) {
		e.preventDefault();
	});

	// tabs
	$('#election-overview').easytabs();
	$('#election-results-overview').easytabs();

	// tooltip

	$('.tooltip').tooltipster({
		animation: 'fade',
		delay: 200,
		theme: 'tooltipster-noir',
		touchDevices: false,
		trigger: 'hover'
	});

    // Chart Plugin (ChartJs)
	var ctx = document.getElementById("resultChart");
	var labels = ["2021 LDF", "2016 NDA", "2011 LDF"];
	var data = {
		labels: labels,
		datasets: [{
			label: 'Lead',
			data: [5421, 8627, 6415],
			backgroundColor: [
				'#dd0000',
				'#ec7024',
				'#dd0000'
			],
			borderColor: [
				'#dd0000',
				'#ec7024',
				'#dd0000'
			],
			borderWidth: 0
		}],

	};
	var config = {
		type: "bar",
		data: data,
		options: {
			responsive: true,
			animations: {
				tension: {
				  duration: 1000,
				  easing: 'linear',
				  from: 1,
				  to: 0,
				  loop: true
				}
			  },
			plugins: {
				legend: {
					display: false,
				},
			},
			scales: {
				x: {
					display: true,

					grid: {
						display: false
					}
				},
				y: {
					display: false,
					beginAtZero: true,
					grid: {
						display: false
					}
				}
			},

		}
	};
	var resultChart = new Chart(ctx, config);
	$('#election-results-overview').bind('easytabs:after', function() {
		resultChart.destroy();
		resultChart = new Chart(ctx, config);
	});
});
