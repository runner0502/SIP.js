<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [sip.js](./sip.js.md) &gt; [InviterOptions](./sip.js.inviteroptions.md)

## InviterOptions interface

Options for [Inviter](./sip.js.inviter.md) constructor.

<b>Signature:</b>

```typescript
export interface InviterOptions extends SessionOptions 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [anonymous](./sip.js.inviteroptions.anonymous.md) | <code>boolean</code> | If true, an anonymous call. |
|  [body](./sip.js.inviteroptions.body.md) | <code>string</code> |  |
|  [contentType](./sip.js.inviteroptions.contenttype.md) | <code>string</code> |  |
|  [earlyMedia](./sip.js.inviteroptions.earlymedia.md) | <code>boolean</code> | If true, the first answer to the local offer is immediately utilized for media. Requires that the INVITE request MUST NOT fork. Has no effect if <code>inviteWtihoutSdp</code> is true. Default is false. |
|  [extraHeaders](./sip.js.inviteroptions.extraheaders.md) | <code>Array&lt;string&gt;</code> | Array of extra headers added to the INVITE. |
|  [inviteWithoutSdp](./sip.js.inviteroptions.invitewithoutsdp.md) | <code>boolean</code> | If true, send INVITE without SDP. Default is false. |
|  [onInfo](./sip.js.inviteroptions.oninfo.md) | <code>any</code> |  |
|  [params](./sip.js.inviteroptions.params.md) | <code>{</code><br/><code>        fromDisplayName?: string;</code><br/><code>        fromTag?: string;</code><br/><code>        fromUri?: string &#124; URI;</code><br/><code>        toDisplayName?: string;</code><br/><code>        toUri?: string &#124; URI;</code><br/><code>    }</code> |  |
|  [renderbody](./sip.js.inviteroptions.renderbody.md) | <code>string</code> |  |
|  [rendertype](./sip.js.inviteroptions.rendertype.md) | <code>string</code> |  |
|  [sessionDescriptionHandlerModifiers](./sip.js.inviteroptions.sessiondescriptionhandlermodifiers.md) | <code>Array&lt;SessionDescriptionHandlerModifier&gt;</code> | Modifiers to pass to SessionDescriptionHandler's getDescription() and setDescription(). |
|  [sessionDescriptionHandlerOptions](./sip.js.inviteroptions.sessiondescriptionhandleroptions.md) | <code>SessionDescriptionHandlerOptions</code> | Options to pass to SessionDescriptionHandler's getDescription() and setDescription(). |

