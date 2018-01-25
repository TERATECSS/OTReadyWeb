import jasmine from 'jasmine';

describe('Hola Test', () => {

    it('Chequear si holaTest es igual a holaTest', ()=> expect('holaTest').toBe('holaTest'))
});



































/*import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { LoginPage } from './login';
import { By } from '@angular/platform-browser';

describe('Iniciar registro', () => {
    let registro: LoginPage;
    let fixture: ComponentFixture<LoginPage>;
    let debugElement: DebugElement;
    let htmlElement: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginPage]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginPage);
        registro = fixture.componentInstance;
        //debugElement = fixture.debugElement;
        htmlElement = debugElement.nativeElement;
    });

    it('podría mostrar si se inicia función de registro', () => {
        //Veamos si se inicia registro
        expect(htmlElement.textContent).toEqual('prueba@correo.cl');
    })
})*/