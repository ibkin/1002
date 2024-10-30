import { Profiler } from "react";

const characters = [
    { id:0, name: "ルフィ", bounty: "30億", nickname: "麦わらのルフィ" ,affiliation:"麦わら海賊団"},
    { id:1, name: "ゾロ", bounty: "11億1100万", nickname: "海賊狩りのゾロ", affiliation:"麦わら海賊団" },
    { id:2, name: "サンジ", bounty: "11億1100万", nickname: "黒足のサンジ",affiliation:"麦わら海賊団" },
    { id:3, name: "マーシャル・Ｄ・ティーチ", bounty: "22億4760万", nickname: "黒ひげ", affiliation:"黒ひげ海賊団" },
    { id:3, name: "ジーザス・バージェス", bounty: "0", nickname: "チャンピオン", affiliation:"黒ひげ海賊団" },
    ];


function profile({name,bounty,nickname}){
    
    return(
        <section className='profile'>
            <h2>{name}</h2>
            <ul>
                <li><b>懸賞金</b>:{bounty}ベリー</li>
                <li><b>二つ名</b>:{nickname}</li>
                </ul></section>
    );
}
    

function Gallery(){
    return (
        <div>
            <h1>ワンピースの登場人物</h1>
            {characters.map(character =>(
                <Profiler
                key={character.id}
                name={character.name}
                bounty={character.bounty}
                nickname={character.nickname}
            />
            ))}
        </div>
    )
}

export default Gallery