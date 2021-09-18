import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAutor">
            Autor: <b>Tenaity</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit aspernatur facilis molestias temporibus illum
          voluptatibus similique error commodi ratione accusamus? Possimus amet
          voluptatibus accusantium dicta voluptate, incidunt nulla quo
          laudantium!Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit aspernatur facilis molestias temporibus illum
          voluptatibus similique error commodi ratione accusamus? Possimus amet
          voluptatibus accusantium dicta voluptate, incidunt nulla quo
          laudantium!Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit aspernatur facilis molestias temporibus illum
          voluptatibus similique error commodi ratione accusamus? Possimus amet
          voluptatibus accusantium dicta voluptate, incidunt nulla quo
          laudantium!Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit aspernatur facilis molestias temporibus illum
          voluptatibus similique error commodi ratione accusamus? Possimus amet
          voluptatibus accusantium dicta voluptate, incidunt nulla quo
          laudantium!Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit aspernatur facilis molestias temporibus illum
          voluptatibus similique error commodi ratione accusamus? Possimus amet
          voluptatibus accusantium dicta voluptate, incidunt nulla quo
          laudantium!
        </p>
      </div>
    </div>
  );
}
