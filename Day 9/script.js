let express = require("express");
const fs = require("fs");
const fsPromises = require("fs/promises");
let app = express();
let port = 3000 || process.env.PORT;

app.use(express.json());

app.use((req, res, next) => {
  const time = new Date().toLocaleTimeString();
  console.log("middleware called : ");
  fsPromises.appendFile("./log.txt", req.url + "\t" + time + "\n");
  next();
});

// app.get("/home", (req, res) => {
//   res.send("home get");
// });
// app.post("/home", (req, res) => {
//   res.send("home post");
// });
// app.delete("/home", (req, res) => {
//   res.send("home delete");
// });
// app.patch("/", (req, res) => {
//   res.send("patch");
// });

// ! with sync

// app.get("/api/products", (req, res) => {
//   const data = fs.readFileSync("./data.json", "utf-8");
//   const arr = JSON.parse(data).products;
//   res.json({
//     status: " 200",
//     results: arr.length,
//     data: {
//       products: arr,
//     },
//   });
//   res.send("api/product Route");
// });

// !async
app.get("/api/products", async (req, res) => {
  const data = await fsPromises.readFile("./data.json", "utf-8");
  const arr = JSON.parse(data);
  res.json({
    status: " 200",
    results: arr.length,
    data: {
      products: arr,
    },
  });
});

app.post("/api/products", async (req, res) => {
  console.log(req.body);
  const { id, title, description, price } = req.body;
  if (!title || !price) {
    res.json({
      status: " 400",
      results: 1,
      data: {
        mess: "title and price must be provide",
      },
    });
  } else {
    const data = req.body;

    const db = await fsPromises.readFile("./data.json", "utf-8");
    const arr = JSON.parse(db);
    const len = arr.length;
    const newProduct = data;

    if (len == 0) {
      newProduct.id = 1;
    } else {
      newProduct.id = arr[len - 1].id + 1;
    }
    arr.push(newProduct);
    fsPromises.writeFile("./data.json", JSON.stringify(arr));
    res.json({
      status: " 200",
      results: 1,
      data: {
        newProduct: newProduct,
      },
    });
  }
});

app.put("/api/products/:id", async (req, res) => {
  const data = req.body;
  const arr = JSON.parse(await fsPromises.readFile("./data.json", "utf-8"));
  const reqId = parseInt(req.params.id);

  const newArr = arr.map((elem) => {
    if (elem.id == reqId) return data;
    else return elem;
  });
  fsPromises.writeFile("./data.json", JSON.stringify(newArr));
  console.log(data);
  // res.send("done");
  res.json({
    status: " 204",
    results: 1,
    data: {
      newProduct: null,
    },
  });
});

// app.delete("/api/products/:id", async (req, res) => {
//   const arr = JSON.parse(await fsPromises.readFile("./data.json", "utf-8"));
//   const reqId = parseInt(req.params.id);
//   const index = arr.findIndex((elem) => elem.id === reqId);
//   if (index !== -1) {
//     arr.splice(index, 1);
//     await fsPromises.writeFile("./data.json", JSON.stringify(arr));
//     res.json({
//       status: 200,
//       message: "Product deleted successfully",
//     });
//   } else {
//     res.status(404).json({
//       status: 404,
//       message: "Product not found",
//     });
//   }
// });

app.delete("/api/products/:id", async (req, res) => {
  const arr = JSON.parse(await fsPromises.readFile("./data.json", "utf-8"));

  const reqId = parseInt(req.params.id);

  const newArr = arr.filter((elem) => elem.id !== reqId);

  fsPromises.writeFile("./data.json", JSON.stringify(newArr));

  res.json({
    status: " 204",
    results: 1,
    data: {
      newProduct: null,
    },
  });
});

app.patch("/api/products/:id", async (req, res) => {
  const arr = JSON.parse(await fsPromises.readFile("./data.json", "utf-8"));

  const reqId = parseInt(req.params.id);

  // const newArr = arr.filter((elem) => elem.id !== reqId);

  let updatedProduct = req.body;

  if (reqId !== -1) {
    arr[reqId] = { ...arr[reqId], ...updatedProduct };
  }

  fsPromises.writeFile("./data.json", JSON.stringify(arr));

  res.json({
    status: " 204",
    results: 1,
    data: {
      newProduct: null,
    },
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
