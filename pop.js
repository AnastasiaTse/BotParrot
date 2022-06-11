window.onload = function(){
	let questions = [
	'Хорошая погода, не правда ли?',
	'Сходим в кино?',
	'Было интересно?',
	'Тебе понравился вчерашний концерт?',
	'Ты любишь вышивать?',
	'Какую книгу ты сейчас читаешь?',
	'Чем планируешь заняться в эти выходные?',
	'Прекрасно выглядишь!',
	'Тебе нравится эта музыка?',
	'Не хочешь прогуляться?',
	'Как здоровье?'
	]
	let reactions = [
	'О, как я рад! У меня тоже ',
	'Ух ты! А у нас не ',
	'Поздравляю, и я ',
	'Неплохо, я рад за тебя! ',
	'Ай-яй-яй! Как же ты так... ',
	'Здорово! И я хочу ',
	'Прекрасно! ',
	'Очень жаль... ',
	'И не думай, лучше ',
	'В самый раз! '	
	]
	let userAnswers = [];
	let userName = "";
	
	let talk = document.getElementById("talk");
	let userText = document.getElementById("userText");
	
	talk.innerHTML = writeTalk("Привет! Я попугай Прохор! А как тебя зовут?","popText");
	
	userText.onkeyup = function(e){
		//console.log(e);
		if(e.key == "Enter"){
			//сохранить ответ
			let userAns = userText.value;
			//очистить поле
			userText.value = "";
			//вывести ответ пользователя в talk
			talk.innerHTML += writeTalk(userAns,"userText");
			if(userAns == "Пока"){
				//прощание и конец беседы
				talk.innerHTML += writeTalk("Уже уходишь? Жаль... Пока","popText");
				userText.setAttribute("disabled","disabled");
			}else{
				//проверка имени
				if(userName == ""){
					//запомнить имя
					userName = userAns;
					//Очень приятно
					talk.innerHTML += writeTalk("Очень приятно, " + userName + "!","popText");
				}else{
					// сохранить ответ
					userAnswers.push(userAns);
					//console.log(userAnswers);
					//реакция на ответ
					let numR = Math.floor(Math.random() * reactions.length);
					let numA = Math.floor(Math.random() * userAnswers.length);
					talk.innerHTML += writeTalk(reactions[numR] + userAnswers[numA],"popText");
				}//if userName
				//задать вопрос
				let numQuest = Math.floor(Math.random() * questions.length);
				let name = (Math.random() < 0.3)?userName + ", ":"";
				talk.innerHTML += writeTalk(name + questions[numQuest],"popText");
				//удалить лишние сообщения
				/* if(talk.clientHeight > 400){
					talk.querySelector("div").remove();
					talk.querySelector("div").remove();
					talk.querySelector("div").remove();
					//document.querySelector("#talk > div")
				} */
				while(talk.clientHeight > 400){
					talk.querySelector("div").remove();
				}//while
			}//if Пока
			
		}//if key
		
		
		
	}//onkeydown
	
	
	function writeTalk(message,cl){
		return "<div class="+cl+">"+message+"</div>";
	}
	
	
}//onload


