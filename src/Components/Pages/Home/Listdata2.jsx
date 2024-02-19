
import React from "react";
import "../../../sass/listdata.scss"

function Listdata2({scrollToBack, setBackactive  }) {

  const scrollToSecondtextsect = () => {
  
    scrollToBack("Secondtextsect");
    setBackactive(false)
    
  };

  return (
    <div className="listtotal">
      <div className="mini">
        <div className="data">
          <div className="head">
            <h1>
            Veb dizayn
           
            </h1>

            <div onClick={scrollToSecondtextsect}   className="icon1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M19.2245 2.16148C19.2245 2.79642 18.6981 3.32295 18.0632 3.32295L4.96387 3.32296L24.6594 23.0216C24.8916 23.2539 25 23.5482 25 23.8424C25 24.1366 24.8916 24.4309 24.6594 24.6632C24.2103 25.1123 23.4671 25.1123 23.0181 24.6632L3.32258 4.96451L3.32258 18.066C3.32258 18.7009 2.79613 19.2275 2.16129 19.2275C1.52645 19.2275 1 18.7009 1 18.066L1 2.16148C1 2.00661 1.03097 1.86724 1.0929 1.71237C1.20129 1.43362 1.43355 1.20132 1.71226 1.09292C1.8671 1.03097 2.00645 1 2.16129 1L18.0632 1C18.6981 1 19.2245 1.52654 19.2245 2.16148Z"
                  fill="#B2B2B2"
                  stroke="#121212"
                  stroke-width="0.5"
                />
              </svg>

              <span>Geri</span>
            </div>
          </div>

          <div className="main">
            <p>
         
            Veb dizaynın əsas məqsədi vizual olaraq cəlbedici, istifadəçi dostu və effektiv onlayn təcrübə yaratmaqdır. Bu, ziyarətçilərin saytı asanlıqla gəzə bilməsini, məlumat əldə etməsini və məzmunla əlaqə saxlamasını təmin etmək üçün estetika, funksionallıq və İstifadəçi təcrübəsi kimi elementlərin daxil edilməsini nəzərdə tutur. Nəhayət, məqsəd hədəf auditoriyasının ehtiyaclarına cavab verən, nəzərdə tutulan mesajı aydın şəkildə çatdıran, istifadəçilərlə onlayn platforma arasında müsbət və qüsursuz qarşılıqlı əlaqəni asanlaşdıran vebsayt dizayn etməkdir.
            </p>
          </div>
          <button >Sifariş et</button>
        </div>
      </div>
    </div>
  );
}
export default Listdata2

