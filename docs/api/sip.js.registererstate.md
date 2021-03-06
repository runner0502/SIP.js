<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [sip.js](./sip.js.md) &gt; [RegistererState](./sip.js.registererstate.md)

## RegistererState enum

[Registerer](./sip.js.registerer.md) state.

<b>Signature:</b>

```typescript
export declare enum RegistererState 
```

## Enumeration Members

|  Member | Value | Description |
|  --- | --- | --- |
|  Initial | <code>&quot;Initial&quot;</code> |  |
|  Registered | <code>&quot;Registered&quot;</code> |  |
|  Terminated | <code>&quot;Terminated&quot;</code> |  |
|  Unregistered | <code>&quot;Unregistered&quot;</code> |  |

## Remarks

Valid state transitions:

```
1. "initial" --> "registered"
2. "initial" --> "unregistered"
3. "initial" --> "terminated"
4. "registered" --> "unregistered"
5. "registered" --> "terminated"
6. "unregistered" --> "registered"
7. "unregistered" --> "terminated"

```

