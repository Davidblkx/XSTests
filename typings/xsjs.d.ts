// Type definitions for SAP HANA XS Engine
// Project: http://help.sap.com/hana/SAP_HANA_XS_JavaScript_API_Reference_en/
// Definitions by: Lars Hvam <https://github.com/larshp>
// Definitions: https://github.com/larshp/xsjs.d.ts

declare module xsjs {

    interface Application {
        language: string;
    }

    interface Session {
        language: string;
        samlUserInfo: any;

        assertAppPrivilege(privilegeName: string): void;
        assertSystemPrivilege(privilegeName: string): void;
        getInvocationCount(): number;
        getSecurityToken(): string;
        getTimeout(): number;
        getUsername(): string;
        hasAppPrivilege(privilegeName: string): boolean;
        hasSystemPrivilege(privilegeName: string): boolean;
    }

    interface xsjs {

        application: Application;
        request: xsjs.web.WebRequest;
        response: xsjs.web.WebResponse;
        session: Session;

        db: xsjs.db.xsjs;
        net: xsjs.net.xsjs;
        hdb: xsjs.hdb.xsjs;
        jobs: xsjs.jobs.xsjs;
        security: xsjs.security.xsjs;
        trace: xsjs.trace.xsjs;
        util: xsjs.util.xsjs;
        web: xsjs.web.xsjs;

        import(package: string, library: string): Object;
        import(path: string): Object;

    }

}

declare module xsjs.db {

    interface CallableStatement {
        close(): void;
        execute(): boolean;
        getBigInt(index: number): number; // todo
        getBlob(index: number): ArrayBuffer;
        getBString(index: number): ArrayBuffer;
        getClob(index: number): string;
        getDate(index: number): Date;
        getDecimal(index: number): number;
        getDouble(index: number): number;
        getFloat(columnIndex: number): number;
        getInteger(index: number): number;
        getMoreResults(): boolean;
        getNClob(index: number): string;
        getNString(index: number): string;
        getParameterMetaData(): ParameterMetaData;
        getReal(columnIndex: number): number;
        getResultSet(): ResultSet;
        getSeconddate(index: number): Date;
        getString(index: number): string;
        getText(index: number): string;
        getTime(index: number): Date;
        getTimestamp(index: number): Date;
        isClosed(): boolean;
        setBigInt(index: number, value: number): void;
        setBlob(index: number, value: ArrayBuffer): void;
        setBString(index: number, value: ArrayBuffer): void;
        setClob(index: number, value: string): void;
        setDate(index: number, value: Date, format?: string): void;
        setDate(index: number, value: string, format?: string): void;
        setDecimal(index: number, value: number): void;
        setDouble(index: number, value: number): void;
        setFloat(index: number, value: number): void;
        setInteger(index: number, value: number): void;
        setNClob(index: number, value: string): void;
        setNString(columnIndex: number, value: string): void;
        setNull(index: number): void;
        setReal(index: number, value: number): void;
        setSmallInt(index: number, value: number): void;
        setString(columnIndex: number, value: string): void;
        setText(columnIndex: number, value: string): void;
        setTime(index: number, value: Date, format?: string): void;
        setTime(index: number, value: string, format?: string): void;
        setTimestamp(index: number, value: Date, format?: string): void;
        setTimestamp(index: number, value: string, format?: string): void;
        setTinyInt(index: number, value: number): void;
    }

    interface Connection {
        close(): void;
        commit(): void;
        isClosed(): boolean;
        prepareCall(statement: string): CallableStatement;
        prepareStatement(statement: string): PreparedStatement;
        setAutoCommit(enable: number): void;
    }

    interface ParameterMetaData {
        getParameterCount(): number;
        getParameterMode(index: number): number;
        getParameterName(columnIndex: number): string;
        getParameterType(columnIndex: number): any;
        getParameterTypeName(columnIndex: number): string;
        getPrecision(columnIndex: number): string;
        getScale(columnIndex: number): string;
        hasDefault(index: number): number;
        isNullable(index: number): number;
        isSigned(index: number): number;
    }

    // todo, superclass? a lot of the methods are common?

