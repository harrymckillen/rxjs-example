import { Component, OnInit } from '@angular/core';
import { fromEvent, of, interval, Observable} from 'rxjs';
import { map, filter, debounceTime, take, takeLast } from 'rxjs/operators'


@Component({
  selector: 'app-observable-test',
  templateUrl: './observable-test.component.html',
  styleUrls: ['./observable-test.component.scss']
})
export class ObservableTestComponent implements OnInit {

  time: any;

  constructor() { }

  ngOnInit(): void {
    const arr = [1,2,3,4,5,6,7,8];
    const nestedArr = [1,2,3,[5,6,7]];

    const trilogiesArr = [
      {
        title: 'Lord of the Rings',
        director: 'Peter Jackson',
        year: '2001',
        cast: [
          { name: 'Elijah Wood'},
          { name: 'Christopher Lee'},
          { name: 'Ian McKellen'}
        ]
      },
      {
        title: 'Back to the Future',
        director: 'Robert Zemeckis',
        year: '1985',
        cast: [
          { name: 'Michael J. Fox' },
          { name: 'Christopher Lloyd' },
          { name: 'Lea Thompson' }
        ]
      },
      {
        title: 'Matrix',
        director: 'Wachowskis',
        year: '1999',
        cast: [
          { name: 'Keanu Reeves' },
          { name: 'Laurence Fishburne' },
          { name: 'Carrie-Anne Moss' },
          { name: 'Hugo Weaving' }
        ]
      }
    ];

    const mappedArr = arr.map(v => v*3);
    console.log(mappedArr);

    const filteredArr = mappedArr.filter(v => v % 2 === 0);
    console.log(filteredArr);

    const composedArr = arr.map(x => x + 1).filter(y => y % 2 === 0);
    console.log(composedArr);

    const gameData = [
      {
        title: 'Mega Man 2',
        bosses: [
          {
            name: 'Bubble Man',
            weapon: 'Bubble Beam'
          },
          {
            name: 'Metal Man',
            weapon: 'Metal Blade'
          }]
      },
      {
        title: 'Mega Man 3',
        bosses: [
          {
            name: 'Gemini Man',
            weapon: 'Gemini Laser'
          },
          {
            name: 'Top Man',
            weapon: 'Top Spin'
          }]
      }
    ];
    console.log('==============')
    const flatMapArr = gameData.flatMap(game => {
      return game.bosses;
    });
    console.log(flatMapArr); // TODO: Blah

    console.log('==============')
    console.log(trilogiesArr);
    const flatTrilogyArr = trilogiesArr.flatMap(tril => {
      return tril.cast;
    });
    console.log(flatTrilogyArr);

    console.log('==============')
    console.log(nestedArr);
    const flatNestedArr = nestedArr.flat();
    console.log(flatNestedArr);

    // arr.forEach(v => console.log(v));

    const filteredMovies = trilogiesArr.filter(movie => movie.director === "Peter Jackson")
    .map(movie => ({ name: movie.title, year: movie.year }));
    console.log(filteredMovies);

    const someDomElement = document.getElementById('someDomElement');
    const handle = someDomElement.addEventListener('click', (event) => { console.log('got a click event'); });

    console.log('==============')
    let arr2 = ['a','b','c'];
    // typeof arr2;
    // arr2.test = 'bad';
    console.log(arr2)

    console.log('for:');
    for (let i = 0; i < arr2.length; ++i) {
      console.log(arr2[i]);
    }

    console.log('for/in:');
    for (let i in arr2) {
      console.log(arr2[i]);
    }

    console.log('for/of:');
    for (let v of arr2){
      console.log(v);
    }

    console.log('forEach:');
    arr2.forEach((v, i) => console.log(v));


    const button = document.getElementById('myButton');
    const myObservable = fromEvent(button, 'click');
    const subscription = myObservable.subscribe(event => console.log(event));
    const subscription2 = myObservable.subscribe({
      // on successful emissions
      next: event => console.log(event),
      // on errors
      error: error => console.log(error),
      // called once on completion
      complete: () => console.log('complete!')
    });
    // subscription.unsubscribe();
    // subscription2.unsubscribe();

    console.log('=====of example=========')
    const datasource = of(1,2,3,4,5,6,7,8,9,10);

    const dssubscribe = datasource
      .pipe(
        // debounceTime(200),
        map(v => v+1),
        filter(v => v >=4),
        takeLast(5)
      )
      .subscribe(v => console.log(v));


    // const clicks = fromEvent(document, 'click');
    // const positions = clicks.pipe(map(ev => ev.clientX));
    // positions.subscribe(x => console.log(x));

    const source = of({ name: 'Brian' }, [1, 2, 3], function hello() {
      return 'Hello';
    });
    const subscribe = source.subscribe(val => console.log(val));
    //output: {name: 'Brian'}, [1,2,3], function hello() { return 'Hello' }

    // Create an Observable that will publish a value on an interval
    const secondsCounter = interval(1000);
    // Subscribe to begin publishing values
    // secondsCounter.subscribe(n => console.log(`It's been ${n} seconds since subscribing!`));


    this.time = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toString()), 1000);
    });
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');

    const stopButton$ = fromEvent(stopButton, 'click');
    const killTime = stopButton$.subscribe(
      event => this.time.unsubscribe()
    )
    /////////////////////////////////////////
  }

}
