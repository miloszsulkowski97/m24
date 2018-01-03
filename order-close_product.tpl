{if ($smarty.now|date_format:"%d.%m.%y" <= '19.11.2017') && ($product->id_manufacturer == 4 || $product->id_manufacturer == 5 || $product->id_manufacturer == 6 || $product->id_manufacturer == 7 || $product->id_manufacturer == 8 || $product->id_manufacturer == 9 || $product->id_manufacturer == 10 || $product->id_manufacturer == 11 || $product->id_manufacturer == 12 || $product->id_manufacturer == 13) && $product->id_supplier != 7}

	<div class="alert alert-info info-unavailable">V prípade, že si objednáte tento výrobok <span id="active-day">{if $product->id_manufacturer == 5}5.11.2017{/if}{if $product->id_manufacturer == 6}9.11.2017{/if}{if $product->id_manufacturer == 7}9.11.2017{/if}{if $product->id_manufacturer == 8}9.11.2017{/if}{if $product->id_manufacturer == 9}14.11.2017{/if}{if $product->id_manufacturer == 10}14.11.2017{/if}{if $product->id_manufacturer == 11}16.11.2017{/if}{if $product->id_manufacturer == 12}19.11.2017{/if}{if $product->id_manufacturer == 13}19.11.2017{/if}</span>, bude doručen až po Novém roce.</div>

{elseif ($smarty.now|date_format:"%d.%m.%y" < '23.11.2017') && ($smarty.now|date_format:"%d.%m.%y" > '19.11.2017') && ($product->id_manufacturer == 4 || $product->id_manufacturer == 5 || $product->id_manufacturer == 6 || $product->id_manufacturer == 7 || $product->id_manufacturer == 8 || $product->id_manufacturer == 9 || $product->id_manufacturer == 10 || $product->id_manufacturer == 11 || $product->id_manufacturer == 12 || $product->id_manufacturer == 13) && $product->id_supplier != 7}

	<div class="alert alert-info info-unavailable">V prípade, že si objednáte tento výrobok po <span id="active-day">{if $product->id_manufacturer == 5}5.11.2017{/if}{if $product->id_manufacturer == 6}9.11.2017{/if}{if $product->id_manufacturer == 7}9.11.2017{/if}{if $product->id_manufacturer == 8}9.11.2017{/if}{if $product->id_manufacturer == 9}14.11.2017{/if}{if $product->id_manufacturer == 10}14.11.2017{/if}{if $product->id_manufacturer == 11}16.11.2017{/if}{if $product->id_manufacturer == 12}19.11.2017{/if}{if $product->id_manufacturer == 13}19.11.2017{/if}</span>, bude Vám dodaný až po Novom roku.</div>

{else}

	<div class="alert alert-info info-unavailable">V prípade, že si objednáte tento výrobok po 23.11.2017, bude Vám dodaný až po Novom roku.</div>

{/if}