    interface PreparedStatement {
        addBatch(): void;
        close(): void;
        execute(): boolean;
        // todo      executeBatch(): array;
        executeQuery(): ResultSet;
        executeUpdate(): number;
        getMetaData(): ResultSetMetaData;
        getMoreResults(): boolean;
        getParameterMetaData(): ParameterMetaData;
        getResultSet(): ResultSet;
        isClosed(): boolean;
        setBatchSize(size: number): void;
        setBigInt(columnIndex: number, value: number): void;
        setBlob(columnIndex: number, value: ArrayBuffer): void;
        setBString(columnIndex: number, value: ArrayBuffer): void;
        setClob(columnIndex: number, value: string): void;
        setDate(columnIndex: number, value: Date, format?: string): void;
        setDate(columnIndex: number, value: string, format?: string): void;
        setDecimal(index: number, value: number): void;
        setDouble(columnIndex: number, value: number): void;
        setFloat(columnIndex: number, value: number): void;
        setInteger(columnIndex: number, value: number): void;
        setNClob(columnIndex: number, value: string): void;
        setNString(columnIndex: number, value: string): void;
        setNull(columnIndex: number): void;
        setReal(columnIndex: number, value: number): void;
        setSmallInt(columnIndex: number, value: number): void;
        setString(columnIndex: number, value: string): void;
        setText(columnIndex: number, value: string): void;
        setTime(columnIndex: number, value: Date, format?: string): void;
        setTime(columnIndex: number, value: string, format?: string): void;
        setTimestamp(index: number, value: Date, format?: string): void;
        setTimestamp(index: number, value: string, format?: string): void;
        setTinyInt(columnIndex: number, value: number): void;
    }

    interface ResultSet {
        close(): void;
        getBigInt(columnIndex: number): string;
        getBlob(columnIndex: number): ArrayBuffer;
        getBString(columnIndex: number): ArrayBuffer;
        getClob(columnIndex: number): string;
        getDate(columnIndex: number): Date;
        getDecimal(columnIndex: number): number;
        getDouble(columnIndex: number): number;
        getFloat(columnIndex: number): number;
        getInteger(columnIndex: number): number;
        getMetaData(): ResultSetMetaData;
        getNClob(columnIndex: number): string;
        getNString(columnIndex: number): string;
        getReal(columnIndex: number): number;
        getSeconddate(columnIndex: number): Date;
        getString(columnIndex: number): string;
        getText(columnIndex: number): string;
        getTime(columnIndex: number): Date;
        getTimestamp(columnIndex: number): Date;
        isClosed(): boolean;
        next(): boolean;
    }

    interface ResultSetMetaData {
        getCatalogName(columnIndex: number): string;
        getColumnCount(): number;
        getColumnDisplaySize(columnIndex: number): number;
        getColumnLabel(columnIndex: number): string;
        getColumnName(columnIndex: number): string;
        getColumnType(columnIndex: number): any;
        getColumnTypeName(columnIndex: number): string;
        getPrecision(columnIndex: number): number;
        getScale(columnIndex: number): number;
        getTableName(columnIndex: number): string;
    }

    interface SQLException {
        code: number;
    }

    interface isolation {
        READ_COMMITTED: number;
        REPEATABLE_READ: number;
        SERIALIZABLE: number;
    }

    interface types {
        TINYINT: number;
        SMALLINT: number;
        INT: number;
        INTEGER: number;
        BIGINT: number;
        DECIMAL: number;
        REAL: number;
        DOUBLE: number;
        CHAR: number;
        VARCHAR: number;
        NCHAR: number;
        NVARCHAR: number;
        BINARY: number;
        VARBINARY: number;
        DATE: number;
        TIME: number;
        TIMESTAMP: number;
        CLOB: number;
        NCLOB: number;
        BLOB: number;
        TABLE: number;
        SMALLDECIMAL: number;
        TEXT: number;
        SHORTTEXT: number;
        ALPHANUM: number;
        SECONDDATE: number;
    }

    interface xsjs {
        isolation: isolation;
        types: types;

        getConnection(sqlcc?: string, isolationLevel?: isolation): xsjs.db.Connection;
        getConnection(configurationObject?: any): xsjs.db.Connection;

        textmining: xsjs.db.textmining.xsjs;
    }
}

declare module xsjs.db.textmining {

    interface Session {
        // todo
    }

    interface xsjs {
        Session: {
            new (p: { referenceTable: string, referenceColumn: string }): Session;
        };
    }

}

declare module xsjs.hdb {

    interface Connection {
        close(): void;
        commit(): void;
        executeQuery(query: string, ...arguments: any[]): ResultSet;
        executeUpdate(statement: string, ...arguments: any[]): number; // todo
        loadProcedure(schema: string, procedure: string): (any?: any) => any;
        rollback(): void;
        setAutoCommit(enable: number): void;
    }

    interface ProcedureResult {
        // todo
    }

    interface ResultSet {
        length: number;

        getIterator(): ResultSetIterator;
    }

    interface Isolation {
        READ_COMMITTED: number;
        REPEATABLE_READ: number;
        SERIALIZABLE: number;
    }

    interface ResultSetIterator {
        next(): boolean;
        value(): any;
    }

    interface xsjs {
        isolation: Isolation;

        getConnection(options?: any): Connection;
    }
}

declare module xsjs.jobs {

    interface Job {
        schedules: JobSchedules;

