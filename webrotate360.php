<?php
// to AdminProductsController.php right after Hook::exec('actionProductadd')...; line
Product::webRotateOver($id_product_old, $product->id);

// to /override/classes/Product.php

public function webRotateOver($id_productold, $id_product)
    {   

        $config = Db::getInstance()->getValue('SELECT config_file_url FROM '._DB_PREFIX_.'webrotate360 WHERE id_product=' . (int)$id_productold);
        $root = Db::getInstance()->getValue('SELECT root_path FROM '._DB_PREFIX_.'webrotate360 WHERE id_product=' . (int)$id_productold);

        return Db::getInstance()->insert("webrotate360", array("id_product" => (int)$id_product, "config_file_url" => pSQL($config), "root_path" => pSQL($root)));
    }


?>
