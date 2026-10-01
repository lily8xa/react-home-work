///щоб виправити обєкт який приходить з локал з типом ені

export const retrieveLocalStorage=<T, >(key:string)=>{
    const object=localStorage.getItem(key) || "";////// або нічого або стрінга
    if(!object){
        return {} as T; ////якщо немає в локал нічого, повертає пустий обєкт з типом Т, стоготипізованим
    }const parse=JSON.parse(object) ///перетворюємо в скриптовий формат
    return parse as T  ///знову до типу Т
}
