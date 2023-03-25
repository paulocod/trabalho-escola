"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/.prisma/client/index.js
var require_client = __commonJS({
  "node_modules/.prisma/client/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var {
      PrismaClientKnownRequestError,
      PrismaClientUnknownRequestError,
      PrismaClientRustPanicError,
      PrismaClientInitializationError,
      PrismaClientValidationError,
      NotFoundError,
      decompressFromBase64,
      getPrismaClient,
      sqltag,
      empty,
      join,
      raw,
      Decimal,
      Debug,
      objectEnumValues,
      makeStrictEnum,
      Extensions,
      findSync
    } = require("@prisma/client/runtime/library");
    var Prisma = {};
    exports.Prisma = Prisma;
    Prisma.prismaVersion = {
      client: "4.11.0",
      engine: "8fde8fef4033376662cad983758335009d522acb"
    };
    Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
    Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
    Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
    Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
    Prisma.PrismaClientValidationError = PrismaClientValidationError;
    Prisma.NotFoundError = NotFoundError;
    Prisma.Decimal = Decimal;
    Prisma.sql = sqltag;
    Prisma.empty = empty;
    Prisma.join = join;
    Prisma.raw = raw;
    Prisma.validator = () => (val) => val;
    Prisma.DbNull = objectEnumValues.instances.DbNull;
    Prisma.JsonNull = objectEnumValues.instances.JsonNull;
    Prisma.AnyNull = objectEnumValues.instances.AnyNull;
    Prisma.NullTypes = {
      DbNull: objectEnumValues.classes.DbNull,
      JsonNull: objectEnumValues.classes.JsonNull,
      AnyNull: objectEnumValues.classes.AnyNull
    };
    var path = require("path");
    var fs = require("fs");
    var hasDirname = typeof __dirname !== "undefined" && __dirname !== "/";
    var regularDirname = hasDirname && fs.existsSync(path.join(__dirname, "schema.prisma")) && __dirname;
    var foundDirname = !regularDirname && findSync(process.cwd(), [
      "node_modules/.prisma/client",
      ".prisma/client"
    ], ["d"], ["d"], 1)[0];
    var dirname = regularDirname || foundDirname || __dirname;
    function makeEnum(x) {
      return x;
    }
    exports.Prisma.SortOrder = makeEnum({
      asc: "asc",
      desc: "desc"
    });
    exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
      Serializable: "Serializable"
    });
    exports.Prisma.UrlScalarFieldEnum = makeEnum({
      id: "id",
      url: "url",
      short_url: "short_url",
      userId: "userId"
    });
    exports.Prisma.UserScalarFieldEnum = makeEnum({
      id: "id",
      email: "email",
      password: "password",
      name: "name",
      created_at: "created_at"
    });
    exports.Prisma.ModelName = makeEnum({
      User: "User",
      Url: "Url"
    });
    var dmmfString = '{"datamodel":{"enums":[],"models":[{"name":"User","dbName":"users","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"urls","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Url","relationName":"UrlToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},{"name":"Url","dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"url","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"short_url","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"User","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","relationName":"UrlToUser","relationFromFields":["userId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}],"types":[]},"mappings":{"modelOperations":[{"model":"User","plural":"users","findUnique":"findUniqueUser","findUniqueOrThrow":"findUniqueUserOrThrow","findFirst":"findFirstUser","findFirstOrThrow":"findFirstUserOrThrow","findMany":"findManyUser","create":"createOneUser","delete":"deleteOneUser","update":"updateOneUser","deleteMany":"deleteManyUser","updateMany":"updateManyUser","upsert":"upsertOneUser","aggregate":"aggregateUser","groupBy":"groupByUser"},{"model":"Url","plural":"urls","findUnique":"findUniqueUrl","findUniqueOrThrow":"findUniqueUrlOrThrow","findFirst":"findFirstUrl","findFirstOrThrow":"findFirstUrlOrThrow","findMany":"findManyUrl","create":"createOneUrl","delete":"deleteOneUrl","update":"updateOneUrl","deleteMany":"deleteManyUrl","updateMany":"updateManyUrl","upsert":"upsertOneUrl","aggregate":"aggregateUrl","groupBy":"groupByUrl"}],"otherOperations":{"read":[],"write":["executeRaw","queryRaw"]}}}';
    var dmmf = JSON.parse(dmmfString);
    exports.Prisma.dmmf = JSON.parse(dmmfString);
    var config = {
      "generator": {
        "name": "client",
        "provider": {
          "fromEnvVar": null,
          "value": "prisma-client-js"
        },
        "output": {
          "value": "/home/paulo/sideprojects/escola/api/node_modules/@prisma/client",
          "fromEnvVar": null
        },
        "config": {
          "engineType": "library"
        },
        "binaryTargets": [],
        "previewFeatures": []
      },
      "relativeEnvPaths": {
        "rootEnvPath": "../../../.env",
        "schemaEnvPath": "../../../.env"
      },
      "relativePath": "../../../prisma",
      "clientVersion": "4.11.0",
      "engineVersion": "8fde8fef4033376662cad983758335009d522acb",
      "datasourceNames": [
        "db"
      ],
      "activeProvider": "sqlite",
      "dataProxy": false
    };
    config.dirname = dirname;
    config.document = dmmf;
    var { warnEnvConflicts } = require("@prisma/client/runtime/library");
    warnEnvConflicts({
      rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
      schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
    });
    var PrismaClient2 = getPrismaClient(config);
    exports.PrismaClient = PrismaClient2;
    Object.assign(exports, Prisma);
    path.join(__dirname, "libquery_engine-debian-openssl-1.1.x.so.node");
    path.join(process.cwd(), "node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node");
    path.join(__dirname, "schema.prisma");
    path.join(process.cwd(), "node_modules/.prisma/client/schema.prisma");
  }
});

