import { compileExpression } from "@m93a/filtrex";
import React from "react";

type evt = React.ChangeEvent<HTMLInputElement>;

export class Filtrex extends React.Component
{
    private data: object = {};
    private expr: (o: object) => any = () => undefined;
    private result: any;
    private jsonError: string = "";
    private exprError: string = "";
    private evalError: string = "";

    public render()
    {
        return <>
            <input placeholder="Enter JSON..." onChange={this.jsonChanged} /> <br/>
            <input placeholder="Enter filtrex..." onChange={this.filtrexChanged} /> <br/>
            <p>JSON Error: {this.jsonError}</p>
            <p>Filtrex Error: {this.exprError}</p>
            <p>Evaluation Error: {this.evalError}</p>
            <p>Result: {this.result+''}</p>
        </>;
    }

    private jsonChanged = (evt: evt) =>
    {
        try { this.data = JSON.parse(evt.target.value); this.jsonError = ''; }
        catch (err) { this.jsonError = ''+err; }
        finally { this.update(); }
    }

    private filtrexChanged = (evt: evt) =>
    {
        try { this.expr = compileExpression(evt.target.value, {}); this.exprError = ''; }
        catch (err) { this.exprError = ''+err; }
        finally { this.update(); }
    }

    private update = () =>
    {
        try { if (this.data && this.expr) this.result = this.expr(this.data); this.evalError = ''; }
        catch (err) { this.evalError = ''+err; }
        finally { this.forceUpdate(); }
    }
}