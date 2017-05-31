import * as fs from "fs";
import * as crypto from "crypto";
import { join } from "path";

it("should have the right checksum", (done) => {
    const path = join(__dirname, "../files/sqllite.db");
    var md5sum = crypto.createHash('md5');
    var stream = fs.createReadStream(path);

    stream.on("data", (data: any) => md5sum.update(data));
    stream.on("end", () => {
        const digest = md5sum.digest("hex");

        expect(digest).toMatchSnapshot();
        done();
    });
});