// src/app.ts
var Sentry = __toESM(require("@sentry/node"), 1);
var Tracing = __toESM(require("@sentry/tracing"), 1);
var import_compression = __toESM(require("compression"), 1);
var import_cors = __toESM(require("cors"), 1);
var import_config = require("dotenv/config");
var import_express4 = __toESM(require("express"), 1);
var import_express_async_errors = require("express-async-errors");
var import_helmet = __toESM(require("helmet"), 1);

// src/routes/Error.ts
var import_express = require("express");
var errorRouter = (0, import_express.Router)();
errorRouter.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

// src/routes/UrlRoutes.ts
var import_express2 = require("express");

// src/prisma/index.ts
var import_client = __toESM(require_client(), 1);
var prisma = new import_client.PrismaClient({
  errorFormat: "pretty"
  // log: ['query', 'error']
});

// src/repositories/UrlRepository.ts
var UrlRepository = class {
  async createShortUrl({ url: url2, shortUrl }) {
    const urlResponse = await prisma.url.create({
      data: {
        url: url2,
        short_url: shortUrl
      }
    });
    return urlResponse;
  }
  async shortUrlExists(shortUrl) {
    const shortUrlExist = await prisma.url.findFirst({
      where: { short_url: shortUrl }
    });
    return shortUrlExist;
  }
};

// src/services/Url/UrlService.ts
var UrlService = class {
  constructor(urlRepository2) {
    this.urlRepository = urlRepository2;
  }
  async createUrl({ url: url2 }) {
    if (!url2) {
      throw new Error("url is required");
    }
    const objUrl = {
      url: url2
    };
    const options2 = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(objUrl)
    };
    const shortUrl = await fetch(
      "https://api.encurtador.dev/encurtamentos",
      options2
    ).then(async (response) => response.json()).then((data) => {
      return data.urlEncurtada;
    });
    const urlResponse = await this.urlRepository.createShortUrl({ url: url2, shortUrl });
    return urlResponse;
  }
  async findShortUrlService(shortUrl) {
    if (!shortUrl) {
      throw new Error("error uma short url tem que ser passada");
    }
    const shortUrlExist = await this.urlRepository.shortUrlExists(shortUrl);
    const url2 = shortUrlExist?.url;
    return url2;
  }
};

