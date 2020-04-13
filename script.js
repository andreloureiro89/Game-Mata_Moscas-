
   			function start() {

					(async () => {

							const { value: nivel } = await Swal.fire({
								imageUrl: 'imagens/game.png',
		  						imageWidth: 300,
		  						imageHeight: 300,
		  						background: '#faf9f5',
							  	title: 'Select your level',
							 	input: 'select',
							  	inputOptions: {
							    Amateur: 'Amateur',
							    Master: 'Master',
							    chuckNorris: 'Chuck Norris'
							  },
							  inputPlaceholder: 'Rookie',
							  inputValidator: (value) => {	


							      if (value === '') {

							        tempo = 2000;
							        tempoDeJogo = 11;

							      } else if(value === 'Amateur') {

							        tempo = 1500;
							        tempoDeJogo = 11;

							      } else if(value === 'Master'){

							      	tempo = 1000;
							      	tempoDeJogo = 11;

							      }else if(value === 'chuckNorris'){

							      	tempo = 750;
							      	tempoDeJogo = 21;
							      }
							     }					   							      
							  })


									var jogo = setInterval(function() {

										tempoDeJogo = tempoDeJogo - 1;

										if (tempoDeJogo < 0) {

											clearInterval(jogo);
											clearInterval(vidas);
											Swal.fire({

												imageUrl: 'imagens/vitoria.png',
												imageWidth: 200,
  												imageHeight: 200,
												title: 'Well done',
												text: "Did you want to play again?",
												confirmButtonColor: '#3085d6',
												confirmButtonText: 'Yes'

												}).then((result) => {

												  if (result.value) {
												    
												      start()

												    
												  }

												})

										} else {

											document.getElementById('cronometro').innerHTML = tempoDeJogo; 

										}

								}, 1000);


									let a = window.innerWidth;//largura
					   				let b = window.innerHeight;//altura


								
							    function criarMosca() {

							    	function ladoAleatorio() {
							    			
							    			var lado = Math.floor(Math.random() * 2)

							    			if (lado === 0) {

							    				return 'ladoA';

							    			} else {

							    				return 'ladoB';

							    			}

							    	}

		
					   				function tamanho(min, max){
					   					min = 50;
					   					max = 150;
					   					return Math.floor(Math.random() * (max - min + 1) + min);
					   					
					   				}

					   				tamanhoMosca = tamanho();


							     	var altura = (Math.floor(Math.random() * b) - 150);

							     		if (altura < 0) {

							     			altura = (Math.floor(Math.random() * 150) + 50);

							     		}

									var largura = (Math.floor(Math.random() * a) - 150);

										if (largura < 0) {

							     			largura = (Math.floor(Math.random() * 150) + 50);

							     		}


							     	
							        var mosca = document.createElement('img');
									mosca.onclick = function() {this.remove();};
								    mosca.style = "width: " + tamanhoMosca +"px; margin-top: " + altura + "px; margin-left: " + largura + "px;" ;
								    mosca.src = "imagens/mosca.png";
								    mosca.className = ladoAleatorio();
								    mosca.id = 'mosca';
								    var box = document.getElementById('container');
								    box.appendChild(mosca);

									}

									criarMosca();
				 

									let numeroVidas = 1;

										var vidas = setInterval( function() {

											if (document.getElementById('mosca')) {

												document.getElementById('mosca').remove();
												document.getElementById('v' + numeroVidas).src = 'imagens/coracao_vazio.png';
												numeroVidas ++;
												criarMosca();

											} else if(!document.getElementById('mosca')){

												criarMosca();
											}

											if (numeroVidas > 3) {

												clearInterval(jogo);
												clearInterval(vidas);
												Swal.fire({

												imageUrl: 'imagens/game_over.png',
												imageWidth: 200,
  												imageHeight: 200,
												title: 'You almost got it',
												text: "Did you want to play again?",
												confirmButtonColor: '#3085d6',
												confirmButtonText: 'Yes'

												}).then((result) => {

												  if (result.value) {
												    
												      start()

												  }

												})

											}
										}, tempo);

										
						
						})
					()

   			}

   			
			