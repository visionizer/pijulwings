<script lang="ts">
import { onMount } from "svelte";

import ChangesSidebar from "./ChangesSidebar.svelte";

    let text = "";
    //let trackedFiles: Array{string, number};
    let doesDotPijuLExist: boolean = false;

    // TODOS
    let todos: Array<{text: String; completed: boolean }> = []

    function record(remote: String, channel: String) {
        const msg: string = text;
        text = "";
        tsvscode.postMessage({type: "recordChanges", message: msg, channel: channel, remote: remote});
    }

    onMount(() => {
        window.addEventListener("message", (event) => {
            const message = event.data;
            switch (message.type) {
                case "new-todo":
                    todos = [{text: message.value, completed: false}, ...todos];
            }
        })
    })

</script>

<style>
</style>


{#if !doesDotPijuLExist}
<p>No Pijul Repository found</p>
<button on:click={() => {
        tsvscode.postMessage({type: "initNewPijulRepo", value: ""});
        doesDotPijuLExist = true    
}}>Initialize Repository</button>
{:else}
<form on:submit|preventDefault={(e) => {
    // TODOS
    todos = [{text, completed: false}, ...todos];
    text = "";
    e.preventDefault();
}}>
    <input placeholder="Message (Enter to record)" bind:value={text}/>
    <button type="submit" on:click={() => {
        record("Lolz", "Lelz");
    }}>Record</button>
</form>

<h2>Tracked Files</h2>

<ul>
    <li><img src="../../" alt=""> filename.ts</li>
</ul>


{/if}