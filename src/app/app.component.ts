import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { MailService } from './services/mail.service';
import { AosToken } from './aos'; 
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	mostrar_elemento = false;
	valida_robot: boolean = false;
	desarrollo : IHabilidades[] = [
	{ 
		'title': 'Programación Orientada a Objetos',
		'current': 90,
		'type': 'info'
	}
	,{ 
		'title': 'Patrones de Diseño',
		'current': 50,
		'type': 'success'
	}
	,{ 
		'title': 'Patrones de Arquitectura',
		'current': 60,
		'type': 'success'
	}
	,{ 
		'title': 'Desarrollo Ágil',
		'current': 80,
		'type': 'info'
	}
	,{ 
		'title': 'UI/UX',
		'current': 70,
		'type': 'info'
	},{ 
		'title': 'Desarrollo Mobile',
		'current': 65,
		'type': 'success'
	},{ 
		'title': 'Desarrollo Responsive',
		'current': 70,
		'type': 'info'
	}
	];
	tecnico : IHabilidades[] = [
	{ 
		'title': 'PHP',
		'current': 95,
		'type': 'info'
	}
	, { 
		'title': 'Javascript ES5-ES6 / Typescript',
		'current': 95,
		'type': 'info'
	}
	, { 
		'title': 'Angular',
		'current': 70,
		'type': 'info'
	}
	, { 
		'title': 'Ionic 2+',
		'current': 80,
		'type': 'info'
	}
	, { 
		'title': 'Transact SQL',
		'current': 85,
		'type': 'info'
	}
	, { 
		'title': 'HTML 5 / CSS 3',
		'current': 70,
		'type': 'info'
	}
	, { 
		'title': 'Foundation Zurb 5 / Bootstrap 4',
		'current': 90,
		'type': 'info'
	}
	,
	];
	blandas : IHabilidades[] = [
	{ 
		'title': 'Liderazgo',
		'current': 90,
		'type': 'info'
	}
	,{ 
		'title': 'Investigación',
		'current': 90,
		'type': 'info'
	}
	,{ 
		'title': 'Comunicación Interpersonal',
		'current': 100,
		'type': 'info'
	}
	,{ 
		'title': 'Toma de Requerimientos',
		'current': 90,
		'type': 'info'
	},{ 
		'title': 'Traspaso de Conocimientos',
		'current': 90,
		'type': 'info'
	},{ 
		'title': 'Manejo de Presión',
		'current': 90,
		'type': 'info'
	},{ 
		'title': 'Control de proyectos',
		'current': 90,
		'type': 'info'
	}
	];

	contacto_nombre: string;
	contacto_correo: string;
	contacto_sujeto: string;
	contacto_mensaje: string;

	constructor(
		@Inject(AosToken) aos
		, private mail: MailService
		, private toast: ToastrService
		) {
		aos.init();
	}

	scroll(el) {
		el.scrollIntoView({behavior:"smooth"});
	}

	@HostListener("window:scroll", [])
	onWindowScroll() {
		if (window.pageYOffset > 200) {
			this.mostrar_elemento = true;
		} else {
			this.mostrar_elemento = false;
		}
	}

	resolved(captchaResponse: string) {
		if (captchaResponse.length > 10) {
			this.valida_robot = true;
		} else {
			this.valida_robot = false;
		}
	}

	enviarMensaje() {

		

		var datos = {
			'nombre':''
			,'correo':''
			,'mensaje':''
			,'sujeto':''
		};
		
		datos.nombre = this.contacto_nombre;
		datos.correo = this.contacto_correo;
		datos.mensaje = this.contacto_mensaje;
		datos.sujeto = this.contacto_sujeto;

		if(!this.validarDatos(datos)) {
			this.toast.error('Favor ingresar todos los campos del formulario', 'Error al enviar!');
			return;
		}


		this.mail.send(datos).subscribe(
			(data: any) => {
				if (data.success) {
					this.toast.success('Gracias por contactarme, pronto te enviaré una respuesta', 'Email Enviado!');
					this.contacto_nombre = '';
					this.contacto_correo = '';
					this.contacto_mensaje = '';
					this.contacto_sujeto = '';
					this.valida_robot = false;
				} else {
					this.toast.error('Ocurrió un error al intentar contactarme, por favor inténtelo mas tarde', 'Error al enviar!');
				}
			});
	}

	validarDatos(datos: any) {
console.log(datos)
		let valido : boolean = true;
		if (datos.nombre == '') {
			valido = false;
		}

		if (datos.correo == '') {
			valido = false;
		}

		if (datos.mensaje == '') {
			valido = false;
		}

		if (datos.sujeto == '') {
			valido = false;
		}

		return valido;
	}
}


export interface IHabilidades {
	title: string;
	current: number;
	type: string;
}

export interface IContacto {
	nombre: string;
	correo: string;
	sujeto: string;
	mensaje: string;
}