// src/controllers/Url/UrlController.ts
var UrlController = class {
  constructor(urlService2) {
    this.urlService = urlService2;
  }
  async create(req, res) {
    const { url: url2 } = req.body;
    try {
      const urlResponse = await this.urlService.createUrl({ url: url2 });
      return res.status(200).json({ url: urlResponse });
    } catch (error) {
      return res.status(400).send({ error: "Ocorreu um erro com a api de url" });
    }
  }
  async findUrlShort(req, res) {
    const { shortUrl } = req.body;
    try {
      const urlResponse = await this.urlService.findShortUrlService(shortUrl);
      return res.status(200).json({ full_url: urlResponse });
    } catch (error) {
      return res.status(400).send({ error: "Ocorreu um erro com a api de url" });
    }
  }
};

// src/services/Url/index.ts
var urlRepository = new UrlRepository();
var urlService = new UrlService(urlRepository);
var urlController = new UrlController(urlService);

// src/middlewares/ensureAuthenticated.ts
var import_jose = require("jose");
async function ensureAuthenticated(request, response, next) {
  const authToken = request.headers.authorization;
  const jwtSecret = new TextEncoder().encode(process.env.JWT_APP_SECRET);
  if (!authToken) {
    return response.status(401).json({
      message: "Token is missing"
    });
  }
  const [, token] = authToken.split(" ");
  try {
    await (0, import_jose.jwtVerify)(token, jwtSecret);
    next();
    return;
  } catch (error) {
    return response.status(401).json({
      message: "Token invalid"
    });
  }
}

// src/routes/UrlRoutes.ts
var urlRouter = (0, import_express2.Router)();
urlRouter.post("/user/url", ensureAuthenticated, async (req, res) => {
  return await urlController.create(req, res);
});
urlRouter.post("/user/shorturl", ensureAuthenticated, async (req, res) => {
  return await urlController.findUrlShort(req, res);
});

// src/routes/UserRoutes.ts
var import_express3 = require("express");

// src/services/Auth/authService.ts
var import_jose2 = require("jose");
var import_node_crypto = require("crypto");

// src/helpers/redis.ts
var import_redis = require("redis");
var url = process.env.REDIS_URL ?? "redis://localhost:6379";
var redisClient = (0, import_redis.createClient)({
  url
});

// src/services/Auth/authService.ts
var AuthService = class {
  constructor(userRepository3) {
    this.userRepository = userRepository3;
  }
  async createToken({ email, password }) {
    const jwtSecret = new TextEncoder().encode(process.env.JWT_APP_SECRET);
    const alg = "HS256";
    const passwordHash = (0, import_node_crypto.createHash)("sha256").update(password).digest("hex");
    const userAlreadyExists = await this.userRepository.findUserEmail(email);
    if (!userAlreadyExists) {
      throw new Error("User or password incorrect.");
    }
    const passwordMatch = passwordHash === userAlreadyExists.password;
    if (!passwordMatch) {
      throw new Error("User or password incorrect.");
    }
    const token = await new import_jose2.SignJWT({}).setProtectedHeader({ alg }).setExpirationTime("2h").sign(jwtSecret);
    try {
      await redisClient.set(`user-${userAlreadyExists.id}`, JSON.stringify(userAlreadyExists));
    } catch (error) {
      throw new Error("n\xE3o foi possivel salvar a chave ao redis");
    }
    console.log(`add ao redis id: ${userAlreadyExists.name}`);
    return { token };
  }
};

// src/controllers/Auth/authController.ts
var AuthController = class {
  constructor(authService2) {
    this.authService = authService2;
  }
  async create(req, res) {
    const { email, password } = req.body;
    try {
      const token = await this.authService.createToken({ email, password });
      return res.status(200).json(token);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error."
      });
    }
  }
};

// src/repositories/UserRepository.ts
var UserRepository = class {
  async createUser({ name, email, passwordHash }) {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: passwordHash
      }
    });
    return user;
  }
  async findOneUser(id) {
    const user = await prisma.user.findFirst({
      where: {
        id
      }
    });
    return user;
  }
  async findUserEmail(email) {
    const emailExists = await prisma.user.findFirst({
      where: { email }
    });
    return emailExists;
  }
  async findAllUsers() {
    const allUsers = await prisma.user.findMany();
    return allUsers;
  }
};

// src/services/Auth/index.ts
var userRepository = new UserRepository();
var authService = new AuthService(userRepository);
var authController = new AuthController(authService);