        activate(credentials: { user: string, password: string }): void;
        configure(config: { user: string, password: string, locale: string, status: boolean, start_time: Date, end_time: Date }): void;
        configure(config: { user: string, password: string, locale: string, status: boolean, start_time: { value: string, format?: string }, end_time: { value: string, format?: string } }): void;
        deactivate(credentials: { user: string, password: string }): void;
    }

    interface JobLogObject {
        planned_time: Date;
        status: string;
        error_message: string;
        started_at: Date;
        finished_at: Date;
        host: string;
        port: string;
        action: string;
        user: string;
        locale: string;
    }

    interface JobLog {
        jobLogs: Array<JobLogObject>;
    }

    interface JobSchedules {
        active: boolean;
        description: string;
        parameter: string;
        xscron: string
        logs: JobLog;

        add(parameters: any): number;
        delete(parameters: any): boolean;
    }

    interface xsjs {

        Job: {
            new (constructJob: { uri: string, sqlcc?: string }): Job;
        };
    }
}

declare module xsjs.net.http {
    interface Client {
        getResponse(): xsjs.web.WebResponse;
        request(request: xsjs.net.http.Request, destination: xsjs.net.http.Destination): void;
        request(request: xsjs.net.http.Request, url: string, proxy?: string): void;
        request(WebMethod: xsjs.net.http, url: string, proxy?: string): void;
        setTimeout(timeout: number): void;
    }

    interface Destination {
        // todo
    }

    interface Request extends xsjs.web.WebRequest {

    }
}

declare module xsjs.net {

    interface http {
        Client: {
            new (): xsjs.net.http.Client;
        };

        Request: {
            new (): xsjs.net.http.Request;
        };

        readDestination(package: string, objectName: string): xsjs.net.http.Destination;

        OPTIONS: number;
        GET: number;
        HEAD: number;
        POST: number;
        PUT: number;
        DEL: number;
        TRACE: number;
        CONNECT: number;
        PATCH: number;
        CONTINUE: number;
        SWITCH_PROTOCOL: number;
        OK: number;
        CREATED: number;
        ACCEPTED: number;
        NON_AUTHORITATIVE: number;
        NO_CONTENT: number;
        RESET_CONTENT: number;
        PARTIAL_CONTENT: number;
        MULTIPLE_CHOICES: number;
        MOVED_PERMANENTLY: number;
        FOUND: number;
        SEE_OTHER: number;
        NOT_MODIFIED: number;
        USE_PROXY: number;
        TEMPORARY_REDIRECT: number;
        BAD_REQUEST: number;
        UNAUTHORIZED: number;
        PAYMENT_REQUIRED: number;
        FORBIDDEN: number;
        NOT_FOUND: number;
        METHOD_NOT_ALLOWED: number;
        NOT_ACCEPTABLE: number;
        PROXY_AUTH_REQUIRED: number;
        REQUEST_TIMEOUT: number;
        CONFLICT: number;
        GONE: number;
        LENGTH_REQUIRED: number;
        PRECONDITION_FAILED: number;
        REQUEST_ENTITY_TOO_LARGE: number;
        REQUEST_URI_TOO_LONG: number;
        UNSUPPORTED_MEDIA_TYPE: number;
        REQUESTED_RANGE_NOT_SATISFIABLE: number;
        EXPECTATION_FAILED: number;
        INTERNAL_SERVER_ERROR: number;
        NOT_YET_IMPLEMENTED: number;
        BAD_GATEWAY: number;
        SERVICE_UNAVAILABLE: number;
        GATEWAY_TIMEOUT: number;
        HTTP_VERSION_NOT_SUPPORTED: number;
    }

    interface Part {
        TYPE_TEXT: string;
        TYPE_ATTACHMENT: string;
        TYPE_INLINE: string

        alternative: string;
        alternativeContentType: string;
        contentId: string;
        contentType: string;
        data: any;
        encoding: string;
        fileName: string;
        fileNameEncoding: string;
        text: string;
        type: string;
    }

    interface SendReply {
        messageId: string;
        finalReply: string;
    }

    interface Mail {
        bcc: any;
        cc: any;
        parts: any;
        sender: any;
        subject: string;
        subjectEncoding: string;

        send(): SendReply;

        Part: {
            new (input?: any): xsjs.net.Part;
        };
    }

    // todo
    interface xsjs {
        status: number;
        http: http;

        Mail: {
            new (input?: any): xsjs.net.Mail;
            Part: Part;
        };

        // todo
    }
}

declare module xsjs.security.crypto {
    interface xsjs {
        md5(data: string, key?: string): ArrayBuffer;
        md5(data: ArrayBuffer, key?: string): ArrayBuffer;

        sha1(data: string, key?: string): ArrayBuffer;
        sha1(data: ArrayBuffer, key?: string): ArrayBuffer;

