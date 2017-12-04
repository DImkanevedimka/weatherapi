 if(!(101 > 100)){alert('itswork')}



		var xhr = new XMLHttpRequest();
		var obj;
		var message = document.createElement('div');
		var input = document.getElementById('country');
		var button = document.getElementById('gobutton');


		button.onclick = function(){

			
			if(check(input)){
				alert('Можно использовать только латинские буквы');
				return;
			}

			xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=0b33f31977b4852cdc46c6beace7c332', true, 'Dimkanevedimka', 'Dimka1234');
			xhr.send();

			xhr.onreadystatechange = function() { 
				if (xhr.readyState != 4) return;
				if (xhr.status != 200) {

					alert( xhr.status + ': ' + xhr.statusText ); 
				} else {
					obj = JSON.parse(xhr.responseText);

					
					message.innerHTML = "<ul><li class=contry>" + obj.name + "</li>\
					<li>Country:"+ obj.sys.country + "</li>\
					<li>Temp:" + KtoC(obj).toFixed(2) + "C</li>\
					<li>Pressure:" + obj.main.pressure + "hPa</li>\
					<li>Clouds:" + obj.clouds.all + "%</li>\
					<li>Humidity:" + obj.main.humidity + "%</li>\
					<li>Wind direction:" + obj.wind.deg + "deg</li>\
					<li>Wind speed:" + obj.wind.speed + "m/s</li>"

					document.body.appendChild(message);
				}
			}

		}

		function KtoC (obj){
			return obj.main.temp - 273;
		};

		function check(input){
			return /[\d@/\,?().^+]/.test(input.value);
		};