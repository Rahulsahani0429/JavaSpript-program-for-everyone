const schoolInfo={
    name:"rahul",
    age:23,
    math:98,
    phy:97,
    eng:89,
    marks() {
        let avg=(this.math + this.Phy + this.eng) / 3;
        console.log(`${this.name} got avg marks=${avg}`);

    }
}