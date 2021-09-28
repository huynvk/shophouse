# Shophouse

## Development

Available scripts for development

### Start mock JSON backend

1. Install `json-server` locally in development PC

2. Copy the `db.json` to `db-dev.json`

3. Run:

```
json-server -p 4000 --watch mock/db-dev.json
```

### To server JSON backend under https

```
cd mock
docker run -d -p 8443:8000 -v $PWD:/data/custom fabriciomendonca/json-server-https
```

This docker image will run on `db.json` file (not `db-dev.json` file).

### Start front end

```
yarn start
```

### To start front end under https

1. Add `HTTPS=true` to `.env` file
2. Install [hotel](https://github.com/typicode/hotel)
3. Register hotel command:

```
cd <project-root>
hotel add `yarn start`
```

4. Start project under hotel

```
hotel run `yarn start`
```
