import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Brush", quantity: 1, packed: true },
// ];

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  return (
    <>
      <div className="app">
        <Logo></Logo>
        <Form addItems={handleAddItem}></Form>
        <PackingList addItems={items} deleteItems={handleDelete}></PackingList>
        <Stats></Stats>
      </div>
    </>
  );
}

function Logo() {
  return <h1> ✈️ Far Away</h1>;
}
function Form({ addItems }) {
  const [description, setDescription] = useState("");

  function settingDescription(e) {
    setDescription(e.target.value);
    // console.log(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = {
      description,
      quantity: 1,
      packed: false,
      id: Math.random(),
    };
    console.log(newItem);
    addItems(newItem);
    setDescription("");
  }
  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>what you wish to take on your trip </h3>
        <select>
          <option>1</option>
        </select>
        <input
          placeholder="items.. "
          value={description}
          onChange={settingDescription}
        ></input>
        <button>add</button>
      </form>
    </>
  );
}
function PackingList({ addItems, deleteItems }) {
  return (
    <>
      <div className="list">
        <ul>
          {addItems.map((item) => {
            return (
              <>
                <Item
                  item={item}
                  key={item.id}
                  deleteItems={deleteItems}
                ></Item>
              </>
            );
          })}
        </ul>
      </div>
      ;
    </>
  );
}
function Item({ item, deleteItems }) {
  return (
    <>
      <li>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity}
          {item.description}
        </span>
        <button onClick={() => deleteItems(item.id)}>❌</button>
      </li>
    </>
  );
}
function Stats() {
  return (
    <>
      <footer className="stats">
        <em style={{ color: "blue" }}>hi have a safe journey</em>
      </footer>
    </>
  );
}
export default App;
