/**
 * Created by nalantianyi on 2016/10/20.
 */
function MyComponent() {
    this.age = 42;
    setTimeout(()=> {
        this.age += 1;
        console.log(this.age);
    }, 100);
}
new MyComponent();