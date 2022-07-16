export const faqExample = [
	{
		id: 1,
		question: ' ¿Cuánto cuesta el proceso?',
		answer: `Los servicios que presta Oportunidad Europa a los futuros empleados son TOTALMENTE GRATUITOS. Durante el proceso, no se le solicitarán dinero ni se le harán descuentos en su salario por nuestros servicios.`,
	},
	{
		id: 2,
		question: ' ¿Cuánto cuesta el proceso?',
		answer: `Los servicios que presta Oportunidad Europa a los futuros empleados son TOTALMENTE GRATUITOS. Durante el proceso, no se le solicitarán dinero ni se le harán descuentos en su salario por nuestros servicios.`,
	},
	{
		id: 3,
		question: ' ¿Cuánto cuesta el proceso?',
		answer: `Los servicios que presta Oportunidad Europa a los futuros empleados son TOTALMENTE GRATUITOS. Durante el proceso, no se le solicitarán dinero ni se le harán descuentos en su salario por nuestros servicios.`,
	},
	{
		id: 4,
		question: ' ¿Cuánto cuesta el proceso?',
		answer: `Los servicios que presta Oportunidad Europa a los futuros empleados son TOTALMENTE GRATUITOS. Durante el proceso, no se le solicitarán dinero ni se le harán descuentos en su salario por nuestros servicios.`,
	},
	{
		id: 5,
		question: ' ¿Cuánto cuesta el proceso?',
		answer: `Los servicios que presta Oportunidad Europa a los futuros empleados son TOTALMENTE GRATUITOS. Durante el proceso, no se le solicitarán dinero ni se le harán descuentos en su salario por nuestros servicios.`,
	},
];

export const offersExample = [
	{
		id: 1,
		creadoEn: ' 16-07-2022',
		actualizadoEn: '16-07-2022',
		nombreOferta: 'EWL',
		tituloOferta: 'Oferta Actual',
		subtituloOferta: 'Operario de fábrica',
		descriptionOferta: `El trabajador trabajará en la producción de elementos de madera en la planta de producción de la empresa europea. Las principales responsabilidades son producir, manejar cortes, marcar, embalar y almacenar elementos de madera.
        La oferta es exclusiva para hombres mayores de edad y menores de 50 años. Es indispensable contar con pasaporte vigente. Usted viajará con todos los documentos migratorios necesarios para una estadía y trabajo legal en el territorio polaco.`,
		informacionAdicionalOferta: '',
		imagenOferta: {
			url: 'https://oesas.pl/public/assets/img/worker.jpg',
			name: 'workers',
			altImage: 'imagen de oferta EWL',
		},
		beneficiosOferta: [
			{
				icon: 'url',
				text: 'Polonia',
				altIcon: 'ícono de ubicación',
			},
			{
				icon: 'url',
				text: 'Visa de Trabajo',
				altIcon: 'ícono de formulario',
			},
			{
				icon: 'url',
				text: 'Inglés básico',
				altIcon: 'ícono de chat',
			},
			{
				icon: 'url',
				text: 'Alojamiento',
				altIcon: 'ícono de alojamiento',
			},
		],
		tarjetasOferta: [
			{
				tituloTarjeta: 'Sobre el contrato',
				icon: 'formato',
				altIcon: 'ícono de formato',
				textosTarjeta: [
					{
						textoItem: 'Contrato de mandato por un año (mínimo)',
						diseñoItem: '',
					},
					{
						textoItem: '19 PLN x hora trabajada',
						diseñoItem: '',
					},
					{
						textoItem: 'Jornada por turnos (min. 40 horas semanales)',
						diseñoItem: '',
					},
					{
						textoItem: 'Pago mensual y en cuenta bancaria',
						diseñoItem: '',
					},
				],
			},
			{
				tituloTarjeta: 'Sobre los trámites',
				icon: 'trámite de vuelo',
				altIcon: 'ícono de tiquete aéreo',
				textosTarjeta: [
					{
						textoItem: 'Se solicita permiso de trabajo en Polonia',
						diseñoItem: '',
					},
					{
						textoItem:
							'Se obtiene su visa de trabajo de la embajada de Polonia',
						diseñoItem: '',
					},
					{
						textoItem: 'Se viaja con seguro médico',
						diseñoItem: '',
					},
					{
						textoItem: 'Sin cobros por servicio',
						diseñoItem: '',
					},
				],
			},
		],
		formularioOferta: {
			títuloFormulario: 'Aplica a la convocatoria',
			subtituloConvocatoria:
				'Estamos para solucionar las dudas que puedas tener.',
			nombreEnFormulario: 'xxx',
			sujetoCorreo: 'Oferta Madera',
			captchaFormulario: false,
			camposFormularios: [
				{
					tipoCampo: 'text',
					nombreCampo: 'name',
					títuloCampo: 'Nombre(s)',
					textIndicativoCampo: 'Carlos',
					maxCaracteresCampo: '20',
					minCaracteresCampo: '3',
					requerido: true,
					options: [],
				},
				{
					tipoCampo: 'text',
					nombreCampo: 'last_name',
					títuloCampo: 'Apellidos',
					textIndicativoCampo: 'Pérez Pérez',
					maxCaracteresCampo: '20',
					minCaracteresCampo: '3',
					requerido: true,
				},
				{
					tipoCampo: 'text',
					nombreCampo: 'nationality',
					títuloCampo: 'Nacionalidad',
					textIndicativoCampo: 'Colombiano/a',
					maxCaracteresCampo: '20',
					minCaracteresCampo: '3',
					requerido: true,
				},
				{
					tipoCampo: 'text',
					nombreCampo: 'residency',
					títuloCampo: 'País de residencia',
					textIndicativoCampo: 'Colombia',
					maxCaracteresCampo: '20',
					minCaracteresCampo: '3',
					requerido: true,
				},
				{
					tipoCampo: 'number',
					nombreCampo: 'expiration_passport',
					títuloCampo: 'Año de vencimiento de su pasaporte',
					textIndicativoCampo: '2022',
					maxNumero: '2032',
					minNumero: '2024',
					requerido: true,
				},
				{
					tipoCampo: 'tel',
					nombreCampo: 'phone',
					títuloCampo: 'Teléfono de contacto',
					textIndicativoCampo: '57 3227341241',
					maxNumero: '14',
					minNumero: '7',
					requerido: true,
				},
				{
					tipoCampo: 'email',
					nombreCampo: 'email',
					títuloCampo: 'Correo electrónico',
					textIndicativoCampo: 'carlos@gmail.com',
					maxCaracteresCampo: '50',
					minCaracteresCampo: '5',
					requerido: true,
				},
				{
					tipoCampo: 'dropdown',
					nombreCampo: 'education',
					títuloCampo: 'Nivel Educativo',
					requerido: true,
					opcionesCampo: [
						{ textOpcion: 'Bachiller', nombreOpcion: 'bachiller' },
						{ textOpcion: 'Técnico/Tecnólogo', nombreOpcion: 'Técnico' },
						{ textOpcion: 'Profesional', nombreOpcion: 'Profesional' },
					],
				},
				{
					tipoCampo: 'textarea',
					nombreCampo: 'aditional_info',
					títuloCampo: 'Información complementaria',
					requerido: false,
				},
				{
					tipoCampo: 'file',
					nombreCampo: 'attachment',
					formatosCampo: '.png, .jpg, .jpeg,.pdf,.doc,.docx',
					títuloCampo: 'Adjunta tu hoja de vida ',
					requerido: false,
				},
			],
		},
	},
];
