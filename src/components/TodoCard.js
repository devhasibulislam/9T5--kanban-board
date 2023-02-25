import React from "react";
import Badge from "./Badge";

const TodoCard = ({ _id, title, description, email, gender, ip_address }) => {
  return (
    <>
      <div key={_id} className="cursor-move">
        <h2
          className="text-sm font-medium whitespace-nowrap text-ellipsis overflow-hidden"
          title={title}
        >
          {title}
        </h2>
        <article className="text-xs">
          <p
            className="whitespace-nowrap text-ellipsis overflow-hidden text-slate-500"
            title={description}
          >
            {description}
          </p>
          <p className="flex flex-wrap gap-2">
            <span>{email}</span>
            <Badge>{gender}</Badge>
          </p>
          <span className="text-orange-300">{ip_address}</span>
        </article>
      </div>
    </>
  );
};

export default TodoCard;
