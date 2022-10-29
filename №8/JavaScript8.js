<!DOCTYPE html>
<html lang="ru">
  <head>
    <title>Задание 8</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/slapform@latest/dist/index.min.js"></script>
    <script src="JavaScript.js" defer></script>
  </head>

  <body>
	<button class="myButton">Связаться нами</button>
    <form id="myForm" method="POST" action="https://api.slapform.com/aXHxW8DxN">
		<h3>Заполните форму</h3>
		<div id="info">

			<div class="pole">
				Имя: 
				<input type="text" id="name_polz" maxlength="25" size="25" placeholder="Введите ваше имя">
			</div>

			<div class="pole">
				Email: 
            	<input id="email_polz" type="email" maxlength="128" size="40" placeholder="Введите ваш email">
			</div>

			<div class="pole">
				Поле для сообщения:
				<br>
				<textarea name="Mes" id="mes" cols="30" rows="3" maxlength="120" placeholder="Введите ваше сообщение"></textarea>
			</div>

			<div class="pole">
				С контрактом ознакомлен(а):
				<input id="check" type="checkbox">
			</div>

			<div id="slide">
				<button type="submit" id="close" onclick="return openHome()">Назад</button>
				<button type="submit" id="lete" disabled>Отправить</button>
			</div>

		</div>
	</form>
    <div id="myOverlay"></div>
  </body>
</html>
