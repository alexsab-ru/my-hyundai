function maskphone(e) {

	var num = this.value.replace(/^(\+7|8)/g, '').replace(/\D/g, '').split(/(?=.)/),
		i = num.length;

	if (0 <= i) num.unshift('+7');
	if (1 <= i) num.splice(1, 0, ' ');
	if (4 <= i) num.splice(5, 0, ' ');
	if (7 <= i) num.splice(9, 0, '-');
	if (9 <= i) num.splice(12, 0, '-');
	if (11 <= i) num.splice(15, num.length - 15);
	this.value = num.join('');

	this.onblur = function(){
		if(num.length != 15 || [... new Set(num)].length == 1) {
			this.parentElement.classList.add('has-error');
			this.parentElement.dataset.content = 'Некорректный номер телефона';
			return;
		}
	}
	this.parentElement.classList.remove('has-error');
};

document.querySelectorAll("input[name=phone]").forEach(function (element) {
	element.addEventListener('focus', maskphone);
	element.addEventListener('input', maskphone);
});

const titleModal = document.querySelector('#response_modal h3');
const textModal = document.querySelector('#response_modal .content p');
const successArr = ['Спасибо!', 'Ваша заявка успешно отправлена!'];
const errorArr = ["Ошибка", "Перезагрузите страницу и попробуйте снова"];

function getCookie(name) {
	var matches = document.cookie.match(new RegExp(
	"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	))
	return matches ? decodeURIComponent(matches[1]) : undefined
}

document.querySelectorAll("form").forEach(function(form) {
	var btn = form.querySelector('button');

	form.addEventListener('submit', function(e) {
		e.preventDefault();

		var formData = new FormData(form);
		const params = new URLSearchParams([...new FormData(e.target).entries()]);

		if(e.target.classList.contains('has-error')) {
			return false;
		}

		if(getCookie('fta')) {
			formData.append("fta", true);
		}

		var url = window.location.href;
		var replUrl = url.replace('?', '&');
		btn.innerHTML = 'Отправляем...';
		btn.setAttribute('disabled', true);

		formData.append("page", window.location.origin + window.location.pathname);
		window.location.search.slice(1).split("&").forEach(function(pair) {
			var param = pair.split("=");
			formData.append(param[0], param[1]);
		});
		if(getCookie('__gtm_campaign_url')) {
			var source = new URL(getCookie('__gtm_campaign_url'));
			source.search.slice(1).split("&").forEach(function(pair) {
				var param = pair.split("=");
				formData.append(param[0], param[1]);
			});
		}
		fetch('/mail.php', {
			method: 'POST',
			body: formData
		})
		.then(res => res.json())
		.then(data => {
			form.reset();
			btn.innerHTML = 'Отправить';
			btn.removeAttribute('disabled');
			Alpine.store('state').isModalOpen = false;
			Alpine.store('modalShow').on = 0;
			titleModal.innerText = successArr[0];
			textModal.innerText = successArr[1];
			Alpine.store('state').isResponseModalOpen = true;
		})
		.catch(error => {
			console.error("Ошибка отправки данных формы: " + error);
			btn.innerHTML = 'Отправить';
			btn.removeAttribute('disabled');
			Alpine.store('state').isModalOpen = false;
			Alpine.store('modalShow').on = 0;
			titleModal.innerText = errorArr[0];
			textModal.innerText = errorArr[1];
			Alpine.store('state').isResponseModalOpen = true;
		});
		return false;
	});
});