// src/services/User/UserService.ts
var import_node_crypto2 = require("crypto");
var UserService = class {
  constructor(userRepository3) {
    this.userRepository = userRepository3;
  }
  async createUserService({ name, email, password }) {
    if (!email) {
      throw new Error("Email is required");
    }
    const emailExists = await this.userRepository.findUserEmail(email);
    if (emailExists) {
      throw new Error("Esse email ja esta cadastrado");
    }
    const passwordHash = (0, import_node_crypto2.createHash)("sha256").update(password).digest("hex");
    const user = await this.userRepository.createUser({ name, email, passwordHash });
    return user;
  }
  async detailUsersService(id) {
    try {
      console.time();
      const userCache = await redisClient.get(`user-${id}`);
      if (userCache) {
        console.log("redis");
        console.timeEnd();
        return userCache;
      }
    } catch (error) {
      throw new Error("n\xE3o foi possivel se conectar ao Redis");
    }
    console.time();
    const user = await this.userRepository.findOneUser(id);
    if (!user) {
      throw new Error("N\xE3o existe nenhum usuario no banco de dados");
    }
    console.log("banco");
    console.timeEnd();
    return user;
  }
  async allUsersService() {
    const users = await this.userRepository.findAllUsers();
    if (!users.length) {
      throw new Error("N\xE3o existe nenhum usuario no banco de dados");
    }
    return users;
  }
};

// src/controllers/User/UserController.ts
var UserController = class {
  constructor(userService2) {
    this.userService = userService2;
  }
  async create(req, res) {
    const { name, email, password } = req.body;
    try {
      await this.userService.createUserService({ name, email, password });
      return res.status(200).json({ name, email });
    } catch (error) {
      return res.status(400).send({ error: "Ocorreu um erro com a aplica\xE7\xE3o" });
    }
  }
  async detailUser(req, res) {
    const { id } = req.params;
    try {
      const user = await this.userService.detailUsersService(id);
      return res.status(200).send(user);
    } catch (error) {
      return res.status(400).send({ error: "Ocorreu um erro com a aplica\xE7\xE3o" });
    }
  }
  async allUsers(req, res) {
    try {
      const allUsers = await this.userService.allUsersService();
      return res.status(200).json({ allUsers });
    } catch (error) {
      return res.status(400).send({ error: "Ocorreu um erro com a aplica\xE7\xE3o" });
    }
  }
};

// src/services/User/index.ts
var userRepository2 = new UserRepository();
var userService = new UserService(userRepository2);
var userController = new UserController(userService);

// src/routes/UserRoutes.ts
var userRouter = (0, import_express3.Router)();
userRouter.post("/user", ensureAuthenticated, async (req, res) => {
  return await userController.create(req, res);
});
userRouter.get("/hello", async (req, res) => {
  return res.json("hello world");
});
userRouter.post("/auth", async (req, res) => {
  return await authController.create(req, res);
});
userRouter.get("/users", ensureAuthenticated, async (req, res) => {
  return await userController.allUsers(req, res);
});
userRouter.get("/user/:id", ensureAuthenticated, async (req, res) => {
  return await userController.detailUser(req, res);
});

// src/app.ts
var options = {
  methods: "GET,POST",
  origin: "*"
};
var app = (0, import_express4.default)();
Sentry.init({
  dsn: process.env.SENTRY_DSN_URL,
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Tracing.Integrations.Express({ app })
  ],
  tracesSampleRate: 1
});
app.use((0, import_helmet.default)());
app.use((0, import_cors.default)(options));
app.use(import_express4.default.json());
app.use((0, import_compression.default)());
app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());
app.use(userRouter);
app.use(urlRouter);
app.use(errorRouter);
app.use(Sentry.Handlers.errorHandler());
app.use(function onError(_err, req, res, next) {
  console.log(_err);
  return res.status(500).json({ msg: _err.message });
});

// src/server.ts
var port = process.env.PORT ?? 3e3;
var start = async () => {
  try {
    await redisClient.connect();
  } catch (error) {
    throw new Error("n\xE3o foi possivel conectar ao servidor Redis");
  }
  app.listen(port, () => {
    console.log(`\u{1F680} servidor O N L I N E ${port}`);
  });
};
void start();
//# sourceMappingURL=server.cjs.map