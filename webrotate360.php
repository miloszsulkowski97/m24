<?php
// to AdminProductsController.php 
$this->webRotateOver();

// to /override/cotrollers/admin/AdminProductsController.php

public function webRotateOver()
    {   
        if (Validate::isLoadedObject($product = new Product((int)Tools::getValue('id_product')))) {
            $id_product_old = $product->id; }

        $config = Db::getInstance()->getValue('SELECT config_file_url FROM '._DB_PREFIX_.'webrotate360 WHERE id_product=' . $id_product_old);
        $root = Db::getInstance()->getValue('SELECT root_path FROM '._DB_PREFIX_.'webrotate360 WHERE id_product=' . $id_product_old);

        $rec_exists = Tools::getValue("rec_exists");
        $id_product = Db::getInstance()->getValue('SELECT id_product FROM '._DB_PREFIX_.'product ORDER BY id_product DESC');

        Db::getInstance()->insert("webrotate360", array("id_product" => $id_product, "config_file_url" => pSQL($config), "root_path" => pSQL($root)));
    }


?>
