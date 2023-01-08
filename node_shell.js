const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'402c4e25-9c74-4e48-8067-5dec61d7c77d'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
