import {Observable} from 'rxjs'



const observableAlfa$ = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(4);
    //a=b; error example 
    //stop emitted 
    subscriber.complete()
    subscriber.next(20);
    subscriber.next({hola:"como estas"})

});

const observador = {
    next: (value) => {
        console.log('Value was send :', value)
    },
    complete: () => {},
    error: (error) => {
        console.log('error', error);
    }
}

observableAlfa$.subscribe(observador);
