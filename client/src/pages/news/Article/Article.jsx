import Banner from "../Banner";
import { bannerImg, image } from "../../../assets/file";
export function Article() {
  let article0 = {
    cover:
      "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/327260744_1253007542241258_2832372787297641473_n.png?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Abn_l4vjlP0AX-dugDU&_nc_ht=scontent.ftun16-1.fna&oh=00_AfAdwHGwxDqobndvOcn1nGffDzSxWsNqE5jgenjsUOdaMg&oe=6560D41F",
    publishedAt: "July 24, 2020",
    title: "Lorem ipsum dolor",
    shortDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi fugit veniam et consequuntur ad corrupti! Ipsam minima, eos eaque in obcaecati odit ducimus veritatis laudantium necessitatibus? Et est totam aspernatur",
  };
  const divStyle = {
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: "cover",
  };
  return (
    <div>
      <div className="bg-[#1F2029]">
        <div className="relative h-[300px] w-[100%] flex items-center justify-center 2xl:h-[500px] xl:h-[500px] lg:h-[400px] md:h-[400px] sm:h-[300px] yxs:h-[250px]">
          <div
            className="opacity-30"
            style={{
              backgroundImage: `url(${bannerImg})`,
              backgroundSize: "cover",
              width: "100%",
              height: "100%",
              backgroundPosition: "center",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            {/* Image content */}
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[#e0ded3] items-center justify-center gap-16 ">
        <h1 className="title text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl font-bold my-8 font-montserrat text-center yyxs:text-3xl">
          <span> Lorem</span> ipsum dolor sit amet
          <div className="bg-[#2DA2DD] h-1 w-[20vw] "></div>
        </h1>

        <div className="flex flex-col justify-center items-center gap-[25px] yxs:gap-[100px] lg:flex lg:flex-row lg:gap-[50px] lg:w-[80%] xl:w-[77%] xl:gap-[35px] 2xl:gap-[60px]">
          <div className="flex flex-col w-full  justify-center items-center relative  lg:w-[30%] xl:w-[30%] 2xl:relative 2xl:top-14">
            <div className="bg-[#2DA2DD] w-[400px] h-[400px]  yxs:w-[300px] yxs:h-[300px]  sm:w-[400px] sm:h-[400px] lg:w-[300px] lg:h-[300px] 2xl:w-[400px] 2xl:h-[400px] 2xl:relative 2xl:bottom-2 "></div>
            <div className=" w-[400px] h-[400px] relative bottom-[27.5em] left-[2.5em] yxs:w-[300px] yxs:h-[300px] yxs:bottom-[21em] sm:w-[400px] sm:h-[400px] lg:w-[300px] lg:h-[300px] lg:bottom-[21em] 2xl:w-[400px] 2xl:h-[400px] 2xl:bottom-[27.5em] 2xl:left-[2.5em] ">
              <img src={image} alt="Banner" className="  " />
            </div>
          </div>

          <div className="w-[80%] p-8   left-0 bg-[#1F2029] h-[280px] relative  bottom-[23em] lg:left-5 lg:w-[70%] lg:bottom-[10.5em]  lg:h-[340px] xl:w-[70%] 2xl:h-[435px] ">
            <div className="details text-[#2eaded] font-montserrat md:text-2xl 2xl:text-3xl ">
              <span>10 octobre 2023</span>
            </div>
            <br />
            <p className="description text-[#DFDED2] font-montserrat md:text-2xl 2xl:text-3xl  ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
              eveniet quidem saepe nobis veritatis voluptas quos libero officia
              maiores unde quo deleniti voluptate qui accusantium, non et nisi.
              Aliquam, amet!
            </p>
            <br />
          </div>
        </div>
        <div className="flex bg-white  bg-opacity-[49%] w-[80%]    h-auto  p-16   relative bottom-[24em] lg:bottom-[20em] lg:w-[85%] xl:w-[80%] ">
          <p className="text-[#1F2029] font-montserrat md:text-2xl 2xl:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            explicabo quas fugit dolorem hic earum laboriosam molestias
            praesentium consectetur. Nam itaque optio natus esse nemo incidunt
            fugiat maxime cum perferendis? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quaerat quo sit iure obcaecati
            excepturi cupiditate rem, nobis natus, animi autem ipsam alias
            tempora aliquam magnam. Quos exercitationem in aliquam nulla.e Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            explicabo quas fugit dolorem hic earum laboriosam molestias
            praesentium consectetur. Nam itaque optio natus esse nemo incidunt
            fugiat maxime cum perferendis? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quibusdam explicabo quas fugit dolorem
            hic earum laboriosam molestias praesentium consectetur. Nam itaque
            optio natus esse nemo incidunt fugiat maxime cum perferendis? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            explicabo quas fugit dolorem hic earum laboriosam molestias
            praesentium consectetur. Nam itaque optio natus esse nemo incidunt
            fugiat maxime cum perferendis?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            explicabo quas fugit dolorem hic earum laboriosam molestias
            praesentium consectetur. Nam itaque optio natus esse nemo incidunt
            fugiat maxime cum perferendis? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quibusdam explicabo quas fugit dolorem
            hic earum laboriosam molestias praesentium consectetur. Nam itaque
            optio natus esse nemo incidunt fugiat maxime cum perferendis? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            explicabo quas fugit dolorem hic earum laboriosam molestias
            praesentium consectetur. Nam itaque optio natus esse nemo incidunt
            fugiat maxime cum perferendis? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quibusdam explicabo quas fugit dolorem
            hic earum laboriosam molestias praesentium consectetur. Nam itaque
            optio natus esse nemo incidunt fugiat maxime cum perferendis?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            explicabo quas fugit dolorem hic earum laboriosam molestias
            praesentium consectetur. Nam itaque optio natus esse nemo incidunt
            fugiat maxime cum perferendis? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quibusdam explicabo quas fugit dolorem
            hic earum laboriosam molestias praesentium consectetur. Nam itaque
            optio natus esse nemo incidunt fugiat maxime cum perferendis? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            explicabo quas fugit dolorem hic earum laboriosam molestias
            praesentium consectetur. Nam itaque optio natus esse nemo incidunt
            fugiat maxime cum perferendis? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quibusdam explicabo quas fugit dolorem
            hic earum laboriosam molestias praesentium consectetur. Nam itaque
            optio natus esse nemo incidunt fugiat maxime cum perferendis?
          </p>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}
