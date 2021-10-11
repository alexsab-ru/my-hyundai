document.addEventListener('alpine:init', () => {
	Alpine.data('data', () => ({
		model: false,
		engineVolume: false,
		engineType: false,
		filter: false,
		total: false,
		cars: [
			{id: 1, title: 'Solaris'},
			{id: 2, title: 'i30'},
			{id: 3, title: 'Elantra'},
			{id: 4, title: 'Sonata'},
			{id: 5, title: 'i40'},
			{id: 6, title: 'Creta'},
			{id: 7, title: 'ix35'},
			{id: 8, title: 'Tucson'},
			{id: 9, title: 'Santa Fe'},
			{id: 10, title: 'H1'},
			{id: 11, title: 'Polisade'},
		],
		presents: [
			{icon: 'https://via.placeholder.com/150', title: 'Шиномонтаж', text: 'от 2000₽'},
			{icon: 'https://via.placeholder.com/150', title: 'В подарок <br class="hidden sm:block"> при шиномонтаже', text: 'осмотр ходовой <br>системы'},
			{icon: 'https://via.placeholder.com/150', title: 'В подарок', text: 'Мойка люкс <br>новым клиентам'},
			{icon: 'https://via.placeholder.com/150', title: 'Бесплатно', text: 'Замена масла в ДВС'},
			{icon: 'https://via.placeholder.com/150', title: 'А/М HYUNDAI <br>старше 3 лет', text: '-25% на услуги <br>-20% на запчасти'},
			{icon: 'https://via.placeholder.com/150', title: 'Замена масла', text: 'АКПП от 8900₽ <br>МКПП от 2900₽'},
		],
		services: [
			{id: 1, title: 'Шиномонтаж'},
			{id: 2, title: 'Замена эксплуатационных жидкостей'},
			{id: 3, title: 'Ремонт тормозной системы'},
			{id: 4, title: 'Малярно-кузовные работы'},
			{id: 5, title: 'Ремонт подвески'},
			{id: 6, title: 'Автомойка'},
			{id: 7, title: 'Ремонт электрооборудования'},
			{id: 8, title: 'Агрегатный ремонт'},
			{id: 9, title: 'Прочее'},
		],
		pricelist: [
			{
				id: 1,
				items: [
					{name: 'R13', price: 2000},
					{name: 'R14', price: 2000},
					{name: 'R15', price: 2000},
					{name: 'R16', price: 2300},
					{name: 'R17', price: 2500},
					{name: 'R18', price: 2900},
					{name: 'R19', price: 3100},
					{name: 'R20', price: 3600},
					{name: 'Проверка и регулировка углов установки колес (одна ось)', price: 1800},
					{name: 'Проверка и регулировка углов установки колес (две оси)', price: 2400},
					{name: 'Сезонное хранение колес', price: 2500},
				]
			},
			{
				id: 2, 
				items: [
					{name: 'Промывка масляной системы БЕНЗИНОВОГО двигателя (промывка Liqui Moli)', price: 900},
					{name: 'Name22', price: 400},
					{name: 'Name32', price: 500},
				]
			},
			{
				id: 3, 
				items: [
					{name: 'Name12', price: 300},
					{name: 'Name22', price: 400},
					{name: 'Name32', price: 500},
				]
			},
			{
				id: 4, 
				items: [
					{name: 'Name12', price: 300},
					{name: 'Name22', price: 400},
					{name: 'Name32', price: 500},
				]
			},
			{
				id: 5, 
				items: [
					{name: 'Name12', price: 300},
					{name: 'Name22', price: 400},
					{name: 'Name32', price: 500},
				]
			},
			{
				id: 6, 
				items: [
					{name: 'Name12', price: 300},
					{name: 'Name22', price: 400},
					{name: 'Name32', price: 500},
				]
			},
			{
				id: 7, 
				items: [
					{name: 'Name12', price: 300},
					{name: 'Name22', price: 400},
					{name: 'Name32', price: 500},
				]
			},
			{
				id: 8, 
				items: [
					{name: 'Name12', price: 300},
					{name: 'Name22', price: 400},
					{name: 'Name32', price: 500},
				]
			},
			{
				id: 9, 
				items: [
					{name: 'Name12', price: 300},
					{name: 'Name22', price: 400},
					{name: 'Name32', price: 500},
				]
			}
		],
		advantages: [
			{id: 1, title: 'Первый ДЦ Hyundai в Самаре. Обслуживаем Hyundai с 1997 г.'},
			{id: 2, title: 'Присутствуйте <br class="hidden sm:block">в ремзоне'},
			{id: 3, title: 'Официальный <br class="hidden sm:block">сервис-лоукостер'},
			{id: 4, title: '2 года <br class="hidden sm:block">гарантии'},
			{id: 5, title: 'Внутренняя <br class="hidden sm:block">сертификация <br class="hidden sm:block">мастеров'},
		],
		faqs: [
			{
				id: 1, 
				question: 'Как проехать? Время работы салона?', 
				answer: 'Заезд на парковку под шлагбаум с улицы Уличная. <br>Адрес: Самара, Уличная, д. 1. <br><br>Режим работы: с 8:30 до 21:00 ежедневно, без выходных.',
				open: true
			},
			{
				id: 2, 
				question: 'Могу ли я присутствовать в ремонтной зоне?', 
				answer: 'Да. <br><br>Присутствие в ремонтной зоне на время проведения обслуживания допускается  при условии подписания акта техники безопасности и при наличии СИЗ (средств индивидуальной защиты).',
				open: false
			},
			{
				id: 3, 
				question: 'Принимается ли оплата по карте?', 
				answer: 'Да. <br><br>Возможен как наличный, так и безналичный расчет. <br>Комиссия за безналичный расчет НЕ взимается.',
				open: false
			},

			{
				id: 4, 
				question: 'Можно ли провести работы, используя свои запасные части?', 
				answer: 'Да. <br><br>Проведение обслуживания с расходными материалами клиента возможно. <br>В этом случае гарантия предоставляется только на работы.',
				open: false
			},

			{
				id: 5, 
				question: 'На каком пробеге необходимо проводить ТО? Какой допускается перепробег при ТО?', 
				answer: 'Заводом-изготовителем регламентирован&nbsp; срок прохождения ТО: <b>каждые 15 000 км</b> (<b>или 1 год эксплуатации</b>, смотря что наступит раньше). <br><br><b>Допустимый перепробег составляет 2 000 км</b>  (или 1 месяц эксплуатации).',
				open: false
			},
		],
		toggleItem: function (id, arr) {
			let item = arr.find((item) => item.id === id);
			item.open = !item.open;
		},
	}));
	Alpine.store('modalShow', {
		on: false,
		title: ''
	});
	Alpine.store('modalShowPrivacy', {
		on: false
	});
})