        sha256(data: string, key?: string): ArrayBuffer;
        sha256(data: ArrayBuffer, key?: string): ArrayBuffer;
    }
}

declare module xsjs.security {

    interface AntiVirus {
        scan(data: any, objectName?: string): void;
    }

    interface Store {
        read(parameters: any): string;
        readForUser(parameters: any): string;
        remove(parameters: any): void;
        removeForUser(parameters: any): void;
        store(parameters: any): void;
        storeForUser(parameters: any): void;
    }

    interface xsjs {
        AntiVirus: {
            new (profile?: string): AntiVirus;
        };

        Store: {
            new (secureStoreFile: string): Store;
        };

        crypto: xsjs.security.crypto.xsjs;
    }
}

declare module xsjs.trace {

    interface xsjs {
        debug(message: string): void;
        error(message: string): void;
        fatal(message: string): void;
        info(message: string): void;
        warning(message: string): void;
    }
}

declare module xsjs.util {

    interface SAXParser {
        attlistDeclHandler: (elname: string, attname: string, att_type: string, dflt: string, isrequired: number) => void;
        characterDataHandler: (s: string) => void;
        commentHandler: (data: string) => void;
        currentByteIndex: number;
        currentColumnNumber: number;
        currentLineNumber: number;
        endCDataSectionHandler: () => void;
        endDoctypeDeclHandler: () => void;
        endElementHandler: (name: string) => void;
        endNameSpaceDeclHandler: (prefix: string) => void;
        entityDeclHandler: (entityName: string, is_parameter_entity: number, value: string, systemId: string, publicId: string, notationName: string) => void;
        externalEntityRefHandler: (context: string, systemId: string, publicId: string) => void;
        notationDeclHandler: (notationName: string, systemId: string, publicId: string) => void;
        processingInstructionHandler: (target: string, data: string) => void;
        startCDataSectionHandler: () => void;
        startDoctypeDeclHandler: (doctypeName: string, sysid: string, pubid: string, has_internal_subset: number) => void;
        startElementHandler: (name: string, atts: any) => void;
        startNameSpaceDeclHandler: (prefix: string, uri: string) => void;
        xmlDeclHandler: (version: string, encoding: string, standalone: number) => void;

        parse(xml: string): void;
        parse(xml: ArrayBuffer, encoding?: string): void;
        parse(xml: xsjs.web.Body, encoding?: string): void;
        reset(): void;
        resume(): void;
        stop(isResumable: boolean): void;

    }

    interface Zip {
        asArrayBuffer(): ArrayBuffer;
    }

    interface xsjs {
        stringify(arrayBuffer: ArrayBuffer): string;

        SAXParser: {
            new (): SAXParser;
        };

        Zip: {
            new (source?: any, index?: number, password?: string): Zip;
        };

        codec: xsjs.util.codec.xsjs;
        compression: xsjs.util.compression.xsjs;
    }
}

declare module xsjs.util.compression {

    interface xsjs {
        gunzip(source: ArrayBuffer): ArrayBuffer;
        gunzip(source: xsjs.web.Body): ArrayBuffer;

        gzip(source: ArrayBuffer): ArrayBuffer;
        gzip(source: string): ArrayBuffer;
        gzip(source: xsjs.web.Body): ArrayBuffer;
    }

}

declare module xsjs.util.codec {

    interface xsjs {
        decodeBase64(base64Data: string): ArrayBuffer;
        decodeHex(hexData: string): ArrayBuffer;
        encodeBase64(data: string): string;
        encodeBase64(data: ArrayBuffer): string;
        encodeHex(data: string): string;
        encodeHex(data: ArrayBuffer): string;
    }

}

declare module xsjs.web {
    interface Body {
        asArrayBuffer(): ArrayBuffer;
        asString(): string;
        asWebRequest(): xsjs.web.WebRequest;
    }

    interface EntityList {
        length: number;

        create(): WebEntityResponse;
    }

    interface TupelList {
        length: number;

        get(name: string): string;
        remove(name: string): void;
        set(name: string, value: string): boolean;
    }

    interface WebEntityRequest {
        body: Body;
        contentType: string;
        entities: EntityList;
        headers: TupelList;
        parameters: TupelList;

        setBody(body: any, index?: number): void;
    }

    interface WebEntityResponse {
        body: Body;
        contentType: string;
        entities: EntityList;
        headers: TupelList;

        setBody(body: any, index?: number): void;
    }

    interface WebRequest extends WebEntityRequest {
        cookies: TupelList;
        language: string;
        method: number;
        path: string;
        queryPath: string;
    }

    interface WebResponse extends WebEntityResponse {
        cacheControl: string;
        cookies: TupelList;
        status: number; // todo?

        followUp(object: any): void;
    }

    interface xsjs {
        // todo
    }
}

declare var $: xsjs.xsjs;