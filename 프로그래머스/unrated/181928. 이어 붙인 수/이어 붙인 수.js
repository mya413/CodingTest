function solution(num_list) {
    let even = ''
    let odd = ''
    for(let i=0; i<num_list.length; i++){
        if(num_list[i] % 2 === 0){
            even = even + num_list[i]
        } else {
            odd = odd + num_list[i]
        }
    }
    return Number(even) + Number(odd)
}