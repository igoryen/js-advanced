function grandfather() {
    let gf = "дед";
    return function father() {
        let f = "отец";
        return function son() {
            let s = "сын";
            console.log(`${gf} > ${f} > ${s}`)
        }
    }
}
debugger
grandfather()()()

